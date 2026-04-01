"""
AI Scheduler API Server — STIA Bayuangga
Flask REST API for the AI Scheduling Assistant.

Endpoints:
  POST /api/ai/recommend     - Get AI recommendations for rescheduling
  POST /api/ai/conflict      - Quick conflict check
  POST /api/ai/heatmap       - Room availability heatmap
  POST /api/ai/dosen-avail   - Dosen availability check
  GET  /api/ai/health        - Health check
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
from scheduler_ai import SchedulerAI
import json
import os

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# ──── Health Check ───────────────────────────────────────────────────────────

@app.route("/api/ai/health", methods=["GET"])
def health():
    return jsonify({
        "status": "ok",
        "service": "AI Scheduler",
        "version": "1.0.0",
        "engine": "STIA Bayuangga Smart Scheduling AI",
    })


# ──── AI Recommendation Endpoint ─────────────────────────────────────────────

@app.route("/api/ai/recommend", methods=["POST"])
def recommend():
    """
    Get AI recommendations for rescheduling a class.

    Request body:
    {
        "schedule": [...],          // Current full schedule array
        "targetId": 35,             // ID of the entry to reschedule
        "rooms": ["RN-101", ...],   // Available room codes
        "preferredRooms": [...],    // Optional: preferred rooms
        "maxResults": 5             // Optional: max recommendations
    }

    Response:
    {
        "success": true,
        "targetMK": "Sistem Informasi Manajemen",
        "targetDosen": "Eko Wicaksono, S.E., M.Si.",
        "recommendations": [
            {
                "hari": "Senin",
                "jamMulai": "07:30",
                "jamSelesai": "09:10",
                "ruang": "RN-103",
                "score": 92.5,
                "reasons": ["✅ Ruang tersedia", ...],
                "conflicts": []
            }
        ]
    }
    """
    try:
        data = request.get_json()

        if not data:
            return jsonify({"success": False, "error": "No data provided"}), 400

        schedule = data.get("schedule", [])
        target_id = data.get("targetId")
        rooms = data.get("rooms", [])
        preferred_rooms = data.get("preferredRooms")
        max_results = data.get("maxResults", 5)

        if not schedule or not target_id:
            return jsonify({"success": False, "error": "Missing schedule or targetId"}), 400

        if not rooms:
            return jsonify({"success": False, "error": "No rooms provided"}), 400

        # Initialize AI engine
        ai = SchedulerAI(schedule, rooms)

        # Get target info
        target = None
        for j in schedule:
            if j.get("id") == target_id:
                target = j
                break

        # Generate recommendations
        recommendations = ai.recommend(
            target_id=target_id,
            preferred_rooms=preferred_rooms,
            max_results=max_results,
        )

        return jsonify({
            "success": True,
            "targetMK": target.get("namaMK", "") if target else "",
            "targetKodeMK": target.get("kodeMK", "") if target else "",
            "targetDosen": target.get("dosen", "") if target else "",
            "targetCurrentDay": target.get("hari", "") if target else "",
            "targetCurrentTime": f"{target.get('jamMulai', '')}-{target.get('jamSelesai', '')}" if target else "",
            "totalAnalyzed": len(schedule),
            "recommendations": [r.to_dict() for r in recommendations],
        })

    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


# ──── Conflict Check Endpoint ────────────────────────────────────────────────

@app.route("/api/ai/conflict", methods=["POST"])
def conflict_check():
    """
    Quick conflict check for a specific time/room slot.

    Request body:
    {
        "schedule": [...],
        "hari": "Senin",
        "jamMulai": "07:30",
        "ruang": "RN-101",
        "dosen": "Dr. Example",
        "excludeId": 35,    // Optional: exclude this entry (for updates)
        "rooms": [...]
    }
    """
    try:
        data = request.get_json()
        schedule = data.get("schedule", [])
        rooms = data.get("rooms", [])

        ai = SchedulerAI(schedule, rooms)
        result = ai.check_conflict(
            day=data.get("hari", ""),
            jam_mulai=data.get("jamMulai", ""),
            room=data.get("ruang", ""),
            dosen=data.get("dosen", ""),
            exclude_id=data.get("excludeId", 0),
        )

        return jsonify({"success": True, **result})

    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


# ──── Room Heatmap Endpoint ──────────────────────────────────────────────────

@app.route("/api/ai/heatmap", methods=["POST"])
def heatmap():
    """
    Get room availability heatmap.

    Request body: { "schedule": [...], "rooms": [...] }
    """
    try:
        data = request.get_json()
        ai = SchedulerAI(data.get("schedule", []), data.get("rooms", []))
        return jsonify({"success": True, "heatmap": ai.get_room_heatmap()})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


# ──── Dosen Availability Endpoint ────────────────────────────────────────────

@app.route("/api/ai/dosen-avail", methods=["POST"])
def dosen_availability():
    """
    Check dosen availability across all days/slots.

    Request body: { "schedule": [...], "rooms": [...], "dosen": "Name" }
    """
    try:
        data = request.get_json()
        dosen = data.get("dosen", "")
        ai = SchedulerAI(data.get("schedule", []), data.get("rooms", []))
        return jsonify({
            "success": True,
            "dosen": dosen,
            "availability": ai.get_dosen_availability(dosen),
        })
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


# ──── Main ───────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    port = int(os.environ.get("AI_PORT", 5050))
    print(f"""
╔══════════════════════════════════════════════════╗
║   🤖 AI Scheduler Server — STIA Bayuangga       ║
║   Port: {port}                                    ║
║   Endpoints:                                     ║
║     POST /api/ai/recommend   — AI recommendations║
║     POST /api/ai/conflict    — Conflict check    ║
║     POST /api/ai/heatmap     — Room heatmap      ║
║     POST /api/ai/dosen-avail — Dosen availability║
║     GET  /api/ai/health      — Health check      ║
╚══════════════════════════════════════════════════╝
    """)
    app.run(host="0.0.0.0", port=port, debug=True)
