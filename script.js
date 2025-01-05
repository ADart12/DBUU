

function openmenu() {
    const menu = document.querySelector('.menu');
    const navpart2 = document.querySelector('.navpart2'); // assuming the class name is navpart2
    navpart2.style.display = 'flex';
}

function closemenu() {
    const navpart2 = document.querySelector('.navpart2'); // assuming the class name is navpart2
    navpart2.style.display = 'none';
}
document.addEventListener('click', function (event) {
    if (!event.target.closest('.menu')) {
        closemenu();
    }
}); 

// slider java script 
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const image = document.querySelectorAll('.image');

let slideNumber = 1;

right.addEventListener('click', () => {
    if (slideNumber < image.length) {
        slider.style.transform = `translateX(-${slideNumber * 100}%)`
        slideNumber++;
    }
    else {
        slider.style.transform = `translateX(0vw)`
        slideNumber = 1;
    }
})
left.addEventListener('click', () => {
    if (slideNumber > 1) {
        slider.style.transform = `translateX(-${(slideNumber - 2) *  100}%)`
        slideNumber--;
    }
    else {
        slider.style.transform = `translateX(-${(image.length - 1) *  100}%)`
        slideNumber = image.length;
    }
})

// slider for mobile
// slider java script 
const left2 = document.querySelector('.left2');
const right2 = document.querySelector('.right2');
const slider2 = document.querySelector('.slider2');
const image2 = document.querySelectorAll('.image2');

let slideNumber2 = 1;

right2.addEventListener('click', () => {
    if (slideNumber2 < image2.length) {
        slider2.style.transform = `translateX(-${slideNumber2 * 100}%)`
        slideNumber2++;
    }
    else {
        slider2.style.transform = `translateX(0vw)`
        slideNumber2 = 1;
    }
})
left2.addEventListener('click', () => {
    if (slideNumber2 > 1) {
        slider2.style.transform = `translateX(-${(slideNumber2 - 2) * 100}%)`
        slideNumber2--;
    }
    else {
        slider2.style.transform = `translateX(-${(image2.length - 1) * 100}%)`
        slideNumber2 = image2.length;
    }
})