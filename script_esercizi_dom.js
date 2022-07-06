

console.log("--------------------------------- MAX / MIN 1");


if(true){
    let a = 3;
    let b = -1;
    let c = 4;
    let d = -2;
    
    if(a>=b && a>=c && a>=d){
        console.log("Maggiore = "+a);
    }else if(a<=b && a<=c && a<=d){
        console.log("Minore = "+a);
    }

    if(b>=a && b>=c && b>=d){
        console.log("Maggiore = "+b);
    }else if(b<=a && b<=c && b<=d){
        console.log("Minore = "+b);
    }

    if(c>=a && c>=b && c>=d){
        console.log("Maggiore = "+c);
    }else if(c<=a && c<=b && c<=d){
        console.log("Minore = "+c);
    }

    if(d>=a && d>=b && d>=c){
        console.log("Maggiore = "+d);
    }else if(d<=a && d<=b && d<=c){
        console.log("Minore = "+d);
    }
}


console.log("--------------------------------- MAX / MIN 2");

if(true){
    let arrayy = [-3, -1, -4, -2]
    let max = arrayy[0];
    let min = arrayy[0];

    for(i=0; i<arrayy.length; i++){
        if(arrayy[i] > max){
            max = arrayy[i]; 
        }else if(arrayy[i] < min){
            min = arrayy[i];
        }
    }

    console.log("max = "+max);
    console.log("min = "+min);
}


console.log("--------------------------------- ETA' CANINA");


if(true){
    let etaUmani = 5;
    //let etaUmani = prompt("inserisci gli anni umani: ");


    function ConvAnniCanini(etaUmani){
        if(etaUmani >=0){
            if(etaUmani>0 && etaUmani<=2){
                let etaCanini = 10.5 * etaUmani;
                return etaCanini;
            }else if(etaUmani>2){
                let etaCanini = (10.5 * 2) + (4 * (etaUmani-2));
                return etaCanini;
            }else{
                return "ZERO"
            }

        }else{
            let error = "Errore";
            return error;
        }
    }

    console.log(ConvAnniCanini(etaUmani))
}


console.log("--------------------------------- MAX / MIN 1");


if(true){
    let num_element = 5;
    //let num_element = parseInt(prompt("Su quanti numeri vuoi calcolare la media?"));
    //console.log(num_element);
    function media(num_element){
        let arr = new Array();
        let somma = 0;
        let media = 0;
        let element = 0;

        for(ii=0; ii<num_element; ii++){
            element = 3
            //element = parseInt(prompt("elemento " + (ii+1)));
            //console.log(element);
            arr.push(element);
            somma += arr[ii];
        }


        media = somma / (num_element)
        return "Media: "+media;
    }
    console.log(media(num_element));
}


console.log("--------------------------------- SOMMA TRA ELEMENTI DI ARRAY");


if(true){
    let array1 = [1, 5, 3];
    let array2 = [2, 1, 4, 6, 5];
    
    let array3 = Array();
    
    if(array1.length >= array2.length){
        L_array = array1.length;
    }else{
        L_array = array2.length;
    }

    for(i=0; i<L_array; i++){
        if(array2[i] == null){
            array3.push(array1[i]);
        }else if(array1[i] == null){
            array3.push(array2[i]);
        }else{
            array3.push(array1[i]+array2[i]);
        }
        console.log(array3[i]);
    }
}


console.log("--------------------------------- FUNCTION SOMMA 1");


if(true){
    let num1 = 5;
    let num2 = 5;
    // num1 = prompt("primo num");
    // num2 = prompt("secondo num");
    //console.log(isNaN(num1));
    

    if(isNaN(num1) === false && isNaN(num2) === false){
        function somma(a, b){
            let sommaNum = parseInt(a)+parseInt(b);
            return sommaNum;
        }
        console.log(somma(num1, num2))
    }else{
        console.log("ERRORE: Inserire dei numeri e non del testo!");
    }

        // let somma1 = (a, b) => parseInt(a)+parseInt(b);
        // console.log(somma1(num1, num2))
}


console.log("--------------------------------- FUNCTION SOMMA 2");


if(true){
    let numero = 8;
    function sommaaa(n){
        let i=0;
        let somma=i;
        while(i<=n){
            somma += i;
            i++;
        }
        return somma;
    }
    console.log(sommaaa(numero));
}


console.log("--------------------------------- ZAMPE TOTALI");


if(true){
let z_pollo = 2
let z_mucca = 4
let z_maiale = 4

let animali = [5, 3, 1];
let z_animali = 0;

let i = 0;
while(i < animali.length){
    switch (i) {
        case 0:
            z_animali += animali[i]*z_pollo;
            break;
        case 1:
            z_animali += animali[i]*z_mucca;
            break;
        default:
            z_animali += animali[i]*z_maiale;
    }
    i++;
}
console.log(z_animali);
}


console.log("--------------------------------- SEARCH CHAR");


if(true){
let char = 'r';
let phrase = 'tre tigri contro tre tigri';
let contatore = 0;

for(i=0; i<phrase.length; i++){
    if(phrase[i] == char){
        contatore += 1;
    }
}

console.log(contatore);

}


console.log("--------------------------------- VIGILIA");


if(true){
    const vigilia = new Date('December 24');
    const day = vigilia.getDate();
    const month = vigilia.getMonth();

    //console.log(day + "/" + month);

    if(day == 24 && month == 11){
        console.log('True');
    }else{
        console.log('False');
    }
}


//console.log("--------------------------------- ");