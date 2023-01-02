const menuBtn = document.querySelector('.header-courses__hamburger');
const headerTable = document.querySelector('.header-courses__grid');

menuBtn.addEventListener('click', () => {
  headerTable.classList.toggle('header-courses__grid_opened');
  menuBtn.classList.toggle('header-courses__hamburger_active');
})
