let containerElement = document.getElementById("container");
containerElement.style.backgroundColor = "black";

let generatedParagraph = document.createElement("p");

let testo = document.createTextNode("Aiuto, spegni la luce! :£");
generatedParagraph.appendChild(testo);
containerElement.appendChild(generatedParagraph);

let paragraphElement = document.getElementById("paragraph");

function clickTheButton(clickon){
    console.log("funziono!");
    if(generatedParagraph.style.color == "black") {
        generatedParagraph.style.color = "orange"; 
    } else {
        generatedParagraph.style.color = "black";
    } 
}

function clickForm(){
    console.log("ciao");
    let nome = document.getElementById("nome");
    let cognome = document.getElementById("cognome");
    console.log(nome.value);
    console.log(cognome.value);
    paragraphElement.innerHTML = nome.value + " " + cognome.value;
}