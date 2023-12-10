var action = document.querySelector('.fa-bars');
var close = document.querySelector('.fa-close');
var header = document.querySelector('.menu-item');
var navbar=document.querySelector('.nav-items');
action.addEventListener('click', () => {
    action.style.display = 'none';
    close.style.display = 'block';
    close.style.float="right";
   navbar.style.display='flex';
   header.style.background="beige";
   header.style.height="100vh";
});
close.addEventListener('click', () => {
    close.style.display = 'none';
    action.style.display = 'block';
    navbar.style.display='none';
    header.style.background="none";
    header.style.height="0vh";
   
})

