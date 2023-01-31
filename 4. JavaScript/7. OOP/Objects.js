// // let person = {}

// // let person = (firstname, lastname)=>{
// //     return {
// //         firstname,
// //         lastname
// //     }
// // }

// // let obj = person('erica', 'wanja')

// // console.log(obj);

// //Constructors

// // function Person(firstname, lastname){
// //     this.firstname = firstname
// //     this.lastname = lastname
// // }

// // const student = new Person('Erica', 'Wanja')
// // console.log(student);

let person = { age: 2 };

// Object.defineProperty(person, "ssn", {
//   configurable: false,
//   value: "345555",
// });

Object.defineProperty(person, "firstname", {
  writable: false,
  enumerable: false,
  value: "erica",
});

// delete person.ssn;
// delete person.age
//  person.firstname = 'hhhh'
// // console.log(person);

for (let x in person) {
  console.log(x);
}

// let person = {};
// person.age = 25;
// person.ssn = '012-38-9119';

// Object.defineProperty(person, 'ssn', {
//     enumerable: false
// });

// for (let prop in person) {
//     console.log(prop);
// }

//Inheritance


//object.create
let staff = {
  name: "John Doe",
  greet: function () {
    return "Hi, I'm " + this.name;
  },
};

// let teacher = Object.create(staff, {
//   subject: { value: "ict" },
// });

// console.log(teacher);


// proto

let teacher = {age:4}
teacher.__proto__ = staff


console.log(teacher);

