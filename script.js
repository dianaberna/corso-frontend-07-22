/* tipi di dato*/
console.log("--- variabili ---");
var a;
console.log(typeof(a));
a=10;
console.log(typeof a);
a='ciao'
console.log(typeof a);
var b='ciao';
console.log(typeof b);

/*
// esempio scope funzioni 
function primafunzione(p){
    p += 2;
    function secondafunzione(p){
        let g = p + 2
        return g
    }
    secondafunzione(p)
    return p
}
secondafunzione(2)
console.log(primafunzione(1)) */

/*conversione esplicita*/
console.log("--- conversione esplicita ---");
let variabile = '101';
console.log("prova operazione "+variabile+30)
console.log(typeof variabile);
console.log("variabile = "+variabile);
let variabileConvertita = parseInt(variabile, 10);
console.log("variabileConvertita = "+variabileConvertita);
console.log(typeof variabileConvertita);

console.log("--- let var const ---");
/*let var const*/
if(true){
    var pluto = 4;
    console.log("pluto="+pluto);
}

let diana = 10;
var paperino = 6;
if(diana<5){
    console.log("paperino1="+paperino);
}else{ 
    console.log("paperino2="+paperino); 
}

console.log("pluto="+pluto);
console.log("paperino="+paperino);

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
console.log(0 === false); // expected output: false
console.log('5' ===  5); // expected output: true

console.log("--- condizioni ---");
let prova = 2;
if(prova > 1){
    console.log("si")
}else{
    console.log("no")
}

if(prova > 1){
    console.log("si")
}else if(prova>2){
    console.log("no")
}else{

}

/*operatore ternario => modo per scrivere if else più velocemente */
(prova > 1)? console.log("si") : console.log("no");
/*(condizione) ? -true- : -false-*/

/*array*/
console.log("--- array ---");
let array = [5,8,9,2];

let espressione = (5+3*(2+2))
console.log(typeof espressione)

/*
posizione 0 -> 5
posizione 1 -> 8
posizione 2 -> 9
posizione 3 -> 2
array.length = 4
*/

console.log(typeof array);
console.log(array.length);

/*somma di tutti i valori dell'array*/

/*primo loop*/
let somma1 = 0;
for(let i=0; i<array.length; i++){
    /* somma1 = somma1 + array[i]; */
    somma1 += array[i];
}
console.log("somma1 = "+somma1);

let i = 0;
let somma10 = 0;
while(i<array.length){
    somma10 += array[i];
    i++;
}
console.log("somma10 = "+somma10);

/*secondo loop*/
let somma3=0;
for (let elemento of array){
    somma3 += elemento;
}
console.log("somma3 = "+somma3);

/*terzo loop*/
let somma2=0;
array.forEach(pallino => {
    somma2+=pallino
});
console.log("somma2 = "+somma2)

/* creare dinamicamente l'array */
let newArray = new Array();
console.log(typeof(newArray));
let nuovo = 3;
newArray.push(nuovo, 3, 5);
newArray.push(4);
newArray.push(2);
console.log("newArray = "+newArray);
console.log(typeof(newArray));

newArray.pop();
console.log("newArray = "+newArray);

let persone = [ 'Mario', 'Gigi', 'Pietro', 'Luigi', 'Giuseppe' ];
/*indexOf -> ritorna l'indice dell'elemento */
let posizione = persone.indexOf('Gigi')
console.log("posizione ->"+posizione);

/* splice() */
persone.splice(2, 1);
console.log("------ persone = "+persone)

var arrayDiana = [1,2,3,4]
var item = 3
var index = arrayDiana.indexOf(item);
arrayDiana.splice(index, 1);

/*includes dice -> l'array include questa roba tra paramentri che scrivo ? */
console.log(persone.includes('Diana')); // falso
console.log(persone.includes('Gigi')); // vero

/* find() accetta una condizione specifica e si ferma al primo risultato*/
const arrayprova = [5, 12, 8, 130, 44];
const found = arrayprova.find(element => element > 10);
console.log(found); // expected output: 12 */

/* filter() crea un nuovo array con tutti gli elementi che superano il test implementato dalla funzione fornita.*/
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4, 5]

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


