var action = document.querySelector('.fa-bars');
var close = document.querySelector('.fa-close');
var menu = document.querySelector('.items');
var container = document.querySelector('.container');
var menudiv = document.querySelector('.menu-item');
var recentpost = document.querySelector('.recent-post');
var feature = document.querySelector('.featured-works');
var footer = document.querySelector('footer');
action.addEventListener('click', () => {
    action.style.display = 'none';
    container.style.display = 'none';
    close.style.display = 'block';
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';
    menu.style.alignItems = 'center';
    menudiv.style.width = "100%";
    recentpost.style.display = 'none';
    feature.style.display = 'none';
    footer.style.display = 'none';
});
close.addEventListener('click', () => {
    close.style.display = 'none';
    action.style.display = 'block';
    container.style.display = 'block';
    menu.style.display = 'none';
    recentpost.style.display = 'block';
    feature.style.display = 'block';
    footer.style.display = 'block';
})

