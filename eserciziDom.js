
// cambiare lo stile dell'html con javascript
var testino = document.getElementById('testino');
testino.style.color ='green';



// creare un nuovo elemento html (createElement,createTextNode, appendChild)
let figlio = document.getElementById('genitore_uno')
let elemento = document.createElement('h1')
let nodo = document.createTextNode('La mortadella custa picca e sapi bella')

elemento.appendChild(nodo);
figlio.appendChild(elemento);

// stampare al click sul bottone una cosa in console
// function stampaSplash(){
//     console.log('splaaaaaaaash')
// }



//cambiare colore al click del bottone
let testo = document.getElementById('testino');
function cambiaStile(){
    if(testino.style.color == 'green'){
        testino.style.color='blue'
    }else{
        testino.style.color='green';
    }
}





function submitto(){
    let nome = document.getElementById('nome').value;
    let cognome = document.getElementById('cognome').value;
    console.log(nome)
    console.log(cognome)

    document.getElementById('risultato').innerHTML = nome + " " + cognome;
}