/* arrow funciton -> modo sintetico di scrivere funzioni 
E' un modo rapido per dire 
parametri => esegui 
*/
console.log("--- arrow function ---");
let numero = 5;
// Traditional Function
function bob (a){
    return a + 100;
}
console.log(bob(numero))
// Arrow Function
let bob2 = a => a + 100;
console.log(bob2(numero));

const ciao = () => console.log('ciao');
ciao();

/*stringhe*/
console.log("--- stringhe ---");
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
console.log(string1+'ciao')
const string4 = new String("A String object");
console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);


/* template literal */
console.log("--- template literal ---");
let s1 = `string text`
let s2 = `string text line 1
 string text line 2`
let expression = 'a+b'
let s3 = `string text ${expression} string text`

console.log(s1,s2,s3)


/* let sign = prompt();       //  open the blank prompt window
console.log(typeof sign); */

/*date */
const today = new Date()
let birthday = new Date('December 17, 1995 03:24:00') // DISCOURAGED: may not work in all runtimes
birthday = new Date('1995-12-17T03:24:00')   // This is ISO8601-compliant and will work reliably
birthday = new Date(1995, 11, 17)            // the month is 0-indexed
birthday = new Date(1995, 11, 17, 3, 24, 0)
birthday = new Date(628021800000)            // passing epoch timestamp

/* ... -> spread operator 
Spalma il contenuto di un array (o di un json) dentro qualcos altro
Quello che si dovrebbe fare è controllare a mano per ogni elemento
se esiste già nel nuovo array sostituirlo o aggiungerlo come nuovo
Con lo spread operator lo fai con una parola
*/
console.log("--- spread operator ---");
let x = [2,4,8];
let y = [4,5,6];

let z = [...x, ...y];
let z1 = [x,y];
console.log("x = "+x);
console.log("y = "+y);
console.log("z = "+z); 
console.log("z1 = "+z1); 

console.log("---");
console.log(x);
console.log(...x);
console.log("---");

// numeri
const arr1 = [10, 5, 1, 7];
console.log("stampa ----- "+arr1.sort())
const arr2 = [1, 90, 6, 4];
const arrres = [...arr1, ...arr2];
const result1 = [...arrres].sort((a, b) => a - b);

console.log(arrres);
console.log(result1);

// caratteri
const arr3 = ['z', 'c', 'a', 'f'];
console.log("stampa ----- "+arr3.sort())
const arr4 = ['p', 'q', 'm', 'y'];
const arrres2 = [...arr3, ...arr4];
const result2 = [...arrres2].sort();
console.log(arrres2);
console.log(result2);

/* map -> crea un nuovo array con gli elementi risultanti dalla chiamata di map*/
console.log("--- map ---");
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);


/*notazione oggetti*/
console.log("--- oggetti ---");
let utente = { name: 'Mario', cognome: 'Rossi'}
console.log(utente.name)
let pietro = { cognome: 'de angelis', birth: '01-01-1900'}
let alieno = {...utente, ...pietro} 
console.log(alieno)

var topolino = { name: 'topolino', surname: 'rossi'}
console.log(topolino.name)
console.log(topolino['name'])

let provaJson = {
	"id": "0001",
	"type": "donut",
	"name": "Cake",
	"ppu": 0.55,
	"batters":
		{
			"batter":
				[
					{ "id": "1001", "type": "Regular" },
					{ "id": "1002", "type": "Chocolate" },
					{ "id": "1003", "type": "Blueberry" },
					{ "id": "1004", "type": "Devil's Food" }
				]
		},
	"topping":
		[
			{ "id": "5001", "type": "None" },
			{ "id": "5002", "type": "Glazed" },
			{ "id": "5005", "type": "Sugar" },
			{ "id": "5007", "type": "Powdered Sugar" },
			{ "id": "5006", "type": "Chocolate with Sprinkles" },
			{ "id": "5003", "type": "Chocolate" },
			{ "id": "5004", "type": "Maple" }
		]
}

            console.log(provaJson.name)
console.log("json topping: "+  provaJson.topping[2].type)

for(element of provaJson.topping){
    console.log(element);
} 