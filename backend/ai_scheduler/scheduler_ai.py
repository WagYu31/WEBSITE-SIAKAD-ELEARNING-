"""
AI Scheduling Engine — STIA Bayuangga
Algoritma cerdas untuk rekomendasi penjadwalan ruang & jam kuliah.
Menghindari konflik dosen, ruang, dan waktu secara otomatis.
"""

from typing import List, Dict, Tuple, Optional
from dataclasses import dataclass, field
from enum import Enum
import json

class TipeKelas(Enum):
    OFFLINE = "Offline"
    ONLINE = "Online"
    HYBRID = "Hybrid"

@dataclass
class TimeSlot:
    mulai: str
    selesai: str

    @property
    def label(self) -> str:
        return f"{self.mulai}-{self.selesai}"

    def __hash__(self):
        return hash((self.mulai, self.selesai))

    def __eq__(self, other):
        return self.mulai == other.mulai and self.selesai == other.selesai

@dataclass
class JadwalEntry:
    id: int
    prodi: str
    semester: int
    kode_mk: str
    nama_mk: str
    dosen: str
    hari: str
    jam_mulai: str
    jam_selesai: str
    ruang: str
    tipe_kelas: str
    kelas: str
    sks: int

@dataclass
class Recommendation:
    hari: str
    jam_mulai: str
    jam_selesai: str
    ruang: str
    score: float  # 0-100, higher is better
    reasons: List[str] = field(default_factory=list)
    conflicts: List[str] = field(default_factory=list)

    def to_dict(self) -> dict:
        return {
            "hari": self.hari,
            "jamMulai": self.jam_mulai,
            "jamSelesai": self.jam_selesai,
            "ruang": self.ruang,
            "score": round(self.score, 1),
            "reasons": self.reasons,
            "conflicts": self.conflicts,
        }


# ──── Standard Configuration ────────────────────────────────────────────────

DAYS = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]

TIME_SLOTS = [
    TimeSlot("07:30", "09:10"),
    TimeSlot("09:20", "11:00"),
    TimeSlot("11:10", "12:50"),
    TimeSlot("13:00", "14:40"),
    TimeSlot("14:50", "16:30"),
]

# Preferred teaching hours (morning slots get higher preference)
SLOT_PREFERENCE = {
    "07:30": 95,
    "09:20": 90,
    "11:10": 75,
    "13:00": 65,
    "14:50": 55,
}

# Day preference (weekdays preferred over Saturday)
DAY_PREFERENCE = {
    "Senin": 90,
    "Selasa": 88,
    "Rabu": 86,
    "Kamis": 84,
    "Jumat": 80,
    "Sabtu": 60,
}

# ──── AI Scheduling Algorithm ────────────────────────────────────────────────

