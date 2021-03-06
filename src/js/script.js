"use strict";

//MAP START

var map = L.map('map', {
    center: [50.43692747994574, 30.619796082239485],
    zoom: 13
});



L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', { foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);

L.marker([50.43692747994574, 30.619796082239485]).addTo(map);

//MAP END




//BURGER START

$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__nav').toggleClass('active');
        $('.header').toggleClass('active');


    });

});

//BURGER END



// SCROLL START

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',

    })

}

let logo = document.querySelector('.logo');
let aboutNav = document.querySelector('.nav-about');
let bagNav = document.querySelector('.nav-bag');
let tableNav = document.querySelector('.nav-table');
let contactsNav = document.querySelector('.nav-contacts');


let firstscreen = document.querySelector('.firstscreen');
let about = document.querySelector('.about');
let bag = document.querySelector('.bag');
let table = document.querySelector('.table');
let contacts = document.querySelector('.contacts');

logo.addEventListener('click', () => {
    scrollTo(firstscreen);
});

aboutNav.addEventListener('click', () => {
    scrollTo(about);
});

bagNav.addEventListener('click', () => {
    scrollTo(bag);
});

tableNav.addEventListener('click', () => {
    scrollTo(table);
});

contactsNav.addEventListener('click', () => {
    scrollTo(contacts);
});


//SCROLL END



//FORM VALIDATION START

function validate() {
    let userName = document.getElementById("name");
    let userMail = document.getElementById("email");

    e.preventDefault();

    if (!userName.value) {
        userName.style.border = "1px solid red";
        return false;
    }

    if (!userMail.value) {
        userMail.style.border = "1px solid red";
        return false;
    }
    return true;
}

//FORM VALIDATION END



//SLIDER START

$(document).ready(function () {
    $('.footer__slider').slick({
        dots: false,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 500,
        speed: 2000,
        infinite: true,
    });
});

//SLIDER END





