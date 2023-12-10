
const bar = document.querySelector('.bar');
console.log(bar);
const nav_list = document.querySelector('.nav_list');
const info = document.querySelector('.hero-section');
const close = document.querySelector('.close');
const header = document.querySelector('.header-hero-container');
const logo = document.querySelector(".logo");
const container = document.querySelector(".container");
const nv = document.getElementById("#nav-list");
bar.addEventListener('click', () => {
    nav_list.style.display = 'block';
    info.style.display = 'none';
    bar.style.display = 'none';
    logo.style.display = 'none';
    nav_list.style.left = '0';
    close.style.display = 'block';
});
close.addEventListener('click', () => {
    close.style.display = 'none';
    bar.style.display = 'block';
    nav_list.style.display = 'none';
    info.style.display = 'block';
    header.style.background = 'url(images/hero-background.png)';
    header.style.backgroundColor = "#2f1893";
    header.style.backgroundPosition = "center";
    logo.style.display = 'block';
    nav_list.style.left = "-100%";
});
var btn = document.querySelector('.btn-red');
var video = document.querySelector('video');
var circle = document.querySelector  ('.fa-circle');
btn.addEventListener('click', () => {
    video.style.display = 'block';
    video.style.position = 'absolute';
    circle.style.display = 'block';
    if (video.paused) {
        video.play();
    }
    else {
        video.pause();
    }
});


var play = document.querySelector(".play");
var pic = document.querySelector("#image");
var video = document.querySelector('.forest');
play.addEventListener('click', () => {
    video.style.display = 'block';
    pic.style.display = 'none';
    play.style.display = 'none';
    if (video.paused) {
        video.play();
    }
    else {
        video.pause();
    }
});

var action = document.querySelector('#play');
var video = document.querySelector('.video');
action.addEventListener('click', () => {
    video.style.display = 'block';
    action.style.display = 'none';
    if (video.paused) {
        video.play();
    }
    else {
        video.pause();
    }
});




