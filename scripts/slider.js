var button = document.getElementById("update-button");
var button2 = document.getElementById("update-button2");
var button3 = document.getElementById("update-button3");
var button4 = document.getElementById("update-button4");
var button5 = document.getElementById("update-button5");
  
  
function changeButtonColor() {
    button.classList.toggle("clicked");
    button2.classList.remove("clicked");
    button3.classList.remove("clicked");
    button4.classList.remove("clicked");
    button5.classList.remove("clicked");
}
  
function changeButtonColor2() {
    button2.classList.toggle("clicked");
    button.classList.remove("clicked");
    button3.classList.remove("clicked");
    button4.classList.remove("clicked");
    button5.classList.remove("clicked");  
}
  
function changeButtonColor3() {
    button3.classList.toggle("clicked");
    button.classList.remove("clicked");
    button2.classList.remove("clicked");
    button4.classList.remove("clicked");
    button5.classList.remove("clicked");
}
  
function changeButtonColor4() {
    button4.classList.toggle("clicked");
    button.classList.remove("clicked");
    button2.classList.remove("clicked");
    button3.classList.remove("clicked");
    button5.classList.remove("clicked");   
}
  
function changeButtonColor5() {
    button5.classList.toggle("clicked");
    button.classList.remove("clicked");
    button2.classList.remove("clicked");
    button3.classList.remove("clicked");
    button4.classList.remove("clicked");  
}

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
})

ScrollReveal().reveal('.main-title, .section-title', {delay:500, origin: 'left'});
ScrollReveal().reveal('.sec1 .image', {delay:600, origin: 'bottom'});
ScrollReveal().reveal('.text', {delay:700, origin: 'right'});
ScrollReveal().reveal('.info', {delay:600, origin: 'bottom'});
ScrollReveal().reveal('.sec2 .image', {delay:600, origin: 'top'});
ScrollReveal().reveal('.genrepop, .genrerock', {delay:500, origin: 'top'});





