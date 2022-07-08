
    const giocatori = ['p1', 'p2']
    let  simboli = ['x','o'];

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
    n = riga * 3 + colonna;
    console.log(n);
    if(simboli == 'x'){

        document.getElementsByClassName('div'+n)[0].innerHTML = 'X';
        simboli = 'o'
        console.log(simboli)
    }else {
        document.getElementsByClassName('div'+n)[0].innerHTML ='O';
        simboli = 'x'
        console.log(simboli)
    }
}


        // let riga = 0;
        // let colonna = 0;
        // let array = ['a','b','c','d','e','f','g','h','i']; 
        // /*
        //  * a b c
        //  * d e f
        //  * g h i
        //  */
        // riga = 2;
        // colonna = 1;
        // console.log(array[riga*3+colonna])


