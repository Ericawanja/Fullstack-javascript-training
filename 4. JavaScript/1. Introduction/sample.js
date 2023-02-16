// console.log("Hello world from this other side")

// let greetings = "Good morning"
// const id = 12334455
// var x = 'this another variable'

// let units = ['networking', 'database', 'dsa']
// let thisSemUnits = units
// thisSemUnits.pop()
// console.log(units)

// let nowGreetings = greetings
// nowGreetings = 'Good afternoon'
// console.log(greetings)

// let z = 7
// let y = 8

// let sum = z + y

// console.log(sum)

//function declaration

// function sum(x, y) {
//     //logic
//   return x + y;
// }
// let result1 = sum(3,4);
// let result2 = sum(8,4)
// let result3 = sum(8,5)

// console.log(result1, result2, result3);

let sum = function (x, y) {
  return x + y;
};
console.log(sum(78,98));

//arrow functions
let arrowsum = (x,y)=>{
  //logic
  return x +y
}
//only one parameter

let time = time=>{
  console.log(time)
}
let greetings = ()=>{
  //logic
}

console.log(arrowsum(12,45))


let students = [ 'Erick', 'martin', 'enock', 'jillian']
// let first = students[0]
// let second=students[1]
// let third = students[2]

//destructuring 
let [first, second, third] = students

let units = ['database', 'dsa', 'computer graphics', 'cryptography']

let [unit1, unit2] = units
console.log(first,second, third)
console.log(unit1, unit2)

//destructing on objects
let book = {
  author: "James Clear",
  title: "Atomic habits",
  published:"2011"
}

// let booTitle = book.title
// let author = book.author

let {author, title, published} = book
console.log(author, title, published)


//

function GreetUser(username = 'there'){
  return `Hello ${username}`
}

let greeting = GreetUser('Rachael')

console.log(greeting)