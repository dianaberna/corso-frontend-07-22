        /*
            dati quattro numeri restituire il minore e il maggiore
            input:
            a=3, b=-1, c=4, d=-2
            output:
            maggiore = 4, minore = -2
        */




        // let b = new Array()
        // b.push(10)

        // b.push(12)

        // b.push(33)

        // for(let i=0; i<b.length; i++){
        //     console.log(b[i])
        // }


        let array = [3,-1, 4,-2,18];
        let max = 0;
        let min = 0

        for(let i = 0; i < array.length; i++){
            if(array[i] >= max){
                max = array[i]
            }
            if(array[i] <= min){
                min = array[i]
            }
            console.log(array[i]);
        }
        console.log("il maggiore è "+max)
        console.log("il minore è "+min)





//  esercizio calcola la media dei valori di un vettore      

        var arr =[8,2,5,2,65,5];
        var somma = 0;

        for(let i = 0 ; i< arr.length; i++){
            somma += arr[i]
        }
        somma /=array.length;

        console.log(somma);



//somma dei valori di due array




let inputA = [1,2,3];
let inputB = [2,3,4];
let inputC ;

        function sommaValori(inputA, inputB){
            let inputC = new Array();
            for(let i = 0; i <inputA.length;i++){
                inputC[i] = inputA[i]+ inputB[i]
            }
            for(i = 0 ;i < inputC.length; i++){
                console.log("la somma dei valori dei due array è : " +inputC[i]);
            }
        }

        sommaValori(inputA, inputB);








// esercizio funzione che somma due numeri
console.log('-------esercizio funzione che somma due numeri----------')

        // function addizione(a,b){
        //     let tot = a+b
        //     return tot;
        // }

        // console.log(addizione(3,2));
        // console.log(addizione(-3,-6));
        // console.log(addizione(7,3));






        // let p1 = prompt('inserisci primo valore');
        // let p2 = prompt('inserisci secondo valore');


        // function addizionePrompt(p1,p2){
        //     let a = parseInt(p1);
        //     let b = parseInt(p2);
        //     // console.log(isNaN(a));
        //     // console.log(isNaN(b));
        //     if(isNaN(a) == true || isNaN(b) == true){
        //         console.log('Attenzione non hai inserito un numero');
        //         return 'errore';
        //     }else 
        //     {   
        //         let tot = a+b;
        //         return tot
        //     }
        // }

        // let result = addizionePrompt(p1,p2)
        // console.log(result);







// somma gli elementi di un array , il totale sommarlo ad un input 

        // let vettore =[1,2,3,4];

        // function sommaArray(vettore){
        //     let somma2=0;
        //     for(let i = 0 ; i <vettore.length;i++){
        //     somma2 +=vettore[i];
        // }
        // return somma2;
        // }
        // console.log(sommaArray(vettore));
    





// sommare il nuero in maniera continua inserendo un parametro

        // function addizione2 (num){
        //     let x = 0;
        //     for(let i = 1 ; i <= num ; i++){
        //         x += i; 
        //     }
        //     return x;
        // }
        // console.log(addizione2(4));





// contare il numero totale di gambe degli animali 
        function animali(chicken,cows, pigs){
            chicken *= 2;
            cows *= 4;
            pigs *= 4;
            return chicken + cows + pigs;
        }
        console.log(animali(5,4,4))





 // contare quante volte compare un carattere all'interno di una stringa
        function contaCarattere(carattere, parola){
            let tot = 0;
            for(let i = 0 ; i <parola.length; i++){
                if(parola[i].toLowerCase() == carattere.toLowerCase()){
                    tot++
                }
            }
            return tot
        }
        console.log(contaCarattere("a", "edabAt"))






        function EtempoDiBiscottieLatte(data){

                let giorno = data.getDate();
            
                let mese = data.getMonth();

            if(giorno === 24 && mese === 11){
        
                console.log('fettine panate')
                return true;
            
            }
            else{
                console.log('pasta e fagioli')
                return false
            }
        }

        console.log(EtempoDiBiscottieLatte(new Date(2021,11,24)))









let pippo = ([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])
let pluto =([15,150], [45, 75, 35])  
let paperino =([[1, 2], [5, 6]], [[3, 4]])  

function accorpa(){
    arr1 =[1, 10]
    arr2 =[2, 3, 4, 5, 6, 7, 8, 9]
    arrSum= [...arr1,...arr2];
    console.log(arrSum);


    arr3 =[15,150];
    arr4= [45, 75, 35];
    arrSum2 = [...arr3, ...arr4];
    console.log(arrSum2);
}

accorpa();
