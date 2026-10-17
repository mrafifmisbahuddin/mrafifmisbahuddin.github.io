document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle?.querySelector('i');
  // Tema disimpan selama sesi browser agar konsisten saat berpindah halaman.
  try {
    if (sessionStorage.getItem('portfolio-theme') === 'light') {
      document.body.classList.add('light-theme');
      if (themeIcon) themeIcon.className = 'bi bi-sun-fill';
    }
  } catch (_) {}

  themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    if (themeIcon) themeIcon.className = isLight ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
    themeToggle.setAttribute('aria-label', isLight ? 'Aktifkan tema gelap' : 'Aktifkan tema terang');
    try { sessionStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark'); } catch (_) {}
  });

  document.querySelectorAll('#navLinks .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const nav = document.getElementById('navLinks');
      if (nav?.classList.contains('show') && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });


  // Animasi reveal ketika elemen masuk ke layar.
  // Menonaktifkan animasi reveal bila pengguna memilih reduced motion.
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    document.body.classList.add('js-motion');
    const revealSelectors = [
      '.home-shortcuts .col-6',
      '.content-card', '.school-card', '.skill-card',
      '.timeline-item', '.notice-card', '.contact-card',
      '.info-list > div'
    ];
    const revealElements = document.querySelectorAll(revealSelectors.join(','));
    revealElements.forEach((element, index) => {
      element.classList.add('reveal-on-scroll');
      element.dataset.delay = String((index % 4) + 1);
    });
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealElements.forEach(element => revealObserver.observe(element));
  }

  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const nama = String(data.get('nama') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subjek = String(data.get('subjek') || '').trim();
    const pesan = String(data.get('pesan') || '').trim();
    const body = `Nama: ${nama}\nEmail: ${email}\n\nPesan:\n${pesan}`;
    // Ganti nilai ini dengan alamat email tujuan yang benar.
    const emailTujuan = 'mrafifmisbahuddin@gmail.com';
    const target = emailTujuan ? `mailto:${emailTujuan}` : 'mailto:';
    window.location.href = `${target}?subject=${encodeURIComponent(subjek)}&body=${encodeURIComponent(body)}`;
    if (feedback) feedback.textContent = emailTujuan
      ? 'Aplikasi email dibuka untuk mengirim pesan.'
      : 'Aplikasi email dibuka. Isi alamat email tujuan di script.js agar pesan terarah.';
  });
});