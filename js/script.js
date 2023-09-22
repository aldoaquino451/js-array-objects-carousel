/*


*/

/* ------- VARIABILI -------- */

const images = [
  {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, 
  {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, 
  {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, 
  {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, 
  {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];

const source = [
  './img/cyberpunk.jpg',
  './img/elder-ring.webp',
  './img/zelda.jpg',
  './img/last-of-us.jpg',
  './img/portal.jpg',
]

const imagesBox = document.querySelector('.carousel-image');
const thumbsBox = document.querySelector('.carousel-thumb');
const btnUp = document.querySelector('.arrow-btn.up');
const btnDown = document.querySelector('.arrow-btn.down');
const counterMax = source.length;

let counter;

imagesBox.innerHTML = '';
thumbsBox.innerHTML = '';


/* ------- IMAGES & THUMBS -------- */

for ( let i = 0; i < counterMax; i ++ ) {
  
  imagesBox.innerHTML += `<img class="item hide" src="${source[i]}" alt="01">`;
  thumbsBox.innerHTML += `<img class="mini-item" src="${source[i]}" alt="01">`
  
};

const imagesArr = document.getElementsByClassName('item');
const thumbsArr = document.getElementsByClassName('mini-item');

/* ------- BUTTON -------- */
reset();

btnUp.addEventListener('click', buttonUp)
btnDown.addEventListener('click', buttonDown)

/* ------- FUNCTION -------- */

function buttonUp() {
  current();
  move(0, counterMax - 1, - 1) 
  fresh();
}

function buttonDown() {
  current();
  move(counterMax - 1, 0, + 1);
  fresh();
}

function current() {
  imagesArr[counter].classList.add('hide');
  thumbsArr[counter].classList.remove('active');
}

function move(last, first, variation) {
  if ( counter === last ) counter = first;
  else counter += variation;
}

function fresh() {
  imagesArr[counter].classList.remove('hide');
  thumbsArr[counter].classList.add('active');
}

function reset() {
  counter = 0;
  fresh();
}