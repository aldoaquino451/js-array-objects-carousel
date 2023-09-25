/*
  
  1. Creo con template literale un unico container dove inserire tutti i tag come nell'html, e trammite ciclo forEach:
    - prendo il valore della chiave immagine e lo inserisco nel source dell'immagine (con classe hide)
    - il valore di testo e titolo lo inserisco all'interno del div text (con classe hide)

  2. il primo div container di default sarà visibile

  3. al click il container corrente che contiene immgine e testo non sarù visibile e renderemo visibile quello succ/prec

*/

/* ------- OGGETTI -------- */

const images = [
  {
    image: './img/cyberpunk.jpg',
    title: 'Cyberpunk 2077',
    text: 'Cyberpunk 2077 è un videogioco sparatutto in prima persona di genere action RPG e open world, sviluppato da CD Projekt RED e pubblicato da CD Projekt',
  }, 
  {
    image: './img/elder-ring.webp',
    title: 'Elder Ring',
    text: 'E\' un videogioco action RPG sviluppato dalla software house giapponese FromSoftware e pubblicato da Bandai Namco Entertainment. Il videogioco, diretto da Hidetaka Miyazaki, è stato realizzato in collaborazione con George R. R. Martin, autore statunitense di fantasy noto soprattutto per il ciclo di romanzi Cronache del ghiaccio e del fuoco.',
  }, 
  {
    image: './img/zelda.jpg',
    title: 'The Legend of Zelda: Breath of the Wild',
    text: 'E\' un videogioco action-adventure del 2017, sviluppato da Nintendo EPD e pubblicato da Nintendo per Nintendo Switch e Wii U. Si tratta del diciottesimo capitolo della celebre saga di videogiochi The Legend of Zelda.',
  }, 
  {
    image: './img/last-of-us.jpg',
    title: "The Last of Us Parte II",
    text: 'E\' un videogioco di avventura dinamica, a sfondo post-apocalittico, sviluppato dalla casa di produzione Naughty Dog in esclusiva per PlayStation 4. È il sequel di The Last of Us e si svolge cinque anni dopo quest\'ultimo.',
  },
  {
    image: './img/portal.jpg',
    title: 'Portal 2',
    text: 'Portal 2 è un videogioco rompicapo, pubblicato nel 2011 da Valve Corporation per varie piattaforme.',
  }
];


/* ------- VARIABILI  -------- */

const counterMax = images.length;

const imagesContainer = document.getElementById('images-container');
const thumbsContainer = document.getElementById('thumbnails-container');
const btnUp = document.querySelector('#switch-buttons .arrow-btn.up');
const btnDown = document.querySelector('#switch-buttons .arrow-btn.down');
const btnStop = document.querySelector('#slider-buttons .stop-btn');
const btnPrev = document.querySelector('#slider-buttons .slider-btn.up');
const btnNext = document.querySelector('#slider-buttons .slider-btn.down');

let counter;
let intervalID;

imagesContainer.innerHTML = '';
thumbsContainer.innerHTML = '';
counter = 0;


/* ------- IMAGES & THUMBS -------- */

images.forEach(copertina => {

  imagesContainer.innerHTML += `
  <div class="hidden_a item position-relative w-100 h-100">
 
    <img class=" h-100 w-100 object-fit-contain" src="${copertina.image}" alt="cyberpunk">

    <div id="quote" class="position-absolute d-flex flex-column justify-content-end text-end w-100 m-0 ">
      <h2 class="text-uppercase fw-bold m-0 ">${copertina.title}</h2>
      <p class="m-0 ">${copertina.text}</p>
    </div>

  </div>
  `;

  thumbsContainer.innerHTML += `
  <img class="mini-item w-100 object-fit-cover" src="${copertina.image}" alt="01">
  `;

});

const imagesArr = document.getElementsByClassName('item');
const thumbsArr = document.getElementsByClassName('mini-item');


/* ------- BUTTON -------- */
reset();

btnUp.addEventListener('click', slideUp);
btnDown.addEventListener('click', slideDown);
btnStop.addEventListener('click', stopSlider)
btnPrev.addEventListener('click', fastSlideUp)
btnNext.addEventListener('click', fastSlideDown)


for ( let i = 0; i < counterMax; i++ ) {
  thumbsArr[i]._id = i;  
  thumbsArr[i].addEventListener('click', clickThumb);
}


/* ------- FUNCTION -------- */

/* slide */
function stopSlider() {
  clearTimeout(intervalID);
  reset();
}

function slideUp() {
  clearTimeout(intervalID);
  buttonUp();
  intervalID = setInterval(buttonUp, 2000);
}

function slideDown() {
  clearTimeout(intervalID);  
  buttonDown();
  intervalID = setInterval(buttonDown, 2000);
}

function fastSlideUp() {
  clearTimeout(intervalID);  
  intervalID = setInterval(buttonUp, 500);
}

function fastSlideDown() {
  clearTimeout(intervalID);  
  intervalID = setInterval(buttonDown, 500);
}

/* click */
function clickThumb() { 
  current();
  counter = this._id;
  fresh();
}

/* button */
function buttonUp() {
  current();
  move(0, counterMax - 1, - 1); 
  fresh();
}

function buttonDown() {
  current();
  move(counterMax - 1, 0, + 1);
  fresh();
}


/* swicth image */
function current() {
  imagesArr[counter].classList.add('hidden_a');
  thumbsArr[counter].classList.remove('active_a');
}

function move(last, first, variation) {
  if ( counter === last ) counter = first;
  else counter += variation;
}

function fresh() {
  imagesArr[counter].classList.remove('hidden_a');
  thumbsArr[counter].classList.add('active_a');
}

/* reset */
function reset() {
  current();
  counter = 0;
  fresh();
}