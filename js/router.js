// ============================================
// STIA BAYUANGGA - SPA Router
// ISO 40500/WCAG 2.1 Compliant Navigation
// ============================================

const routes = {};
const routeNames = {};
let currentRoute = null;
let appContainer = null;

export function registerRoute(path, handler, pageName = '') {
  routes[path] = handler;
  routeNames[path] = pageName;
}

export function navigate(path) {
  window.location.hash = path;
}

export function getCurrentRoute() {
  return currentRoute;
}

export function initRouter(containerId) {
  appContainer = document.getElementById(containerId);
  
  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('load', handleRoute);
  
  // If no hash, navigate to landing
  if (!window.location.hash) {
    window.location.hash = '#/';
  } else {
    handleRoute();
  }
}

async function handleRoute() {
  const hash = window.location.hash.slice(1) || '/';
  currentRoute = hash;
  
  // Find matching route
  let handler = routes[hash];
  
  // Try pattern matching for dynamic routes
  if (!handler) {
    for (const [pattern, h] of Object.entries(routes)) {
      if (pattern.includes(':')) {
        const regex = new RegExp('^' + pattern.replace(/:[^/]+/g, '([^/]+)') + '$');
        const match = hash.match(regex);
        if (match) {
          handler = h;
          break;
        }
      }
    }
  }
  
  if (handler && appContainer) {
    // Page transition
    appContainer.style.opacity = '0';
    appContainer.style.transform = 'translateY(10px)';
    
    await new Promise(r => setTimeout(r, 150));
    
    try {
      await handler(appContainer);
    } catch (e) {
      console.error('Route error:', e);
      appContainer.innerHTML = `
        <div style="text-align:center;padding:4rem 2rem;" role="alert">
          <h2>404 - Halaman Tidak Ditemukan</h2>
          <p style="margin:1rem 0;color:#64748B;">Halaman yang Anda cari tidak tersedia.</p>
          <a href="#/" style="color:#0D6EBF;">Kembali ke Beranda</a>
        </div>
      `;
    }
    
    // Fade in
    requestAnimationFrame(() => {
      appContainer.style.transition = 'opacity 0.3s ease';
      appContainer.style.opacity = '1';
      appContainer.style.transform = '';
    });
    
    // ISO 40500/WCAG 2.1: Announce page change to screen readers (4.1.3)
    const announcer = document.getElementById('route-announcer');
    if (announcer) {
      const pageName = routeNames[hash] || hash.replace(/[/#]/g, ' ').trim() || 'Beranda';
      announcer.textContent = `Halaman ${pageName} telah dimuat`;
    }
    
    // ISO 40500/WCAG 2.1: Move focus for keyboard users (2.4.3)
    const mainContent = appContainer.querySelector('h1, h2, [tabindex="-1"]') || appContainer;
    if (mainContent && mainContent !== appContainer) {
      mainContent.setAttribute('tabindex', '-1');
      mainContent.focus({ preventScroll: true });
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
