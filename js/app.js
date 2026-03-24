// ============================================
// STIA BAYUANGGA - App Entry Point
// ============================================

import { initRouter, registerRoute, navigate } from './router.js';
import { renderLanding } from '../pages/landing.js';
import { renderLogin } from '../pages/login.js';
import { renderDashboard } from '../pages/siakad/index.js';
import { renderPortal } from '../pages/portal.js';
import { renderElearning } from '../pages/elearning/index.js';
import { renderPMB } from '../pages/pmb.js';

// ---- State ----
export const appState = {
  user: null,
  role: null,
  theme: localStorage.getItem('theme') || 'light'
};

// Apply saved theme
if (appState.theme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
}

export function setUser(user) {
  appState.user = user;
  appState.role = user?.role || null;
  sessionStorage.setItem('user', JSON.stringify(user));
}

export function getUser() {
  if (!appState.user) {
    const saved = sessionStorage.getItem('user');
    if (saved) {
      appState.user = JSON.parse(saved);
      appState.role = appState.user?.role || null;
    }
  }
  return appState.user;
}

export function logout() {
  appState.user = null;
  appState.role = null;
  sessionStorage.removeItem('user');
  navigate('#/login');
}

export function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  appState.theme = next;
  localStorage.setItem('theme', next);
}

// ---- Register Routes ----
registerRoute('/', (container) => renderLanding(container), 'Beranda');
registerRoute('/login', (container) => renderLogin(container), 'Login');
registerRoute('/portal', (container) => renderPortal(container), 'Portal');
registerRoute('/dashboard', (container) => renderDashboard(container), 'SIAKAD');
registerRoute('/elearning', (container) => renderElearning(container), 'E-Learning');
registerRoute('/pmb', (container) => renderPMB(container), 'PMB');

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  initRouter('app');
});
