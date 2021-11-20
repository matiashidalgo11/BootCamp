const d = document;

const page = d.querySelector('.page-categoria');
const iconNext = d.querySelector('.next-categoria');
const itemCategoria = d.querySelector('.item-categoria');


page.addEventListener('mouseover', (e) => {


    iconNext.classList.remove('disabled');


});

page.addEventListener('mouseout', () => {

    iconNext.classList.add('disabled');


});

