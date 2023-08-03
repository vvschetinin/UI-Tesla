console.log('I am App');

// ==================== Toogle Mobil Menu ======================== //

const bodyPage = document.querySelector('body');
const navToogleOpen = document.querySelector('.nav-toggle');
navToogleOpen.onclick = function(){
  bodyPage.classList.toggle("menu-open");
}

// ================= Animate Title =================== //

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}
let options = {
  threshold: [0.5] 
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}