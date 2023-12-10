

/* For Navigation-bar */
var icon = document.getElementById("icon");
var close = document.getElementById("close");
var navList = document.getElementById("nav-list");
icon.addEventListener("click", () => {
    navList.style.display = "flex";
    icon.style.display = "none";
    close.style.display = "block";
})
close.addEventListener("click", () => {
    navList.style.display = "none";
    icon.style.display = "block";
    close.style.display = "none";
})




function toggleTechStack(actionClass) {
    const actionLogos = document.getElementsByClassName(actionClass);
    const allLogos = document.getElementsByClassName("tech-logos");
    let actionLogoArray = Array.from(actionLogos);
    let allLogosArray = Array.from(allLogos);
    allLogosArray.forEach((logo) => {
        logo.style.display = "none";
    })
    actionLogoArray.forEach((logo) => {
        logo.style.display = "block";
    })
}







const cards = document.getElementsByClassName("resource-card-1");
const prevBtn = document.getElementById("prev-button");
const nextBtn = document.getElementById("next-button");
const cardsArray = Array.from(cards);
let startIndex = 0;
let itemToShow = 3;
let endIndex = startIndex + itemToShow;
function myfunc(x) {
    if (x.matches) { // If media query matches
        itemToShow = 1;
    } else {
        itemToShow = 3;
    }
    startIndex = 0;
    endIndex = startIndex + itemToShow;
    show();
}

var x = window.matchMedia("(max-width: 700px)");
myfunc(x); // Call listener function at run time
x.addListener(myfunc);// Attach listener function on state changes


function show() {
    cardsArray.forEach((card, index) => {
        if (index >= startIndex && index <= endIndex) {
            card.style.display = 'block';
        }
        else {
            card.style.display = 'none';
        }
    })
}
function next() {
    if (startIndex < cardsArray.length - itemToShow - 1) {
        startIndex++;
        console.log("inside boundary");
    }
    if (endIndex < cardsArray.length - 1) {
        endIndex++;
    }
    show();
}
function previous() {
    console.log("previous");
    if (startIndex > 0) {
        startIndex--;
        endIndex--;
        console.log("inside previous");
    }
    if (startIndex == 0) {
        startIndex = 0;
        console.log("previous 2");
    }
    show();
}
show();

function startAutoplay() {
    autoplayInterval = setInterval(() => {
        next();
    }, 3000);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}
//startAutoplay();


/*nextBtn.addEventListener("click", () => {
    next();
    stopAutoplay();
});

prevBtn.addEventListener("click", () => {
    previous();
    stopAutoplay();
});*/


