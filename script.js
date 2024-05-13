const frame = document.querySelector('#frame');
const slides = document.querySelector('#slides');
const prev = document.querySelector('.fa-caret-left');
const next = document.querySelector('.fa-caret-right');
const images = document.querySelectorAll('img');
const nav = document.querySelector('.nav');



Array.from(images).forEach((image) => {
  const navButton = document.createElement('i');
  navButton.classList.add('fa-solid');
  navButton.classList.add('fa-circle');
  nav.appendChild(navButton)
})