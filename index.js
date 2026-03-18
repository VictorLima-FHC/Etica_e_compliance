document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.accordion-item');

  items.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    const body   = item.querySelector('.accordion-body');

    if (!header || !body) return;

    header.setAttribute('aria-expanded', 'false');
    body.setAttribute('hidden', '');

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      if (isOpen) {
        item.classList.remove('is-open');
        header.setAttribute('aria-expanded', 'false');
        body.addEventListener('transitionend', () => {
          if (!item.classList.contains('is-open')) {
            body.setAttribute('hidden', '');
          }
        }, { once: true });
      } else {
        body.removeAttribute('hidden');
        body.getBoundingClientRect();
        item.classList.add('is-open');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });

  const blocos = document.querySelectorAll('.bloco__body');

  blocos.forEach((bloco) => {
    const title = bloco.querySelector('.bloco__title');

    title.addEventListener('click', () => {
      const isActive = bloco.classList.contains('active');

      blocos.forEach((b) => b.classList.remove('active'));

      if (!isActive) {
        bloco.classList.add('active');
      }
    });
  });
});