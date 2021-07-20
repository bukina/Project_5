



"use strict";

var map = L.map('map', {
    center: [50.43692747994574, 30.619796082239485],
    zoom: 13
});


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', { foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);

L.marker([50.43692747994574, 30.619796082239485]).addTo(map);



$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__nav').toggleClass('active');
        $('.header').toggleClass('active');


    });

});