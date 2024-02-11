console.log('slider script is loaded');

const slider = document.querySelector('#slider');
const slides = Object.values(document.querySelector('#slides').children);
const slidePages = Object.values(document.querySelector('#slider-pages').children);

let touchstartX = 0;
let touchendX = 0;


function checkDerection() {
  if (touchendX < touchstartX) return 'left';
  if (touchendX > touchstartX) return 'right'
  return 'other';
}
function findSelectedIndex(array) {
  let selectedIndex;
  array.forEach((element, index) => {
    if (!element.hasAttribute('hidden')) {
      selectedIndex = index;
    }
  });

  return selectedIndex;
}
function changeSlide(direction) {
  const selectedIndex = findSelectedIndex(slides);
  const slide = slides[selectedIndex];

  if (direction === 'left') {
    const indexIsLast = selectedIndex >= (slides.length - 1);
    if (indexIsLast) {
      const nextSlide = slides[0];
      const nextPage = slidePages[0];

      slide.setAttribute('get-last-out', '');
      nextSlide.setAttribute('get-first-in', '');
      nextSlide.removeAttribute('hidden');
      slide.addEventListener('animationend', () => {
        slide.removeAttribute('get-last-out');
        slide.setAttribute('hidden', '');
      }, { once: true });
      nextSlide.addEventListener('animationend', () => {
        nextSlide.removeAttribute('get-first-in');
      }, { once: true });
      slidePages[selectedIndex].classList.remove('selected');
      nextPage.classList.add('selected');
    } else {
      const nextSlide = slides[selectedIndex + 1];
      const nextPage = slidePages[selectedIndex + 1];

      slide.setAttribute('get-left-out', '');
      nextSlide.setAttribute('get-right-in', '');
      nextSlide.removeAttribute('hidden');
      slide.addEventListener('animationend', () => {
        slide.removeAttribute('get-left-out');
        slide.setAttribute('hidden', '');
      }, { once: true });
      nextSlide.addEventListener('animationend', () => {
        nextSlide.removeAttribute('get-right-in');
      }, { once: true });
      slidePages[selectedIndex].classList.remove('selected');
      nextPage.classList.add('selected');
    }
  }
  if (direction === 'right') {
    const indexIsFirst = selectedIndex <= 0;
    if (indexIsFirst) {
      const nextSlide = slides[slides.length - 1];
      const nextPage = slidePages[slides.length - 1];

      slide.setAttribute('get-first-out', '');
      nextSlide.setAttribute('get-last-in', '');
      nextSlide.removeAttribute('hidden');
      slide.addEventListener('animationend', () => {
        slide.removeAttribute('get-first-out');
        slide.setAttribute('hidden', '');
      }, { once: true });
      nextSlide.addEventListener('animationend', () => {
        nextSlide.removeAttribute('get-last-in');
      }, { once: true });
      slidePages[selectedIndex].classList.remove('selected');
      nextPage.classList.add('selected');
    } else {
      const nextSlide = slides[selectedIndex - 1];
      const nextPage = slidePages[selectedIndex - 1];
  
      slide.setAttribute('get-right-out', '');
      nextSlide.setAttribute('get-left-in', '');
      nextSlide.removeAttribute('hidden');
      slide.addEventListener('animationend', () => {
        slide.removeAttribute('get-right-out');
        slide.setAttribute('hidden', '');
      }, { once: true });
      nextSlide.addEventListener('animationend', () => {
        nextSlide.removeAttribute('get-left-in');
      }, { once: true });
      slidePages[selectedIndex].classList.remove('selected');
      nextPage.classList.add('selected');
    }
  }
}

slider.addEventListener('touchstart', (swipe) => {
  touchstartX = swipe.changedTouches[0].screenX;
});
slider.addEventListener('touchend', (swipe) => {
  touchendX = swipe.changedTouches[0].screenX;
  const direction = checkDerection();
  changeSlide(direction);
});
