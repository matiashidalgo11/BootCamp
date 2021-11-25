const d = document;

const menu = d.querySelector('nav');
const menuContainer = d.querySelector('nav');
var iconoH = d.querySelector('.fa-grip-lines');
var iconoX = d.querySelector('.fa-times');
var optionsMenu = d.querySelector('.options-menu');


menuContainer.addEventListener('click', () => {

    iconoH.classList.toggle('disabled');
    iconoX.classList.toggle('disabled');
    optionsMenu.classList.toggle('disabled');
    menu.classList.toggle('active');

});