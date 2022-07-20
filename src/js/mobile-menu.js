const burgerIcon = document.querySelector('.navbar__burger-icon');
const closeIcon = document.querySelector('.navbar__close-icon');
const mobileMenu = document.querySelector('.menu');
const iconsParentDiv = document.querySelector('.navbar__menu-icons');

iconsParentDiv.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu--show');
    burgerIcon.classList.toggle('navbar__burger-icon--show');
    closeIcon.classList.toggle('navbar__close-icon--show');
});