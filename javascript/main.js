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
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Save the username and password to local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Clear the form fields by resetting the form
    document.getElementById('loginForm').reset();

    // For demonstration purposes: Alert the user that login data is saved
    alert('Oops ! Server did not serve a response at that moment. Please try again later!');
});


// Optional: To retrieve data from local storage, use this code
const savedUsername = localStorage.getItem('username');
const savedPassword = localStorage.getItem('password');
console.log('Saved Username:', savedUsername);
console.log('Saved Password:', savedPassword);