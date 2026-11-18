const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
function closeMenu(returnFocus = false) {
  menuButton?.setAttribute('aria-expanded', 'false');
  navLinks?.classList.remove('is-open');
  if (returnFocus) menuButton?.focus();
}
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navLinks?.classList.toggle('is-open', open);
});
navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.nav')) closeMenu();
});
window.matchMedia('(min-width: 761px)').addEventListener('change', () => closeMenu());
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const marquees = [...document.querySelectorAll('[data-marquee]')];
marquees.forEach(marquee => {
  const track = marquee.querySelector('.skills-track');
  const group = marquee.querySelector('.skills-group');
  if (!track || !group) return;

  const duplicate = group.cloneNode(true);
  duplicate.setAttribute('aria-hidden', 'true');
  track.append(duplicate);
});

const marqueeObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.dataset.inView = String(entry.isIntersecting);
        entry.target.classList.toggle('is-paused', !entry.isIntersecting || document.hidden || entry.target.dataset.userPaused === 'true');
      });
    }, { rootMargin: '120px 0px' })
  : null;

marquees.forEach(marquee => marqueeObserver?.observe(marquee));
document.addEventListener('visibilitychange', () => {
  marquees.forEach(marquee => {
    marquee.classList.toggle('is-paused', document.hidden || marquee.dataset.inView === 'false' || marquee.dataset.userPaused === 'true');
  });
});


// One project, two formats. Native horizontal scrolling also works without JS.
const debtGallery = document.querySelector('.debt-gallery');
if (debtGallery) {
  const slides = debtGallery.querySelector('.debt-slides');
  const previous = debtGallery.querySelector('[data-debt-prev]');
  const next = debtGallery.querySelector('[data-debt-next]');
  const status = debtGallery.querySelector('[data-debt-status]');
  const formats = ['Magazine', 'Infographic'];
  let current = 0;
  debtGallery.querySelector('.debt-gallery-controls').hidden = false;
  debtGallery.querySelector('.debt-format-picker').hidden = false;
  const formatButtons = [...debtGallery.querySelectorAll('[data-debt-format]')];
  formatButtons.forEach(button => button.addEventListener('click', () => moveDebtGallery(Number(button.dataset.debtFormat))));
  function updateDebtGallery() {
    current = Math.max(0, Math.min(1, Math.round(slides.scrollLeft / slides.clientWidth)));
    formatButtons.forEach((button, index) => button.setAttribute('aria-pressed', String(index === current)));
    previous.disabled = false;
    next.disabled = false;
    const text = `${current + 1} / 2 · ${formats[current]}`;
    if (status.textContent !== text) status.textContent = text;
    // Keep off-screen file links out of the keyboard tab sequence.
    [...slides.children].forEach((slide, index) => {
      slide.querySelectorAll('a').forEach(link => { link.tabIndex = index === current ? 0 : -1; });
    });
  }
  function moveDebtGallery(index) {
    slides.scrollTo({left: ((index + formats.length) % formats.length) * slides.clientWidth,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  }
  previous.addEventListener('click', () => moveDebtGallery(current - 1));
  next.addEventListener('click', () => moveDebtGallery(current + 1));
  slides.addEventListener('scroll', updateDebtGallery, {passive: true});
  slides.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      moveDebtGallery(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  let galleryWidth = slides.clientWidth;
  new ResizeObserver(() => {
    if (slides.clientWidth !== galleryWidth) {
      galleryWidth = slides.clientWidth;
      slides.scrollTo({left: current * galleryWidth, behavior: 'instant'});
    }
  }).observe(slides);
  updateDebtGallery();
}

// Motion stays optional, including on touch devices.
const motionToggle = document.querySelector('.motion-toggle');
if (motionToggle && marquees.length) {
  motionToggle.hidden = false;
  motionToggle.addEventListener('click', () => {
    const paused = motionToggle.getAttribute('aria-pressed') !== 'true';
    motionToggle.setAttribute('aria-pressed', String(paused));
    motionToggle.textContent = paused ? 'Resume motion' : 'Pause motion';
    marquees.forEach(marquee => {
      marquee.dataset.userPaused = String(paused);
      marquee.classList.toggle('is-paused', paused || document.hidden || marquee.dataset.inView === 'false');
    });
  });
}
// Indicate the section being read without changing navigation or scroll position.
if ('IntersectionObserver' in window) {
  const navigationSections = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
        if (link.getAttribute('href') === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, {rootMargin: '-15% 0px -65% 0px', threshold: 0});
  document.querySelectorAll('main>section[id]').forEach(section => navigationSections.observe(section));
}
