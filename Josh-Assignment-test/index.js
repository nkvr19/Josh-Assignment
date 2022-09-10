var cartoption=document.getElementById('cart');
const overlay = document.querySelector('.overlay');
function cartopen(){
    // 
    document.getElementById('cart-modal-content').style.display="flex";
    overlay.classList.remove('hidden');
}
function menuclose(){
     document.getElementById('cart-modal-content').style.display="none";
     overlay.classList.add('hidden')
}
var requestdish=document.getElementById('request-dish');
function requestopen(){
    document.getElementById('request-modal-window').style.display="flex";
    overlay.classList.remove('hidden');
}
function requestclose(){
    document.getElementById('request-modal-window').style.display="none";
    overlay.classList.add('hidden')
}
// var play=document.getElementById('play-button')
var video = document.getElementById("video");
function playvideo(){
    video.play();
}
