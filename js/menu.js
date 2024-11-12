(() => {
  const mobileMenu = document.querySelector('.js-menu');

  const openMenuBtn = document.querySelector('.js-menu');
  const closeMenuBtn = document.querySelector('.js-menu-close');
  const list = document.querySelector('.backdrop');

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    const expanded = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;

    openMenuBtn.setAttribute('aria-expanded', !expanded);

    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('is-open');
  }

  list.addEventListener('click', e => {
    if (e.target.nodeName !== 'A') return;
    if (e.target.nodeName === 'A') {
      mobileMenu.classList.remove('is-open');
      document.body.classList.remove('is-open');
    }
  });
})();