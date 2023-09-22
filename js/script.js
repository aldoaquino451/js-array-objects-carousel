/*


*/

/* ------- VARIABILI -------- */

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

const counterMax = images.length;

/*
const source = [
  './img/cyberpunk.jpg',
  './img/elder-ring.webp',
  './img/./img/zelda.jpg',
  './img/last-of-us.jpg',
  './img/portal.jpg',
]
*/

const imagesBox = document.querySelector('.carousel-image');
const thumbsBox = document.querySelector('.carousel-thumb');
const btnUp = document.querySelector('.arrow-btn.up');
const btnDown = document.querySelector('.arrow-btn.down');

let counter;

imagesBox.innerHTML = '';
thumbsBox.innerHTML = '';


/* ------- IMAGES & THUMBS -------- */

images.forEach( copertina => {

  imagesBox.innerHTML += `
  <div class="hide item">
    <img src="${copertina.image}" alt="cyberpunk">
    <div class="text">
      <h2>${copertina.title}</h2>
      <p>${copertina.text}</p>
    </div>
  </div>
  `;

  thumbsBox.innerHTML += `<img class="mini-item" src="${copertina.image}" alt="01">`

});


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