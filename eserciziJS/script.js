let containerElement = document.getElementById("container");
containerElement.style.backgroundColor = "black";

let generatedParagraph = document.createElement("p");

let testo = document.createTextNode("Aiuto, spegni la luce! :£");
generatedParagraph.appendChild(testo);
containerElement.appendChild(generatedParagraph);

let paragraphElement = document.getElementById("paragraph");

let form = document.getElementById("containerForm");

let buttonText = document.getElementById("lightText");

let isLightTurnedOn = false;

function clickTheButton() {
    if (isLightTurnedOn) {
        generatedParagraph.style.color = "black";
        form.style.display = "none";
        document.getElementById("lightText").innerHTML = "accendi la luce";
    } else {
        generatedParagraph.style.color = "orange"; 
        form.style.display = "flex";
        document.getElementById("lightText").innerHTML = "spegni la luce";
    }
    isLightTurnedOn = !isLightTurnedOn;
}

function clickForm(){
    console.log("ciao");
    let nome = document.getElementById("nome");
    let cognome = document.getElementById("cognome");
    console.log(nome.value);
    console.log(cognome.value);
    paragraphElement.innerHTML = nome.value + " " + cognome.value;
}