const path = '../img/';
var images = ['img1.jpg','img2.jpg','img3.jpg'];
var contador = 0;
const d = document;

const back = d.getElementById('back');
const next = d.getElementById('next');
const slider = d.querySelector('.slider-container');

console.log(`background-image: url('${path}${images[contador]}');`);

slider.style.cssText = `background-image: url('${path}${images[contador]}');  
background-position: center;
background-repeat: no-repeat;
background-size: cover;   
}`;

back.addEventListener('click', (e)=> {
    
    e.stopPropagation();
    e.preventDefault();

    let length = images.length;

    contador = (contador-1 < 0) ? length - 1 : contador - 1;

    slider.style.cssText = `background-image: url('${path}${images[contador]}');`;

});

next.addEventListener('click', (e)=> {
    
    e.stopPropagation();
    e.preventDefault();

    let length = images.length;

    contador = (contador + 1 > length - 1) ? 0 : contador + 1;

    slider.style.cssText = `background-image: url('${path}${images[contador]}');`;

});