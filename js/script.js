const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.main-nav-content');
btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

const allLinks = document.querySelectorAll('.smooth-scroll:link');
console.log(allLinks);
allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    if (link.classList.contains('main-nav-link'))
      headerEl.classList.toggle('nav-open');
  });
});

var swiper = new Swiper('.slide-content', {
  slidesPerView: 2,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    665: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper('.slide-conten', {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: '.pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    665: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
const sectionHeroEl = document.querySelector('.section-hero');

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add('stiky');
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove('stiky');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
observer.observe(sectionHeroEl);
