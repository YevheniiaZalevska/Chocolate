document.addEventListener('DOMContentLoaded', function () {
  const modalButtons = document.querySelectorAll('.js-open-modal');
  const overlay = document.querySelector('.js-overlay-modal');
  const closeButtons = document.querySelectorAll('.js-modal-close');

  modalButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      const modalId = this.getAttribute('data-modal');
      const modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

      modalElem.classList.add('active');
      overlay.classList.add('active');
      document.body.classList.add('modal-open');
    });
  });

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function () {
      const parentModal = this.closest('.modal');

      parentModal.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('modal-open');
    });
  });

  document.body.addEventListener(
    'keyup',
    function (e) {
      if (e.key === 'Escape') {
        document.querySelector('.modal.active').classList.remove('active');
        document.querySelector('.modal-overlay').classList.remove('active');
        document.body.classList.remove('modal-open');
      }
    },
    false
  );

  overlay.addEventListener('click', function () {
    document.querySelector('.modal.active').classList.remove('active');
    this.classList.remove('active');
    document.body.classList.remove('modal-open');
  });
});