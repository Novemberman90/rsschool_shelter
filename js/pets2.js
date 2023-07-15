// burger 

const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu_body');
if(iconMenu) {
    iconMenu.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
};


const closeMenu = () => {
  iconMenu.classList.remove('_active');
   menuBody.classList.remove('_active');
};

document.body.addEventListener("click", (e) => {
  if (
    e.target.closest('.menu_icon') == null && 
    e.target.closest('.menu_body') != menuBody
  )
  {closeMenu()}
});

menuBody.addEventListener('click', () => {
  if (menuBody.classList.contains('active')) {
    closePopup();
  } else {
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
    document.body.classList.remove('_lock');
  }
});

const menuLinks = document.querySelectorAll('a[href^="#"]');
for (let menuLink of menuLinks) {
  menuLink.addEventListener("click", function (e){
    e.preventDefault();
    const id = menuLink.getAttribute('href');

    closeMenu();

    document.querySelector(id).scrollIntoView ({
      behavior: 'smooth',
      block: 'start',
    });
  });
}