/*************************************************************************************
 *                              ARTICULO 1
 *************************************************************************************/
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length -1];
const btnIzquierdo = document.querySelector("#btn-izquierda");
const btnDerecha = document.querySelector("#btn-derecha");
slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function moverDerecha() {
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function moverIzquierda() {
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnDerecha.addEventListener("click", function() {
    moverDerecha();
});

btnIzquierdo.addEventListener("click", function() {
    moverIzquierda();
});


/*************************************************************************************
 *                              ARTICULO 2
 *************************************************************************************/
 const slider2 = document.querySelector("#slider2");
 let sliderSection2 = document.querySelectorAll(".slider-section2");
 let sliderSectionLast2 = sliderSection2[sliderSection2.length -1];
 
 const btnIzquierdo2 = document.querySelector("#btn-izquierda2");
 const btnDerecha2 = document.querySelector("#btn-derecha2");
 
 slider2.insertAdjacentElement("afterbegin", sliderSectionLast2);
 
 function moverDerecha2() {
     let sliderSectionFirst2 = document.querySelectorAll(".slider-section2")[0];
     slider2.style.marginLeft = "-200%";
     slider2.style.transition = "all 0.5s";
     setTimeout(function() {
         slider2.style.transition = "none";
         slider2.insertAdjacentElement("beforeend", sliderSectionFirst2);
         slider2.style.marginLeft = "-100%";
     }, 500);
 }
 
 function moverIzquierda2() {
     let sliderSection2 = document.querySelectorAll(".slider-section2");
     let sliderSectionLast2 = sliderSection2[sliderSection2.length -1];
     slider2.style.marginLeft = "0";
     slider2.style.transition = "all 0.5s";
     setTimeout(function() {
         slider2.style.transition = "none";
         slider2.insertAdjacentElement("afterbegin", sliderSectionLast2);
         slider2.style.marginLeft = "-100%";
     }, 500);
 }
 
 btnDerecha2.addEventListener("click", function() {
     moverDerecha2();
 });
 
 btnIzquierdo2.addEventListener("click", function() {
     moverIzquierda2();
 });


/*************************************************************************************
*                              ARTICULO 3
*************************************************************************************/
const slider3 = document.querySelector("#slider3");
let sliderSection3 = document.querySelectorAll(".slider-section3");
let sliderSectionLast3 = sliderSection3[sliderSection3.length -1];
  
const btnIzquierdo3 = document.querySelector("#btn-izquierda3");
const btnDerecha3 = document.querySelector("#btn-derecha3");
  
slider3.insertAdjacentElement("afterbegin", sliderSectionLast3);
  
function moverDerecha3() {
    let sliderSectionFirst3 = document.querySelectorAll(".slider-section3")[0];
    slider3.style.marginLeft = "-200%";
    slider3.style.transition = "all 0.5s";
    setTimeout(function() {
        slider3.style.transition = "none";
        slider3.insertAdjacentElement("beforeend", sliderSectionFirst3);
        slider3.style.marginLeft = "-100%";
    }, 500);
}
  
function moverIzquierda3() {
    let sliderSection3 = document.querySelectorAll(".slider-section3");
    let sliderSectionLast3 = sliderSection3[sliderSection3.length -1];
    slider3.style.marginLeft = "0";
    slider3.style.transition = "all 0.5s";
    setTimeout(function() {
        slider3.style.transition = "none";
        slider3.insertAdjacentElement("afterbegin", sliderSectionLast3);
        slider3.style.marginLeft = "-100%";
    }, 500);
}
  
btnDerecha3.addEventListener("click", function() {
    moverDerecha3();
});
  
btnIzquierdo3.addEventListener("click", function() {
    moverIzquierda3();
});



/*************************************************************************************
*                              ARTICULO 4
*************************************************************************************/
const slider4 = document.querySelector("#slider4");
let sliderSection4 = document.querySelectorAll(".slider-section4");
let sliderSectionLast4 = sliderSection4[sliderSection4.length -1];
    
const btnIzquierdo4 = document.querySelector("#btn-izquierda4");
const btnDerecha4 = document.querySelector("#btn-derecha4");
    
slider4.insertAdjacentElement("afterbegin", sliderSectionLast4);
    
function moverDerecha4() {
    let sliderSectionFirst4 = document.querySelectorAll(".slider-section4")[0];
    slider4.style.marginLeft = "-200%";
    slider4.style.transition = "all 0.5s";
    setTimeout(function() {
        slider4.style.transition = "none";
        slider4.insertAdjacentElement("beforeend", sliderSectionFirst4);
        slider4.style.marginLeft = "-100%";
    }, 500);
}
    
function moverIzquierda4() {
    let sliderSection4 = document.querySelectorAll(".slider-section4");
    let sliderSectionLast4 = sliderSection4[sliderSection4.length -1];
    slider4.style.marginLeft = "0";
    slider4.style.transition = "all 0.5s";
    setTimeout(function() {
        slider4.style.transition = "none";
        slider4.insertAdjacentElement("afterbegin", sliderSectionLast4);
        slider4.style.marginLeft = "-100%";
    }, 500);
}
    
btnDerecha4.addEventListener("click", function() {
    moverDerecha4();
});
    
btnIzquierdo4.addEventListener("click", function() {
    moverIzquierda4();
});



/*************************************************************************************
*                              ARTICULO 5
*************************************************************************************/
const slider5 = document.querySelector("#slider5");
let sliderSection5 = document.querySelectorAll(".slider-section5");
let sliderSectionLast5 = sliderSection5[sliderSection5.length -1];
    
const btnIzquierdo5 = document.querySelector("#btn-izquierda5");
const btnDerecha5 = document.querySelector("#btn-derecha5");
    
slider5.insertAdjacentElement("afterbegin", sliderSectionLast5);
    
function moverDerecha5() {
    let sliderSectionFirst5 = document.querySelectorAll(".slider-section5")[0];
    slider5.style.marginLeft = "-200%";
    slider5.style.transition = "all 0.5s";
    setTimeout(function() {
        slider5.style.transition = "none";
        slider5.insertAdjacentElement("beforeend", sliderSectionFirst5);
        slider5.style.marginLeft = "-100%";
    }, 500);
}
    
function moverIzquierda5() {
    let sliderSection5 = document.querySelectorAll(".slider-section5");
    let sliderSectionLast5 = sliderSection5[sliderSection5.length -1];
    slider5.style.marginLeft = "0";
    slider5.style.transition = "all 0.5s";
    setTimeout(function() {
        slider5.style.transition = "none";
        slider5.insertAdjacentElement("afterbegin", sliderSectionLast5);
        slider5.style.marginLeft = "-100%";
    }, 500);
}
    
btnDerecha5.addEventListener("click", function() {
    moverDerecha5();
});
    
btnIzquierdo5.addEventListener("click", function() {
    moverIzquierda5();
});


/*************************************************************************************
*                              ARTICULO 6
*************************************************************************************/
const slider6 = document.querySelector("#slider6");
let sliderSection6 = document.querySelectorAll(".slider-section6");
let sliderSectionLast6 = sliderSection6[sliderSection6.length -1];
    
const btnIzquierdo6 = document.querySelector("#btn-izquierda6");
const btnDerecha6 = document.querySelector("#btn-derecha6");
    
slider6.insertAdjacentElement("afterbegin", sliderSectionLast6);
    
function moverDerecha6() {
    let sliderSectionFirst6 = document.querySelectorAll(".slider-section6")[0];
    slider6.style.marginLeft = "-200%";
    slider6.style.transition = "all 0.5s";
    setTimeout(function() {
        slider6.style.transition = "none";
        slider6.insertAdjacentElement("beforeend", sliderSectionFirst6);
        slider6.style.marginLeft = "-100%";
    }, 500);
}
    
function moverIzquierda6() {
    let sliderSection6 = document.querySelectorAll(".slider-section6");
    let sliderSectionLast6 = sliderSection6[sliderSection6.length -1];
    slider6.style.marginLeft = "0";
    slider6.style.transition = "all 0.5s";
    setTimeout(function() {
        slider6.style.transition = "none";
        slider6.insertAdjacentElement("afterbegin", sliderSectionLast6);
        slider6.style.marginLeft = "-100%";
    }, 500);
}
    
btnDerecha6.addEventListener("click", function() {
    moverDerecha6();
});
    
btnIzquierdo6.addEventListener("click", function() {
    moverIzquierda6();
});


/*************************************************************************************
*                              ARTICULO 7
*************************************************************************************/
const slider7 = document.querySelector("#slider7");
let sliderSection7 = document.querySelectorAll(".slider-section7");
let sliderSectionLast7 = sliderSection7[sliderSection7.length -1];
    
const btnIzquierdo7 = document.querySelector("#btn-izquierda7");
const btnDerecha7 = document.querySelector("#btn-derecha7");
    
slider7.insertAdjacentElement("afterbegin", sliderSectionLast7);
    
function moverDerecha7() {
    let sliderSectionFirst7 = document.querySelectorAll(".slider-section7")[0];
    slider7.style.marginLeft = "-200%";
    slider7.style.transition = "all 0.5s";
    setTimeout(function() {
        slider7.style.transition = "none";
        slider7.insertAdjacentElement("beforeend", sliderSectionFirst7);
        slider7.style.marginLeft = "-100%";
    }, 500);
}
    
function moverIzquierda7() {
    let sliderSection7 = document.querySelectorAll(".slider-section7");
    let sliderSectionLast7 = sliderSection7[sliderSection7.length -1];
    slider7.style.marginLeft = "0";
    slider7.style.transition = "all 0.5s";
    setTimeout(function() {
        slider7.style.transition = "none";
        slider7.insertAdjacentElement("afterbegin", sliderSectionLast7);
        slider7.style.marginLeft = "-100%";
    }, 500);
}
    
btnDerecha7.addEventListener("click", function() {
    moverDerecha7();
});
    
btnIzquierdo7.addEventListener("click", function() {
    moverIzquierda7();
});
