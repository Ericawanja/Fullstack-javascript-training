// // let data = ['fruits', 'vegies']
// // data = ['fruits']
// // console.log(data);

// // const unit = 'kg'
// // unit = 'grams'

// // console.log(unit);

// //function sum that takes two parameters and find their sum

// // function sum(parameter1, parameter2){
// //     return parameter1 + parameter2

// function calculateSum(a, b) {
//   return a + b;
// }

// let result = calculateSum(2, 3);
// console.log(result);

// let sum = (a, b) => a + b;
// console.log(sum(4, 7));

// let sum2 = (a, b) => {
//   let result = a + b;

//   return `The sum of ${a} and ${b}  is ${result}`;
// };
// console.log(sum2(2, 20));
// //THe sum 18 and 17 is 45

// const student = (name = "an existing student") => {
//   return `The student is ${name}`;
// };

// console.log(student());

// const fruits = new Array("pawpaw", "pineaple", "apple");

// const [fruits1, fruits2, fruits3] = fruits;

// console.log(fruits1);
// console.log(fruits2);

// //destructuring in objects

// const stacks = {
//   frontend: "React",
//   backend: "Node",
//   database: "sql",
// };

// const { frontend, backend, sql } = stacks;

// console.log(frontend);

// const todo = { title: "clean", description: "do the cleaning" };

// const { title, description } = todo;

// console.log(title);

// function calaculateSum(a, b, displaySum) {
//   displaySum(a + b);
//   return a + b;
// }

// function displaySum(sum) {
//   console.log(sum);
// }
// calaculateSum(2, 3, displaySum);

// let calculateSumInPromise = (a,b)=>{
//     return new Promise((resolve, reject)=>{
//         if(typeof a === 'number' && typeof b === 'number'){
//             resolve(a +b)
//         }else{
//             reject("The parameters should be numbers")
//         }
//     })
// }

// calculateSumInPromise('h', 5).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })

function sum(...args) {
  let data = args;
  console.log(data);
  const result = data.reduce((a, b) => a + b);
  console.log(result);
}

sum(2, 4, 6, 7, 8, 6, 12, 45, 67,23);


const personalDetails = {
    firstname:'Martin',
    lastname:"Wachira"
}

const allDetails = { profession: "Software Engineer", ...personalDetails}
console.log(allDetails);



let students = [ 'frank', 'wangui', 'otieno', 'george']

for(let x of students){
  console.log(x);
}



