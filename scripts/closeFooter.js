console.log('footer script is loded');

const footer = document.querySelector('#footer');
const readButton = document.querySelector('#read-button');
const fullText = document.querySelector('#footer-text-full');
const partText = document.querySelector('#footer-text-part');

readButton.addEventListener('click', () => {
  fullText.classList.toggle('hidden');
  partText.classList.toggle('hidden');
  footer.classList.toggle('small');
  readButton.textContent = readButton.textContent = 'Read less' ? 'Read more' : 'Read less';
});
