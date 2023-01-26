//id
//tagname
//classname
// queryselector
// queryselectorAll

const element = document.getElementById("btn")
console.log(element);

const heading = document.getElementsByTagName('h1')[0]
console.log(heading);

const p = document.getElementsByClassName("para")
console.log(p)


const btn = document.querySelector(".formBtn")
console.log(btn);

const allBtns = document.querySelectorAll(".formBtn")
console.log(allBtns);

//changing elements

const title = document.querySelector(".heading")
// console.log(title.innerText, title.innerHTML);
title.innerText = 'about'





document.getElementsByTagName("img")[0].src = 'cargo.png '

//change style

document.getElementsByClassName("para")[0].style.color = 'red'

const container = document.querySelector(".container")
let containerText = container.innerText
console.log(containerText);

let containerDetails = container.innerHTML
console.log(containerDetails);


//create html elements in javascript

const wrapper = document.createElement('div')
const content = document.createTextNode("This is a new div from javaScript")
wrapper.appendChild(content)

const body = document.getElementsByTagName("body")[0]
body.appendChild(wrapper)


//Events
//

function changeText() {
    const btn = document.getElementById("btn")
    btn.innerText =" Clicked!"

    
}

const cancel = document.getElementsByClassName('formBtn')[0]
cancel.addEventListener('click',()=>{
    alert("cancelled")
} )