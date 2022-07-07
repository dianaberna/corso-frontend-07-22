function aggElem(){
    let lista = document.getElementById('lista');
    let elemento = document.getElementById('elemento').value;
    console.log(elemento);
    let nuovoElem = document.createElement('li');
    nuovoElem.innerHTML = elemento;
    let id = document.getElementsByTagName('li').length +1;
    nuovoElem.id = id

    let btnElimina = document.createElement('button');
    btnElimina.innerHTML='elimina';
    btnElimina.type = 'button';
    btnElimina.name = 'elimina';
    btnElimina.onclick = function(){
        return Elimina(id)
    }
    
    nuovoElem.appendChild(btnElimina);
    lista.appendChild(nuovoElem);
}

function Elimina(elemento){
    let togli = document.getElementById(elemento);
    togli.parentNode.removeChild(togli);
    return;
}

