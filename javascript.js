//MAGGIORE E MINORE SENZA CICLI E VETTORI
    /* let a = 3;
    let b = -1;
    let c = 4;
    let d = -2;

    if(a > b && a > c && a > d){ //se A è maggiore di tutti
        console.log("maggiore = "+ a); //stampa la A come maggiore
    }else{
        if(b > c && b > d){//se B è maggiore di C o D, escludendo la A
            console.log("maggiore = "+ b);//stampa la B come maggiore
        }else{
            if(c > d){//se C è maggiore di D, escludendo la A e la B
                console.log("maggiore = "+ c);//stampa la C come maggiore
            }else{
                console.log("maggiore = "+ d);//stampa la D come maggiore per esclusione
            }
        }
    }

    if(a < b && a < c && a < d){//se A è minore di tutti
        console.log("minore = "+ a);//stampa la A come minore
    }else{
        if(b < c && b < d){//se B è minore di C o D, escludendo la A
            console.log("minore = "+ b);//stampa la B come minore
        }else{
            if(c < d){//se C è minore di D, escludendo la A e la B
                console.log("minore = "+ c);//stampa la C come minore
            }else{
                console.log("minore = "+ d);//stampa la D come minore per esclusione
            }
        }
    } */



    //MAGGIORE E MINORE DI UN ARRAY

    /* let array = [3, -1, 4, -2];
    let maggiore = 0;
    let minore = 0;


    for(let i = 0; i < array.length; i++){
        if(array[i] > maggiore){
            maggiore = array[i];
        }
        if(array[i] < minore){
            minore = array[i];
        }
    }
    console.log("maggiore = " + maggiore);
    console.log("minore = " + minore); */





    //CONVERSIONE ANNI UMANI IN ANNI CANINI

    /* let anni_umani = prompt("Quanti anni hai?");
    function Conversione(anni_umani){
        var anni_canini=0;
        if(anni_umani <= 0){
            console.log("errore");
        }
        for(var i = 0; i < anni_umani; i++){
            if(i<2){
                anni_canini= anni_canini + 10.5;
            }else{
                anni_canini = anni_canini + 4;
            }
        }
        return anni_canini;
    }
    console.log(Conversione(anni_umani)); */



    //MEDIA DI VALORI IN INPUT IN UN ARRAY
    /* let N = prompt("quanti numeri vuoi inserire?");
    function media(N){
        let media = 0;
        let somma = 0;
        let array = new Array();
        for(var i = 0; i < N; i++){
            let numero = prompt("inserisci il valore " + i);
            let num = parseInt(numero);
            array.push(num);
        }
        for(i = 0; i < N; i++){
            somma = array[i] + somma;
        }
        media = somma / N;
        return media;
    }
    console.log(media(N)); */
    


    /* let array1 = [1,2,3];
    let array2 = [4,5,6];
    function somma_array(array1, array2){
        let array3 = new Array();
        for(var i = 0; i < array1.length; i++){
            array3[i] = array1[i] + array2[i]; 
        }
        console.log("l'array contiene");
        for(i = 0; i < array3.length; i++){
            console.log(array3[i]);
        }
    }
    console.log(somma_array(array1, array2));


    let array4 = [4,5];
    function somma_storta(array1,array4){
        let array5 = new Array();
        let maggiore;
        if(array1.length > array4.length){
            maggiore = array1.length;
        }else{
            maggiore = array4.length;
        }

        for(var i = 0; i < maggiore; i++){
            array5[i] = array1[i] + array4[i];
            console.log(array5[i]);
        }
        console.log("l'array contiene");
        for(i = 0; i < maggiore; i++){
            console.log(array5[i]);
        }
    }
    console.log(somma_storta(array1, array4)); */




    /* function somma(numero1, numero2){
        let num1 = parseInt(numero1, 10);
        let num2 = parseInt(numero2, 10);
        let somm = num1 + num2;
        return somm;
    }
    console.log("la somma e' : " + somma(-3,-6)); */


    /* function somma(num){
        let num1 = parseInt(num, 10);
        let somma = 0;
        for(var i = 0; i <= num1; i++){
            somma += i;
        }
        return somma;
    }
    console.log("la somma e' : " + somma(3)); */


    /* let chickens = parseInt(prompt("inserire quante polli :"));
    let cows = parseInt(prompt("inserire quante mucche :"));
    let pigs = parseInt(prompt("inserire quante maiali :"));
    function gambe(chickens, cows, pigs){
        chicken = chickens * 2;
        cow = cows * 4;
        pig = pigs * 4;
        var gambe = chicken + cow + pig;
        return gambe;
    }
    console.log("il totale delle gambe sono : " + gambe(chickens, cows, pigs)); */





    /*
    1- creare un div e un bottone al suo interno nell'html, assegnare un id al div, selezionare l'id nel javascript (getelementbyid) e modificare lo stile 
    2- creare un paragrafo da appendere al div (sarà inserito dopo il bottone)
    3- andiamo a gestire l'evento onclick del button scrivendo onclick="" come attributo del tag e inserire un console.log("ciao") all'interno (fare questa cosa nell'html)
    4- creare una funzione con all'interno un console log e nell'evento onclick richiamere questa funzione
    5- nella funzione creata andare a modificare lo stile del paragrafo che abbiamo nello stesso div (ad esempio fontSize = "20px", color = "red")
    6- aggiungere l'if alla funzione per controllare se il bottone è già stato cliccato controllando appunto se lo stile applicato è quello dato dal css del documento oppure quello aggiornato con js
    */

    /* let div = document.getElementById("box");
    div.style.backgroundColor = "red";

    var nuovoParagrafo = document.createElement('p');
    var testo = document.createTextNode('ciao mondo');
    
    nuovoParagrafo.appendChild(testo);
    div.appendChild(nuovoParagrafo);

    let modifica = document.querySelector("#box > p");



    function funzione(){
        console.log("ciao");
        if(modifica.style.color == "blue"){
            modifica.style.color = "green";
        }else{
            modifica.style.color = "blue";
        }
    } */




    /* 
    1- creare un form con due caselle di tipo testo ("nome" e "cognome")
    2- aggiungere un input di tipo submit e scrivere una funzione che gestisce l'evento onSubmit stampando in console un "ciao"
    3- aggiornare la funzione creata andando a stampare in console ogni valore inserito nel form (elemento.value è per selezionare il contenuto dell'elemento)
    */

    

    /* function saluta(){
        console.log("ciao");
    }


    let risultati = document.getElementById('risultati');

    function invio(){
        let nome = document.getElementById('nome');
        let cognome = document.getElementById('cognome');
        console.log(nome.value);
        console.log(cognome.value);
        risultati.innerHTML = 'Nome : ' + nome.value + ' Cognome : ' + cognome.value;
    } */


    function add(){
        let lista = document.getElementById('lista');
        let elemento = document.getElementById('elemento').value;
        if(elemento == 0){
            console.log('errore');
        }else{
            console.log(elemento);

            let id = document.getElementsByTagName('li').length + 1;
            let addElement = document.createElement('li');
            addElement.id = id; //assegna un id all'elemento aggiunto
            let span = document.createElement('span');
            span.innerHTML = 'N°' + id + ' = ' + elemento;
            addElement.appendChild(span);
            

            let bottoneElimina = document.createElement('button');
            bottoneElimina.innerHTML = 'Delete';
            bottoneElimina.type = 'button';
            bottoneElimina.name = 'Elimina';

            bottoneElimina.onclick = function(){
                return elimina(id);
            }

            addElement.appendChild(bottoneElimina);
            lista.appendChild(addElement);
        }
        
    }

    function elimina(elemento){
        let cancella = document.getElementById(elemento);
        cancella.parentNode.removeChild(cancella);
    }
