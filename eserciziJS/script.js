let element = document.getElementById("container");
element.style.backgroundColor = "black";

let paragrafoGenerato = document.createElement("p");

let testo = document.createTextNode("Aiuto, spegni la luce! :£");
paragrafoGenerato.appendChild(testo);
element.appendChild(paragrafoGenerato);

function clickTheButton(clickon){
    console.log("funziono!");
    paragrafoGenerato.style.color = "orange";
}