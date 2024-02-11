const anchors = document.querySelectorAll('a[href*="#"]');

function scrollToAnchor(element, event) {
  event.preventDefault();
  const blockID = element.getAttribute('href');
  document.querySelector('' + blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

for (let anchor of anchors) { 
  anchor.addEventListener('click', (click) => scrollToAnchor(anchor, click)) 
}
