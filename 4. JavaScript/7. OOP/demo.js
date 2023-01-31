// let person = {name:'John'}

//factory function
// function person(){
//     return {
//         firstname:'john',
//         lastname:'doe'
//     }
// }

// let student = person()

// console.log(student);

// function Person(){
//     this.firstname = 'John'
//     this.lastname = 'doe'
//     this.ssn = '2345666'
//     this.role = 'software engineer'
// }

// let student = new Person()

// console.log(student);

// const staff = {
//     firstname:'Gladwin',
//     lastname:'busula',
//     idno: 7890021,
//     role: 'software Engineer'
// }
// console.log(staff);
// Object.defineProperty(staff, 'idno', {
//     enumerable:false
// })

// for(let x in staff){
//     console.log(x);
// }

// Object.defineProperty(staff, 'role', {
//     configurable:false
// })

// delete staff.role
// console.log(staff)

// let books = {title: 'Atomic habits', author: "James Clear"}

// Object.defineProperty(books, 'genre', {
//     value:'Self development',
//     writable:false
// })

// books.genre = 'Motivation'
// console.log(books);

// let staff = {
//   institution: "Nyeri Poly",
//   department: "ict",
// };

// let ictPersonnel = {
//   name: "John Wambugu",
//   role: "Ict personnel ",
// };

// //proto
// ictPersonnel.__proto__ = staff;
// console.log(ictPersonnel);

// console.log(ictPersonnel.toString());

// let institution = ictPersonnel.institution;

// console.log(institution);

// // object.create

// let Animal = {
//   legs: 4,
// };

// const cow = Object.create(Animal, {
//     color: {
//         value:'black',
//         enumerable:false
//     }
// });
// cow.breed = "freshian";

// console.log(cow.legs, cow);

// const vehicle = {
//   wheels: 4,
// };

// const physicalAppearance = {
//   doors: 4,
// };

// const tesla = {
//   electric: true,
// };
// Object.assign(tesla, physicalAppearance, vehicle);
// const dreamCar = Object.assign(tesla, physicalAppearance, vehicle)

// console.log(dreamCar);

// console.log(tesla);

// //mixin

// const staff = {
//   calculateSalary: function () {
//     return 1234567;
//   },

//   calculatePension: function () {
//     return 123455;
//   },
// };

// const hod = {name: 'rachael'}

// Object.assign(hod, staff)

// console.log(hod.calculatePension());

// class Staff {
//   constructor(name, jobLevel) {
//     this.name = name;
//     this.role = jobLevel;
//   }
//   calculateSalary() {
//     return 56889999
//   }
// }

// let instructor = new Staff('Enock', 12)

// console.log(instructor);
// let salary = instructor.calculateSalary()


// console.log(salary);


class vehicle{
    constructor(){
        this.model = "tesla"
    }

    calculateSpeed(){
        let speed = model * 12
        return speed
    }

}


class tesla extends vehicle{
    constructor(){
        super(vehicle)
        this.electric = true
        
    }
}

const tesla1 = new tesla()
console.log(tesla1);