const navMenu = document.querySelector('.header-collapsed');
const menuIcon = document.querySelector('#menu-icon');
menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});