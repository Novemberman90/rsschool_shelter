// burger 

const iconMenu = document.querySelector('.menu_icon');
if(iconMenu) {
    const menuBody = document.querySelector('.menu_body');
    iconMenu.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

//popup

const cardWrapper = document.querySelector('.card-wrapper');

const popup = document.createElement('div');
const popupWrapper = document.createElement('div');
const closeModal = document.createElement('div');
const wr = document.createElement('div');
wr.classList.add('wr');
closeModal.classList.add('close');
popup.classList.add('card-pets__modal');
popupWrapper.classList.add('card-pets__modal__body');

document.body.appendChild(popup);
popup.appendChild(popupWrapper);
popupWrapper.appendChild(wr);
popupWrapper.appendChild(closeModal);

cardWrapper.addEventListener('click', (e) => {
  const petsCard_ID = e.target.closest('.pets__card').id;
  let petsCard = pets.find((item) => item.id == petsCard_ID);

  const popupContent = `<div class="flex">
    <div class="modal_img">
    <img src=${petsCard.img} />
    </div>
    <div class="modal_content">
      <div class="modal_title">${petsCard.name}</div>
      <div class="modal_subtitle">${petsCard.type} - ${petsCard.breed}</div>
      <div class="modal_description">${petsCard.description}</div>
      <ul class="modal_info">
      <li><span>Age:</span> ${petsCard.age}</li>
      <li><span>Inoculations:</span> ${petsCard.inoculations}</li>
      <li><span>Diseases:</span> ${petsCard.diseases}</li>
      <li><span>Parasites:</span> ${petsCard.parasites}</li>
    </ul>
    </div>
  </div>`;

  wr.innerHTML = popupContent;
  popup.classList.add('open');
  document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', () => {
  popup.classList.remove('open');
  document.body.style.overflow = 'auto';
});

popup.addEventListener('click', (e) => {
  if (
    e.target.closest('.card-pets__modal__body') == null &&
    e.target.closest('.close') != closeModal
  ) {
    popup.classList.remove('open');
    document.body.style.overflow = 'auto';
  }
});



/*const LEFT_BTN = document.querySelector("#btn-left");
const RIGHT_BTN = document.querySelector("#btn-right");

function pushBtn() {
    alert("left");
            
}

LEFT_BTN.addEventListener("click", pushBtn);
RIGHT_BTN.addEventListener("click", pushBtn);*/


