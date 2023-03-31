// burger 

const iconMenu = document.querySelector('.menu_icon');
if(iconMenu) {
    const menuBody = document.querySelector('.menu_body');
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });

}