const button = document.getElementById("toggle");
const background = document.getElementById("background");
const star = document.getElementById("starsection");

button.onclick=function(){
    button.classList.toggle("dark");
    background.classList.toggle("dark");
    star.classList.toggle("dark")
}