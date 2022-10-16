"use strict"

const Fq = document.getElementById("img1")
const popup = document.getElementById("fq")
const cancel = document.getElementById("cancel")
const audio = document.getElementById("audio")
const playpause = document.getElementById("img2")
var count = 0;
Fq.addEventListener("click", function (e) {
popup.style.display ="flex"
  console.log("hello");
})
cancel.addEventListener("click", function (e) {
popup.style.display ="none"
  console.log("hello");
})
  
const join = document.getElementById("btn2")
join.addEventListener("click", function(e){
  let weather =prompt("Where are you from?")

if(weather === "USppp"){
    alert("Congratulations")
}
else if(weather === "summer"){
    alert("well done")
}
else if(weather === "fall"){
    alert("awesome")
}
else if(weather === "pop"){
    alert("gorgeous")
}
else{
    alert(
       " We'are sorry this Game is not available in your country")
    
    }
})
const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", startgame)
function startgame() {
//  url"./index.html"
fetch="https//www.google.com"
console.log("hello")
}

playpause.addEventListener("click", function (e) {
  if (count == 0) {
    count = 1;
    audio.play()
    playpause.innerHTML ="&#9658;"
  }
  else{
    count = 0;
    audio.pause()
    playpause.innerHTML ="&#9208;"
  }


})