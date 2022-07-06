console.log("seconda parte")

/* */

// Returns a reference to the element by its ID.
document.getElementById('someid');

// Returns an array-like object of all child elements which have all of the given class names.
document.getElementsByClassName('someclass');

// Returns an HTMLCollection of elements with the given tag name.
document.getElementsByTagName('LI');

/* new */

// Returns the first element within the document that matches the specified group of selectors.
document.querySelector('.someclass');

// Returns a list of the elements within the document (using depth-first pre-order traversal of the document's nodes)
// that match the specified group of selectors.
document.querySelectorAll('div.note, div.alert');

/* */

// Get child nodes
var stored = document.getElementById('someid');
var children = stored.childNodes;

// Get parent node
var parental = children.parentNode;

// create new elments
var newHeading = document.createElement('h1');
var newParagraph = document.createElement('p');

// create text nodes for new elements
var h1Text= document.createTextNode('This is a nice header text!');
var pText= document.createTextNode('This is a nice paragraph text!');

// attach new text nodes to new elements
newHeading.appendChild(h1Text);
newParagraph.appendChild(pText);

// elements are now created and ready to be added to the DOM.

// grab element on page you want to add stuff to
var firstHeading = document.getElementById('firstHeading');

// add both new elements to the page as children to the element we stored in firstHeading.
firstHeading.appendChild(newHeading);
firstHeading.appendChild(newParagraph);

// can also insert before like so
 
// get parent node of firstHeading
var parent = firstHeading.parentNode;

// insert newHeading before FirstHeading
parent.insertBefore(newHeading, firstHeading);

// update style
stored.style.color = "red";

function dosomething(){
    console.log("ciao")
}

let text = document.getElementById("text")

function js_style() {
    //font styles added by JS:
    if(text.style.color == "green"){
        text.style.color = "black";
        text.style.fontSize = "20px";
    }else {
        text.style.fontSize = "10px";
        text.style.color = "green";
    }
}  

let riferimento = document.getElementById("elementoprova");
let h1 = document.createElement('h1');
let h1testo = document.createTextNode('Testo di prova');
h1.appendChild(h1testo)
riferimento.appendChild(h1)