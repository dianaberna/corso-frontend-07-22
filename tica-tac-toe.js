
    const giocatori = ['p1', 'p2']
    let  simboli = ['x','o'];
    let stato = ["-","-","-","-","-","-","-","-","-"];

function assegnaTurno(){
    let padre = document.getElementById('padre');
    let paragrafo = document.getElementById('turno');
    let play1 = document.getElementById('player_1').value;
    let play2 = document.getElementById('player_2').value;

    let maxGiocatori = {play1,play2};

    console.log(maxGiocatori);

    sceltaRandom = giocatori[Math.floor(Math.random()* giocatori.length)];

    if(sceltaRandom == "p1"){
        paragrafo.innerHTML = 'è il tunro di '+ play1
        simboli = 'x'
        
    }else{
        paragrafo.innerHTML = 'è il turno di '+ play2;
        simboli ='o'
    }
    console.log(sceltaRandom);
}





function giocare(riga , colonna){
    const n = riga * 3 + colonna;
    console.log(n);
    if(simboli == 'x'){
        stato[n] = 'x';
        document.getElementsByClassName('div'+n)[0].innerHTML = 'x';
        simboli = 'o'
        verdetto(n)
        console.log(stato)
        console.log(n + "----")
        console.log(simboli)
    }else {
        stato[n] = 'o';
        document.getElementsByClassName('div'+n)[0].innerHTML ='o';
        simboli = 'x'
        verdetto(n)
        console.log(stato)
        console.log(n +"----")
        console.log(simboli)
    }
}







    function verdetto(attuale){
        for(let i = 0 ; i < 9 ; i++){
            if(attuale !== i ){

            }
        }
    }

        let riga = 0;
        let colonna = 0;
        let array = ['a','b','c','d','e','f','g','h','i']; 
        /*
         * a b c
         * d e f
         * g h i
         */
        riga = 1;
        colonna = 2;
        console.log(array[riga*3+colonna])


