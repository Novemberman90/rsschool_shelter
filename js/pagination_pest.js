// pagination

let arrPets = [];

const arrFirst = new Set();

//first array
while (arrFirst.size !== 8) {
  arrFirst.add(Math.floor(Math.random() * 8));
}

arrPets.push([...arrFirst]);

// 2
let two = [];

const arrTwo = new Set();
while (arrTwo.size !== 4) {
  let random = Math.floor(Math.random() * 8);
  if ([...arrFirst][7] != random && [...arrFirst][6] != random) {
    arrTwo.add(random);
  }
}

const arrTwo_ = new Set();
while (arrTwo_.size !== 4) {
  let random = Math.floor(Math.random() * 8);
  if (arrTwo.has(random) == false) {
    arrTwo_.add(random);
  }
}

two.push(...arrTwo, ...arrTwo_);

arrPets = [...arrPets, two];

// 3

let three = [];

const arrThree = new Set();

while (arrThree.size !== 2) {
  let random = Math.floor(Math.random() * 8);
  if (arrTwo_.has(random) == false) {
    arrThree.add(random);
  }
}

const three_ = new Set();
while (three_.size !== 6) {
  let random = Math.floor(Math.random() * 8);
  if (arrThree.has(random) == false) {
    three_.add(random);
  }
}

three.push(...arrThree);
three.push(...three_);

arrPets = [...arrPets, three];

// 4

const arrFour = new Set();

//four array
while (arrFour.size !== 8) {
  arrFour.add(Math.floor(Math.random() * 8));
}

arrPets.push([...arrFour]);

// 5

let five = [];

const arrFive = new Set();
while (arrFive.size !== 4) {
  let random = Math.floor(Math.random() * 8);
  if ([...arrFour][7] != random && [...arrFour][6] != random) {
    arrFive.add(random);
  }
}

const arrFive_ = new Set();
while (arrFive_.size !== 4) {
  let random = Math.floor(Math.random() * 8);
  if (arrFive.has(random) == false) {
    arrFive_.add(random);
  }
}

five.push(...arrFive, ...arrFive_);

arrPets = [...arrPets, five];

// 6

let six = [];

const arrSix = new Set();

while (arrSix.size !== 2) {
  let random = Math.floor(Math.random() * 8);
  if (arrFive_.has(random) == false) {
    arrSix.add(random);
  }
}

const six_ = new Set();
while (six_.size !== 6) {
  let random = Math.floor(Math.random() * 8);
  if (arrSix.has(random) == false) {
    six_.add(random);
  }
}

six.push(...arrSix);
six.push(...six_);

arrPets = [...arrPets, six];

console.log(arrPets.flat());

arrPets_768 = [];
for (let i = 0; i < arrPets.flat().length; i++) {
  !(i % 6) && arrPets_768.push([]);
  arrPets_768[(i / 6) << 0].push(arrPets.flat()[i]);
}

arrPets_320 = [];
for (let i = 0; i < arrPets.flat().length; i++) {
  !(i % 3) && arrPets_320.push([]);
  arrPets_320[(i / 3) << 0].push(arrPets.flat()[i]);
}

const petsList = document.querySelector('.pets__list');
const prevPagination = document.querySelector('#prev_pagination');
const nextPagination = document.querySelector('#next_pagination');
const firstPagination = document.querySelector('#first_pagination');
const lastPagination = document.querySelector('#last_pagination');
const currentPagination = document.querySelector('#current_pagination');

let allPets;
let maxNumberPages = arrPets.length;
let numberPagination = 0;
currentPagination.innerHTML = numberPagination + 1;
firstPagination.classList.add('disabled');
prevPagination.classList.add('disabled');

createCard = (value) => {
  let cards = '';

  allPets[value].forEach((item) => {
    const card = `<div id=${pets[item].id} class="pets__card">
    <div class="pets__img">
      <img src="${pets[item].img}" alt="">
    </div>
    <div class="pets__content">
      <div class="pets__title">${pets[item].name}</div>
      <div class="pets__btn btn">Learn more</div>
    </div>
  </div>`;
    cards += card;
  });

  return cards;
};

nextPagination.addEventListener('click', () => {
  numberPagination += 1;
  currentPagination.innerHTML = numberPagination + 1;
  removePrevDisabled();
  petsList.innerHTML = createCard(numberPagination);
  if (numberPagination == maxNumberPages - 1) {
    addNextDisabled();
  }
});

prevPagination.addEventListener('click', () => {
  numberPagination -= 1;
  currentPagination.innerHTML = numberPagination + 1;
  removeNextDisabled();

  petsList.innerHTML = createCard(numberPagination);
  if (numberPagination == 0) {
    addPrevDisabled();
  }
});

lastPagination.addEventListener('click', () => {
  numberPagination = maxNumberPages - 1;
  currentPagination.innerHTML = numberPagination + 1;
  removePrevDisabled();
  addNextDisabled();
  petsList.innerHTML = createCard(numberPagination);
});

firstPagination.addEventListener('click', () => {
  numberPagination = 0;
  currentPagination.innerHTML = numberPagination + 1;
  addPrevDisabled();
  removeNextDisabled();
  petsList.innerHTML = createCard(numberPagination);
});

const removePrevDisabled = () => {
  firstPagination.classList.remove('disabled');
  prevPagination.classList.remove('disabled');
};

const addPrevDisabled = () => {
  firstPagination.classList.add('disabled');
  prevPagination.classList.add('disabled');
};

const addNextDisabled = () => {
  nextPagination.classList.add('disabled');
  lastPagination.classList.add('disabled');
};

const removeNextDisabled = () => {
  nextPagination.classList.remove('disabled');
  lastPagination.classList.remove('disabled');
};

paginationInit();

function paginationInit() {
  paginationRefresh();
  window.addEventListener('resize', paginationRefresh);
}

function paginationRefresh() {
  if (document.documentElement.clientWidth > 1198) {
    allPets = arrPets;
  }

  if (
    document.documentElement.clientWidth < 1199 &&
    document.documentElement.clientWidth > 767
  ) {
    allPets = arrPets_768;
  }

  if (document.documentElement.clientWidth < 768) {
    allPets = arrPets_320;
  }
  maxNumberPages = allPets.length;
  petsList.innerHTML = createCard(numberPagination);

  if (numberPagination + 1 < maxNumberPages) {
    removeNextDisabled();
  }
}
