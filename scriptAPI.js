/*
Per comprendere e provare i seguenti esercizi vi consiglio di tenere commentati
tutti gli altri così nella console non trovate tutti i risultati
(ps. se sono tutti non commentati funziona tutto senza problemi)
*/

/* 
classe -> è una struttura che serve in informatica per descrivere un modello reale o astratto
oggetto -> instanza di una classe che possiede le sue proprietà e metodi 
*/
/* esempio classe Persona */
class Persona {
    // proprietà
    name = '';
    surname = '';

    constructor({ name, surname }){
        // this -> mi serve per accedere alle proprietà della classe
        // name e surname sono fuori da questa funzione ma ci accedere tramite this
        this.name = name;
        this.surname = surname;
    }

    // metodi
    getName() {
        return this.name;
    }

    getSurname() {
        return this.surname;
    }

    getFullName() {
        return this.name + ' ' + this.surname;
    }
}

let persona1 = new Persona({
    name: 'Diana',
    surname: 'Bernabei'
})

let persona2 = new Persona({
    name: 'Mario',
    surname: 'Rossi'
})

console.log(persona1.getFullName(), persona2.getFullName())

console.log("-----------------");

/* esempio definizione Promise */

function provaPromise(i) {
    return new Promise((resolve, reject) => {
        if(i == 0){
            resolve('Hai ragione, i = 0')
        }else{
            reject('Ci dispiace, i non è uguale a 0')
        }
    });
}

provaPromise(0).then((response) => {
        //qui è stata risolta
        console.log(response)
    }).catch((error) => {
        //gestisci l'errore
        console.log(error)
    }).finally(() => {
        //alla fine della promessa
        console.log('Ho finito')
    })

/* esempio pari e dispari con Promise */

const evenOddFunc = () => {
    let randInt = Math.round((Math.random() * 10) + 1);
    return new Promise( (resolve, reject) => {
        if(randInt % 2 === 0) {
            resolve('Resolved with: ' + randInt);
        } else {
            reject('Rejected with: ' + randInt);
        }
    });
};


const testFuncAsync = async () => {
    try {
        let result = await evenOddFunc();
        console.log('Promise resolved! ' + result );
    } catch(err) {
        console.log('Promise rejected! ' + err);
    }
};


for(let i = 0; i < 10; i++) {
    testFuncAsync();
}

console.log("-----------------");

/* esempio github */

 async function showAvatar(){
    let username = 'dianaberna'
    let githubResponse = await fetch(`https://api.github.com/users/${username}`);
    let githubUser = await githubResponse.json()

    let img = document.createElement('img')
    img.src = githubUser.avatar_url;
    document.getElementById("github").appendChild(img);

    await new Promise((resolve, reject) => setTimeout(resolve, 5000));
    img.remove();
    console.log("pippo")
    return githubUser;
}

showAvatar();
console.log("ciao") 

window.addEventListener('load', function(){
    console.log("ciao1")
    loadImg();
    console.log('ciao2')
}) 

console.log("-----------------");

/* esempio unsplash */
function loadImg(){
    const grid = document.getElementsByClassName('grid')[0]
    let input_value = 'cat and dog'
    let iddiana = 'hZRa4OdzodVlybtiMsr_HYdkAK3jMQ26SKTKiUM44QE'
    const url = 'https://api.unsplash.com/search/photos/?query='+input_value+'&per_page=10&client_id='+iddiana
    fetch(url)
    .then(response => {
        if(response.ok){
            /* console.log(response); */
            return response.json()
        }else 
            alert(response.status)
    })
    .then(data => {
        const imageNodes = [];
        console.log(data)
        for(let i=0; i<data.results.length; i++){
            /* console.log(data.results[i]) */
            imageNodes[i] = document.createElement('div');
            imageNodes[i].className = 'img';
            imageNodes[i].style.backgroundImage = `url(${data.results[i].urls.raw})`
            grid.appendChild(imageNodes[i])
        }
    })
}
