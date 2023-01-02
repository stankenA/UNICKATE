const mainMenuBtn = document.querySelector('.header__hamburger');
const headerContent = document.querySelector('.header__content');

mainMenuBtn.addEventListener('click', () => {
  headerContent.classList.toggle('header__content_opened');
  mainMenuBtn.classList.toggle('header__hamburger_active');
})
