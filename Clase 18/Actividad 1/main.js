const d = document;

const like = d.getElementById('like');

console.log(like.style.pointerEvents );

like.addEventListener('click', (e) => {

    e.preventDefault();
    e.stopPropagation();

    let actual = like.style.color;
    like.style.color = (actual === 'rgb(172, 186, 204)')? 'red' : '#ACBACC';
    console.log(actual);
    
});

const play = d.getElementById('play');
const pause = d.getElementById('pause');

play.addEventListener('click', (e) => {

    e.preventDefault();
    e.stopPropagation();

    play.style.display = 'none';
    pause.style.display = 'block';

    console.log("click");
});

pause.addEventListener('click', (e) => {

    e.preventDefault();
    e.stopPropagation();

    pause.style.display = 'none';
    play.style.display = 'block';

    console.log("click");
});