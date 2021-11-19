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

/* SWITCH */

const navbar = d.querySelector("nav");
const switchD = d.querySelector('.switch');
const linkNavbar = d.querySelectorAll('.der-nav a');
const body = d.querySelector('body');
const themeInfo = d.querySelector('.theme-info');



switchD.addEventListener('click', (e) => {

    e.stopPropagation();
    e.preventDefault();

    invertir(themeInfo.textContent);

});


function invertir(color){

    if(color === 'Light'){

        navbar.style.setProperty('background-color', 'var(--dark-primary)');
        navbar.style.setProperty('color', 'var(--dark-textColor)');
        let length = linkNavbar.length;
        for(let i = 0; i <  length; i++) linkNavbar[i].style.setProperty('color', 'var(--dark-textColor)');
        body.style.setProperty('background-color', 'var(--dark-secondary)')
        body.style.setProperty('color','var(--dark-textColor)');
        switchD.firstChild.classList.add('fa-flip-horizontal');
        themeInfo.textContent = 'Dark';
    };

    if(color === 'Dark'){

        navbar.style.setProperty('background-color', 'var(--primary)');
        navbar.style.setProperty('color', 'var(--dark-textColor)');
        let length = linkNavbar.length;
        for(let i = 0; i <  length; i++) linkNavbar[i].style.setProperty('color', 'var(--textColor)');
        body.style.setProperty('background-color', 'var(--secondary)')
        body.style.setProperty('color','var(--textColor)');
        switchD.firstChild.classList.remove('fa-flip-horizontal');
        themeInfo.textContent = 'Light';

    };


};