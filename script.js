/* ==========================================
   HARTHIK KUMAR — PORTFOLIO SCRIPTS
   ========================================== */

window.addEventListener('load', function () {

  /* ── 1. CUSTOM CURSOR ─────────────────── */
  var cur  = document.getElementById('cursor');
  var ring = document.getElementById('cursorRing');
  var mx = window.innerWidth / 2;
  var my = window.innerHeight / 2;
  var rx = mx, ry = my;

  document.addEventListener('mousemove', function (e) {
    mx = e.clientX;
    my = e.clientY;
    cur.style.left = mx + 'px';
    cur.style.top  = my + 'px';
  });

  function tickRing() {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(tickRing);
  }
  tickRing();

  document.querySelectorAll('a, button').forEach(function (el) {
    el.addEventListener('mouseenter', function () {
      cur.classList.add('hovered');
      ring.classList.add('hovered');
    });
    el.addEventListener('mouseleave', function () {
      cur.classList.remove('hovered');
      ring.classList.remove('hovered');
    });
  });

  /* ── 2. MOBILE SIDEBAR ────────────────── */
  var menuBtn  = document.getElementById('menuBtn');
  var sidebar  = document.getElementById('sidebar');
  var overlay  = document.getElementById('sidebarOverlay');
  var closeBtn = document.getElementById('closeBtn');

  function openSidebar() {
    sidebar.classList.add('show');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
    menuBtn.classList.add('active');
  }

  function closeSidebar() {
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
    menuBtn.classList.remove('active');
  }

  menuBtn.addEventListener('click', openSidebar);
  closeBtn.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);

  document.querySelectorAll('.sidebar-nav a, .sidebar-hire').forEach(function (link) {
    link.addEventListener('click', closeSidebar);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeSidebar();
  });

  /* ── 3. SCROLL REVEAL ─────────────────── */
  var revealEls = document.querySelectorAll('.reveal');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(function (el) { io.observe(el); });

  /* ── 4. SMOOTH SCROLL ─────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});