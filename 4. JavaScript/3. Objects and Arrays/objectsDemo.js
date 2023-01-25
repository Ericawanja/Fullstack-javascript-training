//Create an object
let studentDetails = { firstname: "Joseph", units: [1, 2, 3, 4, 5, 6] };

let student = new Object();

//Accessing properties in object

let studentName = studentDetails.firstname;

// console.log(studentName);
// console.log(studentDetails.units)

//- Bracket notation
// console.log(studentDetails['firstname']);

//Add properties in object

studentDetails.admNo = 48608;
studentDetails.course = "ICT";

//Delete properties in object

delete studentDetails.units;
// console.log(studentDetails);

const trainnee = {
  firstname: "Rachel",
  course: "ICT",
  track: "Software engineering",
};

let state = "admNo" in trainnee;
let hasTrack = "track" in trainnee;

for (let x in trainnee) {
  console.log(x);
}
console.log(hasTrack);

let classDetails = { track: "ICT" };
let departmentDetails = { department: "Computing" };

let allDetails = Object.assign(departmentDetails);

// console.log(allDetails);

let person = {
  firstname: "Erick",
  lastname: "Migwi",
  fullname: function (){
    console.log(this.firstname);
    return this.firstname + this.lastname
  }
};

console.log(person.fullname());
