
const action = document.querySelector('#action');
const close = document.querySelector("#close");
const container = document.querySelector(".container");
const item = document.querySelector('.item-container');
action.addEventListener('click', () => {
    action.style.display = 'none';
    close.style.display = 'block';
    container.style.display = 'none';
    item.style.display = 'flex';
});
close.addEventListener('click', () => {
    action.style.display = 'block';
    close.style.display = 'none';
    container.style.display = 'block';
    item.style.display = 'none';
})
