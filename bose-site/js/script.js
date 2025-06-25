

"use strict"

const burgerLink = document.querySelector('a[href="#menu"]');
const closeLink = document.querySelector('a[href="#home"]');
const menuLinks = document.querySelectorAll('.menu__nav-link');

burgerLink.addEventListener('click', () => {
  document.body.classList.add('no-scroll');
});

closeLink.addEventListener('click', () => {
  document.body.classList.remove('no-scroll');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('no-scroll');
  });
});

