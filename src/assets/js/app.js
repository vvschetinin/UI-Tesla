console.log('I am App');

// ==================== Toogle Mobil Menu ======================== //

const bodyPage = document.querySelector('body');
const navToogleOpen = document.querySelector('.nav-toggle');
navToogleOpen.onclick = function(){
  bodyPage.classList.toggle("menu-open");
}