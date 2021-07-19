const slider = document.querySelector("#slider");
const btnright = document.querySelector("#slider-btn-right");
const btnleft = document.querySelector("#slider-btn-left");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[ sliderSection.length -1 ];


myApp();


function myApp(){
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);

    btnright.addEventListener("click", Next);
    btnleft.addEventListener("click", before);

    setInterval(() => {
        Next();
    }, 8000);
}

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition ="all 0.5s";

    setTimeout(() => {
        slider.style.transition ="none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function before(){
    let sliderSectionLast = sliderSection[ sliderSection.length -1 ];
    slider.style.marginLeft = "0%";
    slider.style.transition ="all 0.5s";

    setTimeout(() => {
        slider.style.transition ="none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

