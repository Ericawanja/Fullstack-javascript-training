//creating function

// function functionName (){
//     return
// }

function printMsg() {
  console.log("Hello World");
}

// printMsg()

// anonymous

const print = function () {
  console.log("Hello World from this side");
};

// print()

//arrow =>

const greetings = () => console.log("Good morning");

// greetings()

//return

//declaration

function sum() {
  return 2 + 3;
}

// console.log(sum());

//anonymous

const product = function () {
  let result = 4 * 5;
  console.log(`The product is ${result}`);
  return result;
};
// console.log(product());

//Hoisting functions

// console.log(calcArea());

function calcArea() {
  return 4 * 4;
}
//hoisting anonymous
// console.log(area());

const area = function () {
  return 4 * 8;
};

//hoisting arrow functions
// console.log(perimeter());
const perimeter = () => 6 + 4;

// arguments and parameters

function calcPerimeter(a, b) {
  return a + b;
}

let result = calcPerimeter(23, 45)
console.log(result);


function theSum( ...arguments){


    console.log(arguments);

}
let sumResults = theSum( 2, 3, 4, 5, 6 ,7, 67, 45, 34)

//default parameters
function printName(name = 'User'){
    console.log(`The name of the user is ${name}`);

}
printName('Erick')

let sum2 = (a, b)=> a + b
console.log(sum2(3,4));
