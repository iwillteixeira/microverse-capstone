const menuButton = document.querySelector('#menu-btn');
const menuModal = document.querySelector('.shadow-menu');
const closeModal = document.querySelector('.close-wrap');
const menuMobileItems = document.querySelectorAll('.menu-mobile-items > li > a');

const animateCSS = (element, animation, prefix = 'animate__') => new Promise((resolve) => {
  const animationName = `${prefix}${animation}`;
  const node = document.querySelector(element);

  node.classList.add(`${prefix}animated`, animationName);

  function handleAnimationEnd(event) {
    event.stopPropagation();
    node.classList.remove(`${prefix}animated`, animationName);
    resolve('Animation ended');
  }

  node.addEventListener('animationend', handleAnimationEnd, { once: true });
});

menuButton.addEventListener('click', () => {
  menuModal.classList.add('showsmenu', 'animate__animated', 'animate__backInDown');
  closeModal.addEventListener('click', () => {
    animateCSS('.shadow-menu', 'fadeOutUp').then(() => {
      menuModal.classList.remove('showsmenu', 'animate__backInDown');
    });
  });
});

menuMobileItems.forEach((e) => {
  e.addEventListener('click', () => {
    animateCSS('.shadow-menu', 'fadeOutUp').then(() => {
      menuModal.classList.remove('showsmenu', 'animate__backInDown');
    });
  });
});