/* 
classe -> è una struttura che serve in informatica per descrivere
    un modello reale o astratto
oggetto -> instanza di una classe che possiede le sue proprietà e metodi 
*/
class Persona {
    name = '';
    surname = '';

    constructor({ name, surname }){
        // this -> mi serve per accedere alle proprietà della classe
        // name e surname sono fuori da questa funzione ma ci accedere tramite this
        this.name = name;
        this.surname = surname;

    }

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

let diana = new Persona({
    name: 'Diana',
    surname: 'Bernabei'
})

console.log(diana.getFullName())


/* esempio github */
/* async function showAvatar(){

    let user = {name: 'dianaberna'}
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
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
console.log("ciao") */

function prova(i) {
    return new Promise((resolve, reject) => {
        if(i == 0){
            resolve('Hai ragione, i = 0')
        }else{
            reject('Ci dispiace, i non è uguale a 0')
        }
    });
}

/* async function prova(){
    //niente promise
} */

/* prova(5)
    .then((response) => {
        //qui è stata risolta
        console.log(response)
    })
    .catch((error) => {
        //gestisci l'errore
        console.log(error)
    })
    .finally(() => {
        //alla fine della promessa
        console.log('Ho finito')
    }) */


window.addEventListener('load', async function(){
    /* console.log("ciao") */
    /* loadImg(); */
    await prova(0)
    console.log('ciao')
})

/* 
function loadImg(){
    const grid = document.getElementsByClassName('grid')[0]

    let input_value = 'cat'
    const url = 'https://api.unsplash.com/search/photos/?query='+input_value+'&per_page=9&client_id=hZRa4OdzodVlybtiMsr_HYdkAK3jMQ26SKTKiUM44QE'
    fetch(url)
    .then(response => {
        if(response.ok){
            console.log(response);
            return response.json()
        }else 
            alert(response.status)
    })
    .then(data => {
        const imageNodes = [];
        console.log(data)
        for(let i=0; i<data.results.length; i++){
            imageNodes[i] = document.createElement('div');
            imageNodes[i].className = 'img';
            imageNodes[i].style.backgroundImage = `url(${data.results[i].urls.raw})`
            imageNodes[i].addEventListener('dblclick',
            function(){
                window.open(data.results[i].links.download, '_blank')
            })
            grid.appendChild(imageNodes[i])
        }
    })
}

function removeImages(){
    grid.innerHTML = ''
} */