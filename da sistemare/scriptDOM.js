
// Manipolazione DOM

/*


*/

// Metodi per selezionare i nodi presenti nel DOM 
// ritorna la referenza all'elemento con l'id che gli passiamo tra virgolette
document.getElementById("unqualsiasiid");

// ritorna un oggetto di tipo array con tutti i nodi figlio che hanno la classe tra virgolette
document.getElementsByClassName("unaqualsiasiclasse");

// ritorna un HTMLCollection di elementi che hanno il tag name inserito nelle virgolette
document.getElementsByTagName("li");

// metodi equivalente di selezionare gli elementi dove ci muoviamo come nel css 

// ritorna il primo elemento presente nel documento che corrisponde al css 
document.querySelector("#someclass > p");

// ritorna la lista di elementi selezionati come nel metodo precedente 
// (ma ne possiamo avere più di uno visto che stiamo utilizzando la virgola come separatore)
document.querySelectorAll(".note, div .alert");

// possiamo posizionarci in un 
// Ritorna la lista di tutti i nodi figlio
var padre = document.getElementById("unqualsiasiid");
var figlio = padre.childNodes;

// Ritorna il nodo padre
var parental = children.parentNode;

// create new elments
var newHeading = document.createElement("h1");

// create text nodes for new elements
var h1Text = document.createTextNode("This is a nice header text!");

// attach new text nodes to new elements
newParagraph.appendChild(pText);

// elements are now created and ready to be added to the DOM.

// grab element on page you want to add stuff to
var firstHeading = document.getElementById("firstHeading");

// add both new elements to the page as children to the element we stored in firstHeading.
firstHeading.appendChild(newHeading);
firstHeading.appendChild(newParagraph);

// can also insert before like so

// get parent node of firstHeading
var parent = firstHeading.parentNode;

// insert newHeading before FirstHeading
parent.insertBefore(newHeading, firstHeading);

// update style
stored.style.color = "red";

function dosomething() {
  console.log("ciao");
}

let text = document.getElementById("text");
/*
function js_style() {
    //font styles added by JS:

    if(text.style.color == "green"){
        text.style.color = "black";
        text.style.fontSize = "20px";
    }else {
        text.style.fontSize = "10px";
        text.style.color = "green";
    }
}  */

let div = document.getElementById("elementoprova");
let h1 = document.createElement("h1");
console.log(typeof h1);
h1.style.color = "red";
let h1testo = document.createTextNode("Testo di prova");
h1.appendChild(h1testo);
div.appendChild(h1);

let textarea = document.getElementById("test-target"),
  consoleLog = document.getElementById("console-log"),
  btnReset = document.getElementById("btn-reset");

function logMessage(message) {
  consoleLog.innerHTML += message + "<br>";
}

textarea.addEventListener("keydown", (e) => {
  if (!e.repeat) logMessage(`Key "${e.key}" pressed [event: keydown]`);
  else logMessage(`Key "${e.key}" repeating [event: keydown]`);
});
