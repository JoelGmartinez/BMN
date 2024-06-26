const slider = document.querySelector("#slider");
let sliderSec = document.querySelectorAll(".slider-sec");
let sliderSeculti = sliderSec[sliderSec.length -1];

const btnleft = document.querySelector("#btn-left");
const btnright = document.querySelector("#btn-right"); 

slider.insertAdjacentElement('afterbegin', sliderSeculti);

function moverDerecha(){
    let sliderSecprim = document.querySelectorAll(".slider-sec")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSecprim);
        slider.style.marginLeft = "-100%";
    },500);
}

function moverIzquierda(){
    let sliderSec = document.querySelectorAll(".slider-sec");
    let sliderSeculti = sliderSec[sliderSec.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSeculti);
        slider.style.marginLeft = "-100%";
    },500);
}

btnright.addEventListener('click', function(){
    moverDerecha();
})

btnleft.addEventListener('click', function(){
    moverIzquierda();
})


setInterval(function(){
    moverDerecha();
},5000);