class SchedulerAI:
    """
    AI Scheduling Engine.

    Analyzes the existing schedule to recommend optimal time slots and rooms
    when changing a class from Online to Offline mode.

    Scoring factors:
    1. Room availability (no double-booking)  — critical
    2. Dosen availability (no time conflicts)  — critical
    3. Time preference (morning > afternoon)   — moderate
    4. Day preference (weekdays > Saturday)    — moderate
    5. Dosen workload balancing (spread across days) — minor
    6. Same-semester clustering (group same-semester classes) — minor
    """

    def __init__(self, schedule: List[dict], rooms: List[str]):
        self.schedule = [self._parse_entry(j) for j in schedule]
        self.rooms = rooms
        self._build_indices()

    def _parse_entry(self, raw: dict) -> JadwalEntry:
        return JadwalEntry(
            id=raw.get("id", 0),
            prodi=raw.get("prodi", ""),
            semester=raw.get("semester", 0),
            kode_mk=raw.get("kodeMK", ""),
            nama_mk=raw.get("namaMK", ""),
            dosen=raw.get("dosen", ""),
            hari=raw.get("hari", ""),
            jam_mulai=raw.get("jamMulai", ""),
            jam_selesai=raw.get("jamSelesai", ""),
            ruang=raw.get("ruang", ""),
            tipe_kelas=raw.get("tipeKelas", "Offline"),
            kelas=raw.get("kelas", ""),
            sks=raw.get("sks", 0),
        )

    def _build_indices(self):
        """Build lookup indices for fast conflict detection."""
        # room_usage[(hari, jam_mulai)] = set of rooms in use
        self.room_usage: Dict[Tuple[str, str], set] = {}
        # dosen_usage[(hari, jam_mulai)] = set of dosen names teaching
        self.dosen_usage: Dict[Tuple[str, str], set] = {}
        # dosen_days[dosen] = set of days they teach
        self.dosen_days: Dict[str, set] = {}
        # semester_day_count[(semester, prodi, hari)] = count of classes
        self.semester_slots: Dict[Tuple[int, str, str], int] = {}

        for j in self.schedule:
            if j.tipe_kelas == TipeKelas.ONLINE.value:
                # Online classes don't occupy rooms (but dosen is still busy)
                key = (j.hari, j.jam_mulai)
                if key not in self.dosen_usage:
                    self.dosen_usage[key] = set()
                self.dosen_usage[key].add(j.dosen)
                continue

            key = (j.hari, j.jam_mulai)

            # Room usage
            if key not in self.room_usage:
                self.room_usage[key] = set()
            if j.ruang and j.ruang != "—":
                self.room_usage[key].add(j.ruang)

            # Dosen usage
            if key not in self.dosen_usage:
                self.dosen_usage[key] = set()
            self.dosen_usage[key].add(j.dosen)

            # Dosen days
            if j.dosen not in self.dosen_days:
                self.dosen_days[j.dosen] = set()
            self.dosen_days[j.dosen].add(j.hari)

            # Semester distribution
            sem_key = (j.semester, j.prodi, j.hari)
            self.semester_slots[sem_key] = self.semester_slots.get(sem_key, 0) + 1

    def recommend(
        self,
        target_id: int,
        preferred_rooms: Optional[List[str]] = None,
        max_results: int = 5,
    ) -> List[Recommendation]:
        """
        Generate AI recommendations for moving a class from Online to Offline.

        Args:
            target_id: ID of the jadwal entry to reschedule
            preferred_rooms: Optional list of preferred room codes
            max_results: Maximum number of recommendations to return

        Returns:
            Sorted list of Recommendations (best first)
        """
        # Find the target entry
        target = None
        for j in self.schedule:
            if j.id == target_id:
                target = j
                break

        if not target:
            return []

        rooms_to_check = preferred_rooms or self.rooms
        recommendations: List[Recommendation] = []

        for day in DAYS:
            for slot in TIME_SLOTS:
                for room in rooms_to_check:
                    rec = self._evaluate_slot(target, day, slot, room)
                    if rec.score > 0:  # Only include viable options
                        recommendations.append(rec)

        # Sort by score (descending)
        recommendations.sort(key=lambda r: r.score, reverse=True)

        return recommendations[:max_results]

    def _evaluate_slot(
        self, target: JadwalEntry, day: str, slot: TimeSlot, room: str
    ) -> Recommendation:
        """Evaluate a potential (day, time, room) combination and score it."""
        score = 100.0
        reasons: List[str] = []
        conflicts: List[str] = []

        key = (day, slot.mulai)

        # ─── CRITICAL: Room Conflict Check ───
        used_rooms = self.room_usage.get(key, set())
        if room in used_rooms:
            # Check if it's the target's own slot (replacing itself is fine)
            is_self = (day == target.hari and slot.mulai == target.jam_mulai)
            if not is_self:
                score -= 100  # Fatal — room is taken
                conflicts.append(f"🚫 Ruang {room} sudah dipakai pada {day} {slot.label}")
                return Recommendation(day, slot.mulai, slot.selesai, room, max(0, score), reasons, conflicts)

        # ─── CRITICAL: Dosen Schedule Conflict ───
        busy_dosen = self.dosen_usage.get(key, set())
        if target.dosen in busy_dosen:
            is_self = (day == target.hari and slot.mulai == target.jam_mulai)
            if not is_self:
                score -= 100  # Fatal — dosen is teaching elsewhere
                conflicts.append(f"🚫 Dosen {target.dosen.split(',')[0]} mengajar MK lain pada {day} {slot.label}")
                return Recommendation(day, slot.mulai, slot.selesai, room, max(0, score), reasons, conflicts)

        # ─── Room is FREE ───
        reasons.append(f"✅ Ruang {room} tersedia")
        reasons.append(f"✅ Dosen {target.dosen.split(',')[0]} tersedia")

        # ─── SCORING: Time Preference ───
        time_pref = SLOT_PREFERENCE.get(slot.mulai, 50)
        time_bonus = (time_pref - 50) / 50 * 15  # ±15 points max
        score += time_bonus
        if time_pref >= 85:
            reasons.append("⏰ Jam pagi (ideal untuk konsentrasi)")
        elif time_pref >= 70:
            reasons.append("⏰ Jam siang (cukup baik)")

        # ─── SCORING: Day Preference ───
        day_pref = DAY_PREFERENCE.get(day, 70)
        day_bonus = (day_pref - 70) / 30 * 10  # ±10 points max
        score += day_bonus
        if day == "Sabtu":
            reasons.append("⚠️ Hari Sabtu (kurang ideal)")

        # ─── SCORING: Dosen Workload Spread ───
        dosen_existing_days = self.dosen_days.get(target.dosen, set())
        if day in dosen_existing_days:
            # Dosen already teaches on this day — slight bonus (less travel)
            score += 3
            reasons.append(f"📅 Dosen sudah mengajar hari {day}")
        else:
            # New day for dosen — might spread workload
            if len(dosen_existing_days) >= 4:
                score -= 5  # Too many different days
                reasons.append("⚠️ Menambah hari kerja dosen")

        # ─── SCORING: Same-semester Clustering ───
        sem_key = (target.semester, target.prodi, day)
        same_sem_count = self.semester_slots.get(sem_key, 0)
        if same_sem_count > 0 and same_sem_count < 4:
            score += 5
            reasons.append(f"📚 {same_sem_count} MK semester {target.semester} sudah di hari {day}")

        # ─── SCORING: Room busyness (prefer less busy rooms) ───
        room_total_usage = sum(1 for k, rooms in self.room_usage.items() if room in rooms)
        if room_total_usage < 10:
            score += 3
            reasons.append(f"🏠 Ruang {room} relatif kosong ({room_total_usage}/30 slot)")
        elif room_total_usage > 20:
            score -= 3

        # ─── SCORING: Avoid back-to-back with same dosen ───
        slot_idx = TIME_SLOTS.index(slot) if slot in TIME_SLOTS else -1
        if slot_idx > 0:
            prev_key = (day, TIME_SLOTS[slot_idx - 1].mulai)
            prev_dosen = self.dosen_usage.get(prev_key, set())
            if target.dosen in prev_dosen:
                score += 2  # Slightly prefer back-to-back (efficient for dosen)
        if slot_idx < len(TIME_SLOTS) - 1:
            next_key = (day, TIME_SLOTS[slot_idx + 1].mulai)
            next_dosen = self.dosen_usage.get(next_key, set())
            if target.dosen in next_dosen:
                score += 2

        # ─── SCORING: Same day as original (convenient for students) ───
        if day == target.hari:
            score += 5
            reasons.append(f"🔄 Hari sama dengan jadwal sebelumnya ({target.hari})")

        # Clamp score
        score = max(0, min(100, score))

        return Recommendation(day, slot.mulai, slot.selesai, room, score, reasons, conflicts)

    def get_room_heatmap(self) -> Dict[str, Dict[str, list]]:
        """
        Generate a room availability heatmap.
        Returns: { room: { hari: [available_slots] } }
        """
        heatmap = {}
        for room in self.rooms:
            heatmap[room] = {}
            for day in DAYS:
                available = []
                for slot in TIME_SLOTS:
                    key = (day, slot.mulai)
                    used = self.room_usage.get(key, set())
                    available.append({
                        "slot": slot.label,
                        "mulai": slot.mulai,
                        "selesai": slot.selesai,
                        "available": room not in used,
                    })
                heatmap[room][day] = available
        return heatmap

    def get_dosen_availability(self, dosen: str) -> Dict[str, list]:
        """
        Get availability windows for a specific dosen across all days.
        Returns: { hari: [{ slot, available }] }
        """
        availability = {}
        for day in DAYS:
            slots = []
            for slot in TIME_SLOTS:
                key = (day, slot.mulai)
                busy = self.dosen_usage.get(key, set())
                slots.append({
                    "slot": slot.label,
                    "mulai": slot.mulai,
                    "selesai": slot.selesai,
                    "available": dosen not in busy,
                })
            availability[day] = slots
        return availability

    def check_conflict(self, day: str, jam_mulai: str, room: str, dosen: str, exclude_id: int = 0) -> dict:
        """Quick conflict check for a specific slot."""
        key = (day, jam_mulai)
        room_conflict = room in self.room_usage.get(key, set())
        dosen_conflict = dosen in self.dosen_usage.get(key, set())

        # If we're updating existing entry, exclude self
        if exclude_id:
            for j in self.schedule:
                if j.id == exclude_id and j.hari == day and j.jam_mulai == jam_mulai:
                    room_conflict = False
                    dosen_conflict = False
                    break

        return {
            "hasConflict": room_conflict or dosen_conflict,
            "roomConflict": room_conflict,
            "dosenConflict": dosen_conflict,
            "roomMessage": f"Ruang {room} sudah dipakai" if room_conflict else "",
            "dosenMessage": f"Dosen sudah mengajar MK lain" if dosen_conflict else "",
        }
