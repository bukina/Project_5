



"use strict";

//map

var map = L.map('map', {
    center: [50.43692747994574, 30.619796082239485],
    zoom: 13
});



L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', { foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);

L.marker([50.43692747994574, 30.619796082239485]).addTo(map);

//map




//burger-menu


$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__nav').toggleClass('active');
        $('.header').toggleClass('active');


    });

});

//burger-menu


//scroll

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


//scroll


//form validation

function validate() {
    let userName = document.getElementById("name");
    let userMail = document.getElementById("email");

    e.preventDefault();

    if (!userName.value) {
        return false;
    }

    if (!userMail.value) {
        return false;
    }
    return true;
}

//form validation


//slider

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

//slider





