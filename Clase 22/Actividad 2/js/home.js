const d = document;


/* NAVBAR */

const btnNav = d.querySelector('.btn-nav');

let iconCross = btnNav.lastElementChild;
let iconHamburguer = btnNav.firstElementChild;
let derNav = d.querySelector('.nav-links-container');



btnNav.addEventListener('click', (e)=>{



    if(iconCross.style.display === '' ){

        iconHamburguer.setAttribute('style','display:none');
        iconCross.setAttribute('style','display:block');
        derNav.style.display = 'flex';

    }else{

        iconCross.style.display = '';
        iconHamburguer.style.display = 'block';
        derNav.style.display = '';

    }

    
    
});


/* DESTINATION */

//Data

const data = {"destinations": [
    {
      "name": "moon",
      "images": {
        "png": "../starter-code/assets/destination/image-moon.png",
        "webp": "./assets/destination/image-moon.webp"
      },
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
    {
      "name": "mars",
      "images": {
        "png": "../starter-code/assets/destination/image-mars.png",
        "webp": "./assets/destination/image-mars.webp"
      },
      "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
    {
      "name": "europa",
      "images": {
        "png": "../starter-code/assets/destination//image-europa.png",
        "webp": "./assets/destination/image-europa.webp"
      },
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "distance": "628 mil. km",
      "travel": "3 years"
    },
    {
      "name": "titan",
      "images": {
        "png": "../starter-code/assets/destination/image-titan.png",
        "webp": "./assets/destination/image-titan.webp"
      },
      "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      "distance": "1.6 bil. km",
      "travel": "7 years"
    }
  ]};

  console.log(data.destinations[0]);

  console.log(data.destinations.length);


// DOM partes  

const imgDestination = d.querySelector('.img-destination');
const destinationPlace = d.querySelector('.destination-place');
const descriptionDestination = d.querySelector('.description-destination');
const distanceDestination = d.querySelector('.distance-destination');
const timeDestination = d.querySelector('.time-destination');

//agregar logica

const navDestination = d.querySelector('.nav-destination');

cargarData(data.destinations[0].name);

navDestination.addEventListener('click', (e) => {

    e.preventDefault();
    e.stopPropagation();
    
    cargarData(e.target.textContent);

});

//Segun el nombre carga el html
function cargarData(nombre){

    let index  = indexPorName(nombre);

    imgDestination.setAttribute('src',data.destinations[index].images.png);
    destinationPlace.textContent = data.destinations[index].name;
    descriptionDestination.textContent = data.destinations[index].description;
    distanceDestination.textContent = data.destinations[index].distance;
    timeDestination.textContent = data.destinations[index].travel;

};

//Funcion para obtener el index en la data del json
function indexPorName(name){
    
    let contador = 0;
    let is = false;
    let length = data.destinations.length;

    while(contador < length && is === false){
        if(name === data.destinations[contador].name)is = true;
        contador++;
    }

    return (is === true)? contador-1 : -1;
};