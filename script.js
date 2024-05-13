const frame = document.querySelector('#frame');
const slides = document.querySelector('#slides');
const prev = document.querySelector('.fa-caret-left');
const next = document.querySelector('.fa-caret-right');
const images = document.querySelectorAll('img');
const nav = document.querySelector('.nav');
const navButtons = document.querySelectorAll('.fa-circle');

// initialize app
let position = 0;
moveSlides(position);

// function for moving slide to position
function moveSlides (position) {
  activateNavButton(position);
  slides.style.transform = `translateX(-${position * 480}px)`;
}

// nav button control
function activateNavButton (position) {
  for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].classList.remove('active');
  }
  navButtons[position].classList.add('active');
}

// next image
next.onclick = () => {
  if (position < (images.length - 1)) position++;
  moveSlides(position);
}

// previous image
prev.onclick = () => {
  if (position > 0 ) position--;
  moveSlides(position);
}

// add nav button functionality
for (let i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener('click', () => {
    moveSlides(i);
    position = i;
  })
}

// slideshow
setInterval( () => {
  if (position < (images.length - 1)) position++;
  else position = 0;
  moveSlides(position);
}, 5000);