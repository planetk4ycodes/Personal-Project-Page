let strawberry = document.getElementById('strawberry');
let sparkles = document.getElementById('sparkles');
let dessert = document.getElementById('dessert');
let btn = document.getElementById('btn');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
 let value = window.scrollY
 sparkles.style.left = `${value * 0.25}px`;
 strawberry.style.top = `${value * 1.05}px`;
 dessert.style.top = `${value * 0.5}px`;
 text.style.marginRight = `${value * 4}px`;
 text.style.marginTop = `${value * 1.5}px`;
 btn.style.marginTop = `${value * 1.5}px`;
header.style.top = value `${value * 0.5}px`
})

var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})

