// burger 

const iconMenu = document.querySelector('.menu_icon');
if(iconMenu) {
    const menuBody = document.querySelector('.menu_body');
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });

}

/*const LEFT_BTN = document.querySelector("#btn-left");
const RIGHT_BTN = document.querySelector("#btn-right");

function pushBtn() {
    alert("left");
            
}

LEFT_BTN.addEventListener("click", pushBtn);
RIGHT_BTN.addEventListener("click", pushBtn);*/

