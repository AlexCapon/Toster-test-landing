console.log('dropdown script is loaded');

const dropDownButton = document.querySelector('#dropdown-button');
const arrow = document.querySelector('#dropdown-arrow');
const content = document.querySelector('#dropdown-content');

dropDownButton.addEventListener('click', () => {
  arrow.classList.toggle('closed');
  const dropdownIsClosed = arrow.classList.contains('closed');
  content.style.display = dropdownIsClosed ? 'none' : 'flex';
});
