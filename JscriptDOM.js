//Jscript DOM
var a = document.getElementById('div');
var testop1 = document.createTextNode("verrò modificato da Javascript");
a.appendChild(testop1)
a.style.color = "red"

var paragrafo = document.getElementById("p")
var testop2 = document.createTextNode("Ciao");
paragrafo.appendChild(testop2)
a.appendChild(paragrafo)

function colore() {

if (paragrafo.style.color == "black")
{paragrafo.style.color = "green"
paragrafo.style.fontSize = "3rem" }
else 
{paragrafo.style.color = "black"
paragrafo.style.fontSize = "16px"}
}



var Nome = document.getElementById("Nome")
var Cognome = document.getElementById("Cognome")

var paragrafo2 = document.getElementById("risultato")

function Onsubmit () {
    console.log(Nome.value, Cognome.value)
    paragrafo2.innerHTML = Nome.value + Cognome.value
}
