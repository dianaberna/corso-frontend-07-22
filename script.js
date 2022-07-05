/* tipi di dato*/
console.log("--- variabili ---");
var a;
console.log(typeof a);
var a=10;
console.log(typeof a);
a='ciao'
console.log(typeof a);

var b='ciao';
console.log(typeof b);

/*conversione esplicita*/
console.log("--- conversione esplicita ---");
let variabile = '10';
console.log(typeof variabile);
console.log("variabile = "+variabile);
let variabileConvertita = parseInt(variabile, 10);
console.log("variabileConvertita = "+variabileConvertita);

/*let var const*/
if(true){
    var pluto = 4;
    console.log("pluto="+pluto);
}

let paperino = 6;
console.log("paperino="+paperino);
//console.log("pluto="+pluto)

const pippo = 4;
console.log(typeof pippo)
/* pippo=3; */

console.log("--- == vs === ---");
/* 
== -> verifica il contenuto
=== -> verifica la tipologia della variabile e il contenuto 
*/
console.log(1 === 1); // expected output: true
console.log('hello' === 'hello'); // expected output: true
console.log('1' ===  1); // expected output: false
console.log(0 === false); // expected output: false

console.log("--- condizioni ---");
let prova = 2;
if(prova > 1){
    console.log("si")
}else{
    console.log("no")
}
/*operatore ternario => modo per scrivere if else più velocemente */
(prova > 1)? console.log("si") : console.log("no");


/*array*/
console.log("--- array ---");
let array = [1, 2, 3, 4];
console.log(typeof array);
console.log(array.length);

/*somma di tutti i valori dell'array*/

/*primo loop*/
let somma1 = 0;
for(let i=0; i<array.length; i++){
    somma1 = somma1 + array[i];
    /* somma += array[i] */
}
console.log("somma1 = "+somma1)

/*secondo loop*/
let somma2=0;
array.forEach(element => {
    somma2+=element
});
console.log("somma2 = "+somma2)

/*terzo loop*/
let somma3=0;
for (let elemento of array){
    somma3 += elemento;
}
console.log("somma3 = "+somma3);

/* creare dinamicamente l'array */
let newArray = new Array();
console.log(typeof(newArray));
newArray.push(3);
newArray.push(4);
newArray.push(2);
console.log("newArray = "+newArray);

/*includes dice -> l'array include questa roba tra paramentri che scrivo ? */
let persone = [ 'Mario', 'Gigi', 'Pietro' ];
console.log(persone.includes('Diana')); // falso
console.log(persone.includes('Gigi')); // vero

/*indexOf -> ritorna l'indice dell'elemento */
console.log(persone.indexOf('Gigi'));

/* find() accetta una condizione specifica e si ferma al primo risultato*/
const arrayprova = [5, 12, 8, 130, 44];
const found = arrayprova.find(element => element > 10);
console.log(found); // expected output: 12

/* filter() crea un nuovo array con tutti gli elementi che superano il test implementato dalla funzione fornita.*/
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

/* arrow funciton -> modo sintetico di scrivere funzioni 
E' un modo rapido per dire 
parametri => esegui 
*/
console.log("--- arrow function ---");
// Traditional Function
function bob (a){
    return a + 100;
}
console.log(bob(2))
// Arrow Function
let bob2 = a => a + 100;
console.log(bob2(2));

const ciao = () => console.log('ciao');
ciao();
/* ... -> spread operator 
Spalma il contenuto di un array o di un json dentro qualcos altro
Quello che si dovrebbe fare è controllare a mano per ogni elemento
se esiste già nel nuovo array sostituirlo o aggiungerlo come nuovo
Con lo spread operator lo fai con una parola
*/
console.log("--- spread operator ---");
let x = [2,4,8];
let y = [4,5,6];

let z = [...x, ...y];
console.log("x = "+x)
console.log("y = "+y)
console.log("z = "+z); 

/* map -> crea un nuovo array con gli elementi risultanti dalla chiamata di map*/
console.log("--- map ---");
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);

/*funzione*/
console.log("--- funzione ---");
let array2 = [1,2,1,2];
function sommaArray(array2){
    let somma = 0;
    for(let i=0; i<array2.length; i++){
      somma += array2[i];
    }
    return somma;
}
console.log(sommaArray(array2));

/*stringhe*/
console.log("--- stringhe ---");
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
const string4 = new String("A String object");
console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);

const data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
const cities = data.split(',');
console.log(...cities)
console.log(cities.join(','));
console.log(...cities)

/*notazione oggetti*/
console.log("--- oggetti ---");
let mario = { name: 'Mario', cognome: 'Rossi'}
let pietro = { cognome: 'Rossi', birth: '01-01-1900'}
let alieno = {...mario, ...pietro} 
console.log(alieno)

var topolino = { name: 'topolino', surname: 'rossi'}
console.log(topolino.name)
console.log(topolino['name'])

/*prendere in input da utente */
/*
let sign = prompt("What's your sign?");

if (sign.toLowerCase() == "scorpio") {
  alert("Wow! I'm a Scorpio too!");
}

// there are many ways to use the prompt feature
sign = window.prompt(); // open the blank prompt window
sign = prompt();       //  open the blank prompt window
sign = window.prompt('Are you feeling lucky'); // open the window with Text "Are you feeling lucky"
sign = window.prompt('Are you feeling lucky', 'sure'); // open the window with Text "Are you feeling lucky" and default value "sure"
*/

/* template literal */
console.log("--- template literal ---");
let s1 = `string text`
let s2 = `string text line 1
 string text line 2`
let expression = 'a+b'
let s3 = `string text ${expression} string text`

console.log(s1,s2,s3)
