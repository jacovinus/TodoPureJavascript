// variables
let btnEvt = document.getElementById("addItem");
let itemInput = document.getElementById("inputItem");
let ulList = document.getElementById("ulList");
let ul = document.querySelector("ul");





const itemValue = ()=> {
    return itemInput.value;
}

// clean input
const clearValue = () => itemInput.value="";

const removeItem = (e) => {
if(e.target.tagName === "I") {
   e.target.parentNode.parentNode.remove();
   console.log("listo");
}
}
const addTrash = (li) => {
    let icon = document.createElement("i");
    li.appendChild(icon);
    icon.classList.add("close");
    let x= document.createTextNode("x");
    icon.appendChild(x);
}
// create list element
const createListElement = () => {
    let li = document.createElement("li");
    let inputValue = document.createTextNode(itemValue());
    li.appendChild(inputValue);
    addTrash(li);
    ulList.appendChild(li);
    clearValue();
   
}

 // add item to list with click event
const addToList = () =>{
    if(itemValue()){
     createListElement();
    }else{
        console.log("agregue un item a la lista");
    }
}

// add item to list with keypress=enter event
const addToListEnter = (e) =>{
    if(itemValue() && e.which === 13){
   createListElement();
   
    }
}

const taskDone = (e) =>
{
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("overline");
    }
}
// add click event to button
btnEvt.addEventListener("click",addToList);

// add keypress=enter event to input
itemInput.addEventListener("keypress",addToListEnter);


ul.addEventListener("click",taskDone);
let done = () => {
    let ic = document.querySelectorAll("i");
    return ic;
}

