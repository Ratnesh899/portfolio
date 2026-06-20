/* ========== PARTICLES ========== */
function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 50; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (10 + Math.random() * 20) + 's';
    p.style.animationDelay = (Math.random() * 20) + 's';
    p.style.width = p.style.height = (2 + Math.random() * 3) + 'px';
    container.appendChild(p);
  }
}
createParticles();

/* ========== PRELOADER ========== */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hidden');
  }, 800);
});

/* ========== TYPING ANIMATION ========== */
const words = ['Backend Developer', 'Node.js Developer', 'API Developer', 'AI & ML Student'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed-text');

function typeEffect() {
  const current = words[wordIndex];
  if (!isDeleting) {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 2000);
      return;
    }
    setTimeout(typeEffect, 80);
  } else {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 500);
      return;
    }
    setTimeout(typeEffect, 40);
  }
}
typeEffect();

/* ========== MOBILE MENU ========== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.textContent = isOpen ? '✕' : '☰';
  hamburger.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.textContent = '☰';
  });
});

/* ========== ACTIVE NAV LINK ========== */
const sections = document.querySelectorAll('.section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
  let current = '';
  sections.forEach(s => {
    const top = s.offsetTop - 120;
    if (scrollY >= top) current = s.id;
  });
  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}

window.addEventListener('scroll', updateActiveNav);

/* ========== NAVBAR SCROLL SHADOW ========== */
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', scrollY > 50);
});

/* ========== SCROLL REVEAL ========== */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

/* ========== ANIMATED COUNTERS ========== */
const counters = document.querySelectorAll('.stat-number');
let countersAnimated = false;

function animateCounters() {
  if (countersAnimated) return;
  countersAnimated = true;

  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target);
    const suffix = counter.dataset.suffix || '';
    let current = 0;
    const step = Math.ceil(target / 40);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      counter.textContent = current + suffix;
    }, 40);
  });
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounters();
      statsObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

const statsGrid = document.querySelector('.stats-grid');
if (statsGrid) statsObserver.observe(statsGrid);

/* ========== 3D TILT ON PROJECT CARDS ========== */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03,1.03,1.03)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) scale3d(1,1,1)';
  });
});

/* ========== 3D TILT ON PROFILE CARD ========== */
const profileCard = document.getElementById('profileCard');
if (profileCard) {
  profileCard.addEventListener('mousemove', (e) => {
    const rect = profileCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;
    profileCard.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05,1.05,1.05)`;
  });

  profileCard.addEventListener('mouseleave', () => {
    profileCard.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) scale3d(1,1,1)';
  });
}

/* ========== PROJECT FILTER ========== */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      if (filter === 'all') {
        card.style.display = 'block';
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
      } else if (filter === 'featured') {
        if (card.dataset.featured === 'true') {
          card.style.display = 'block';
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        } else {
          card.style.display = 'none';
        }
      } else {
        if (card.dataset.category === filter) {
          card.style.display = 'block';
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        } else {
          card.style.display = 'none';
        }
      }
    });
  });
});

/* ========== RESUME PREVIEW MODAL ========== */
const resumePreviewBtn = document.getElementById('resumePreviewBtn');
const resumeModal = document.getElementById('resumeModal');
const resumeModalClose = document.getElementById('resumeModalClose');
const resumeModalCloseBtn = document.getElementById('resumeModalCloseBtn');

function openResumeModal() {
  resumeModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeResumeModal() {
  resumeModal.classList.remove('open');
  document.body.style.overflow = '';
}

if (resumePreviewBtn) {
  resumePreviewBtn.addEventListener('click', openResumeModal);
}
if (resumeModalClose) {
  resumeModalClose.addEventListener('click', closeResumeModal);
}
if (resumeModalCloseBtn) {
  resumeModalCloseBtn.addEventListener('click', closeResumeModal);
}

resumeModal.addEventListener('click', (e) => {
  if (e.target === resumeModal) closeResumeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && resumeModal.classList.contains('open')) closeResumeModal();
});

/* ========== COPY EMAIL ========== */
const copyBtn = document.getElementById('copyEmail');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('ratneshmishra497@gmail.com');
      copyBtn.textContent = 'Copied! ✓';
      setTimeout(() => { copyBtn.textContent = 'Copy Email'; }, 2000);
    } catch {
      // fallback
      const ta = document.createElement('textarea');
      ta.value = 'ratneshmishra497@gmail.com';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      copyBtn.textContent = 'Copied! ✓';
      setTimeout(() => { copyBtn.textContent = 'Copy Email'; }, 2000);
    }
  });
}

/* ========== FORM TOAST ========== */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const toast = document.getElementById('formToast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
    contactForm.reset();
  });
}

/* ========== SKILL BAR ANIMATION ========== */
const skillBars = document.querySelectorAll('.bar-fill');
let barsAnimated = false;

function animateBars() {
  if (barsAnimated) return;
  barsAnimated = true;
  skillBars.forEach(bar => {
    const width = bar.dataset.width;
    setTimeout(() => { bar.style.width = width + '%'; }, 200);
  });
}

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateBars();
      skillsObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });

const skillsSection = document.querySelector('.skills-grid');
if (skillsSection) skillsObserver.observe(skillsSection);
