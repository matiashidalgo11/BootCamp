const d = document;

const btnNav = d.querySelector('.btn-nav');

let iconCross = btnNav.lastElementChild;
let iconHamburguer = btnNav.firstElementChild;
let derNav = d.querySelector('.der-nav');


btnNav.addEventListener('click', (e)=>{

    
    

    if(iconCross.classList.contains('disabled') || iconHamburguer.classList.contains('disabled')){

        iconCross.classList.toggle('disabled');
        iconHamburguer.classList.toggle('disabled');

        if(iconHamburguer.classList.contains('disabled'))derNav.setAttribute('style','display: block')
        else derNav.setAttribute('style','display: none');

    };

    
});