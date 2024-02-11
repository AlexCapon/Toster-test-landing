console.log('menu script is loaded');
const openButton = document.querySelector('#open-menu-button');
const closeButton = document.querySelector('#close-menu-button');

openButton.addEventListener('click', () => openMenu());
closeButton.addEventListener('click', () => closeMenu());

// openButton.addEventListener('touchend', () => openMenu());
// closeButton.addEventListener('touchend', () => closeMenu());

function closeModalWindow(window) {;
  window.setAttribute('closing', '');
  window.addEventListener(
    'animationend',
    () => {
      window.removeAttribute('closing');
      window.close();
    },
    { once: true },
  );
}
function openMenu() {
  const modal = document.querySelector('#menu');
  modal.showModal();
  document.addEventListener('click', (event) => {
    if (event.target.nodeName === 'DIALOG') {
      closeModalWindow(modal);
    }
  });
};
function closeMenu() {
  const modal = document.querySelector('#menu');
  closeModalWindow(modal);
};
