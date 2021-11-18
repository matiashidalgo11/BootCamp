let tabs = document.querySelectorAll('.tab a');
console.log(tabs);
tabs = Array.from(tabs);
tabs.forEach((e, i) => {
    e.addEventListener('click', function() {
        document.querySelector('.active').classList.remove('active');
        e.parentElement.classList.add('active');
        document.querySelector('.visible').classList.remove('visible');
        document.querySelector('#feature-'+(i+1)).classList.add('visible');
    });
    console.log(e);
});


// <li class="tab active"><a href="#feature-1">Simple Bookmarking</a></li>
// <li class="tab"><a href="#feature-2">Speedy Searching</a></li>
// <li class="tab"><a href="#feature-3">Easy Sharing</a></li>