let sub = [34, 56, 12, 45, 56];

function total(subjects) {
  if (subjects.length === 6) {
    return "We will calculate the total";
  } else {
    return "one subject missing";
  }
}

let value = 8;

if (value) {
  console.log(value);
} else {
  console.log("no value");
}
/**
 *  - exist
 * - typeof string
 * - length of 8
 * "                                             "
 */
let password = "abd";

if (typeof password !== "number") {
  if (typeof password === "string") {
    if (password.trim().length >= 8) {
      console.log("The password is valid");
    } else {
      console.log("password is invalid");
    }
  } else {
    console.log("password is not a string");
  }
} else {
  console.log(`password does not exist or is invalid`);
}

//Switch statement

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

let time = "morning";

switch (time) {
  case "morning":
    console.log("Good morning");
    break;
  case "afternoon":
    console.log("Good afternoon");
    break;
  case "evening":
    console.log("Good evening");
    break;

  default:
    console.log("Invalid time");
    break;
}

//Iterations
//while loop
let num = 20;
let start;
while (num < 4) {
  console.log(num);
  num = num + 1;
}

// let numValue = 10
// do {
//     console.log(`The initial num value is ${numValue}`);
// }
// while (numValue == 10){
//     // console.log(`The num value is ${numValue}`);
//     // // numValue = numValue + 1

// }

// for (initial value; condition; increment or decrement) {
//   //block code

// }

let arr = [2, 4, 6, 7, 8, 1, 6, 2, 4];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 6) {
//     console.log(arr[i]);
//   }
// }

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 6) {
    continue;
  }
  console.log(arr[i]);
}