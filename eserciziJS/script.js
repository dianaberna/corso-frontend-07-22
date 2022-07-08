let elementIndex = 0;

let containerElement = document.getElementById("container");
containerElement.style.backgroundColor = "black";

let generatedParagraph = document.createElement("p");
let testo = document.createTextNode("Aiuto, spegni la luce! :£");
generatedParagraph.appendChild(testo);
containerElement.appendChild(generatedParagraph);

let form = document.getElementById("containerForm");

let buttonText = document.getElementById("lightText");
let isLightTurnedOn = false;

function clickTheButton() {
  if (isLightTurnedOn) {
    generatedParagraph.style.color = "black";
    form.style.display = "none";
    document.getElementById("lightText").innerHTML = "accendi la luce";
  } else {
    generatedParagraph.style.color = "orange";
    form.style.display = "flex";
    document.getElementById("lightText").innerHTML = "💡 spegni la luce 💡";
  }
  isLightTurnedOn = !isLightTurnedOn;
}

let paragraphElement = document.getElementById("paragraph");

function clickForm() {
  console.log("ciao");
  let nome = document.getElementById("nome");
  let cognome = document.getElementById("cognome");
  console.log(nome.value);
  console.log(cognome.value);
  paragraphElement.innerHTML = nome.value + " " + cognome.value;
}

function addList() {
  let list = document.getElementById("list");
  let listElement = document.getElementById("listElement").value;
  console.log(listElement);

  let id = elementIndex;
  elementIndex++;

  let newElement = document.createElement("li");
  newElement.id = id;
  newElement.innerHTML = listElement;

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "delete";
  deleteButton.type = "button";
  deleteButton.name = "delete";
  deleteButton.className = "deleteListButton";
  deleteButton.onclick = () => deleteListElement(id);
  newElement.appendChild(deleteButton);

  list.appendChild(newElement);
  window.scrollTo(0, document.body.scrollHeight);
}

function deleteListElement(id) {
  let elementToDelete = document.getElementById(id);
  elementToDelete.parentNode.removeChild(elementToDelete);
}
