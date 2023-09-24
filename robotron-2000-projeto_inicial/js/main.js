// alert("oi - direto do main.js");
// console.log("oi - direto do main.js - com console.log");
const robotron = document.querySelector("#robotron");


robotron.addEventListener("click", dizOi);

function dizOi(){
    console.log("oi- via add.Event e diz oi")
}