console.log('popup script is loaded');

const buyButton = document.querySelector('#buy-button');
const confirmButton = document.querySelector('#confirm-button');
const closePopupButton = document.querySelector('#close-popup-button');

buyButton.addEventListener('click', openPopup);
confirmButton.addEventListener('click', closePopup);
closePopupButton.addEventListener('click', closePopup);

// confirmButton.addEventListener('touchstart', closePopup);
// closePopupButton.addEventListener('touchstart', closePopup);
// buyButton.addEventListener('touchstart', openPopup);

function openPopup() {
  const modal = document.querySelector('#popup');
  modal.showModal();
  document.addEventListener('click', (event) => {
    if (event.target.nodeName === 'DIALOG') {
      closePopup();
    }
  });
}
function closePopup() {
  const modal = document.querySelector('#popup');
  modal.setAttribute('closing', '');
  modal.addEventListener(
    'animationend',
    () => {
      modal.removeAttribute('closing');
      modal.close();
    },
    { once: true },
  );
}
