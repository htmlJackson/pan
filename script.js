(function () {

  const slider = new Splide( '.splide', {
    perPage: 3,
    perMove: 1,
    focus: 0,

    type: 'loop',
    height: '340px',

    breakpoints: {
      1599: {
        height: '280px',
      },
      1279: {
        height: '168px',
      },
      767: {
        perPage: 1,
        height: 0,
      },
    },
  });

  slider.mount();

  const progress = document.querySelector('.progress');
  const progressBar = progress.querySelector('.progress__bar');
  const progressBtn = progress.querySelector('.progress__btn');
  const progressFiller = progress.querySelector('.progress__filler');

  const progressPlusValue = parseInt(progressBtn.textContent);

  progressBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    const progressCurrentWidth = parseInt(progressFiller.textContent);

    let newWidth = progressCurrentWidth + progressPlusValue;

    if (newWidth > 100) {
      newWidth = 100;
    }

    progressFiller.style.width = newWidth + '%';
    progressFiller.textContent = newWidth + '%';
  });


  const nav = document.querySelector('.nav');
  const sublistTriggers = nav.querySelectorAll('.nav__sublist-trigger');

  sublistTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (evt) => {
      evt.preventDefault();
      evt.target.nextElementSibling.classList.toggle('nav__sublist--shown');
      evt.target.classList.toggle('nav__sublist-trigger--active');
    });
  });

  const navToggler = document.querySelector('.header__nav-toggle');
  navToggler.addEventListener('click', (evt) => {
    evt.preventDefault();
    navToggler.classList.toggle('toggle--close');
    nav.classList.toggle('header__nav--shown');
  });

  const dropdownToggler = document.querySelector('.dropdown__showmore-btn');
  const dropdownHiddenText = document.querySelector('.dropdown__text--hidden');

  dropdownToggler.addEventListener('click', (evt) => {
    evt.preventDefault();
    dropdownToggler.remove();
    dropdownHiddenText.classList.remove('dropdown__text--hidden');
  });

  const upBtn = document.querySelector('.up-btn');

  upBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    window.scrollTo(0, 0);
  });
})();
