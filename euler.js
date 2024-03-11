var line4 = document.querySelector('#line_a');
var line1 = document.querySelector('#line_b');
var line3 = document.querySelector('#line_c');
var line2 = document.querySelector('#line_d');
var line5 = document.querySelector('#line_e');
var line6 = document.querySelector('#line_f');
var line7 = document.querySelector('#line_g');

var stroke4 = document.querySelector('#stroke_a');
var stroke1 = document.querySelector('#stroke_b');
var stroke3 = document.querySelector('#stroke_c');
var stroke2 = document.querySelector('#stroke_d');
var stroke5 = document.querySelector('#stroke_e');
var stroke6 = document.querySelector('#stroke_f');
var stroke7 = document.querySelector('#stroke_g');

var circle1 = document.querySelector('.circle1');
var circle2 = document.querySelector('.circle2');
var circle4 = document.querySelector('.circle3');
var circle3 = document.querySelector('.circle4');
var circle5 = document.querySelector('.circle5');

var btn = document.querySelector('#path');


function activateElementsWithDelay() {
    setTimeout(function () {
        line1.classList.add('active');
        stroke1.classList.add('active');
    }, 0);
    
    setTimeout(function(){
        circle2.classList.add('active');
    }, 1000);

    setTimeout(function () {
        line2.classList.add('active');
        stroke2.classList.add('active');
        
    }, 1500);

    setTimeout(function(){
        circle3.classList.add('active');
    }, 2400);

    setTimeout(function () {
        line3.classList.add('active');
        stroke3.classList.add('active');
    }, 3000);

    setTimeout(function(){
        circle1.classList.add('active_2');
    }, 4200);

    setTimeout(function(){
        circle4.classList.add('active');
    }, 5500);

    setTimeout(function () {
        line4.classList.add('active');
        stroke4.classList.add('active');
    }, 4500);

    setTimeout(function () {
        line5.classList.add('active');
        stroke5.classList.add('active');
    }, 6000);

    setTimeout(function () {
        circle3.classList.add('active_2');
    }, 7300);

    setTimeout(function () {
        line6.classList.add('active');
        stroke6.classList.add('active');
    }, 7500);

    setTimeout(function () {
        circle5.classList.add('active');
    }, 8800);

    setTimeout(function () {
        line7.classList.add('active');
        stroke7.classList.add('active');
    }, 9000);

    setTimeout(function () {
        circle4.classList.add('active_2');
    }, 10300);

}
document.querySelector('.a_path').addEventListener('click', function () {
    circle1.classList.add('active');
    activateElementsWithDelay();

});
