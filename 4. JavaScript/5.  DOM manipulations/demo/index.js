const img =document.getElementsByTagName('img')[0]
img.src = 'cargo.png'

console.log(img);
const container = document.createElement('span')
const text  = document.createTextNode("This is the content in the text node")

const body = document.getElementsByTagName('body')[0]
container.appendChild(text)
body.appendChild(container)