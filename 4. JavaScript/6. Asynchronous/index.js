// function greet() {
//   console.log("Good morning");
// }

// function showMsg() {
//   console.log("This function should be executed first");
// }

// setTimeout(() => {
//   showMsg();
// }, 1000);

// greet();

// let users = [];

// function setUsers(){
//     setTimeout(() => {
//         users = [ 'martin', 'rachael', 'enock']
//     }, 0);
// }

// function displayData(data) {
//   console.log(data);
// }

// setUsers()
// displayData(users)

let users;

function getUsers(callback) {
  setTimeout(() => {
    users = ["martin", "rachael", "enock"];
    callback(users, modifyData);
  }, 1000);
}

function displayData(data, secondCallback) {
  secondCallback(data);
}

function modifyData(data) {
  let modified = data.join(",");
  console.log(modified);
}

// getUsers(displayData);

//promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(["monicah", "Erick", "Otieno", "John"]);
  }, 1000);
});

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["monicah", "Erick", "Otieno", "John"]);
    }, 1000);
  });
}

// getData()
//   .then((data) => {
//     return data.join(",");
//   })
//   .then((data) => {
//     console.log("The promised data", data);
//   });

let success = true;
let todos = ["code", "read", "write"];

function getTodos() {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve(todos);
    } else {
      reject(`There are no todos`);
    }
  });
}

getTodos()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Thank you for using our api");
  });


  //Async Await

  async function getDummyTodos(){
    const response = await fetch('https://dummyjson.com/todos')
    const data = await response.json()
    return data
    
  }
  
  async function displayDummyTodos(){
   const todos =  await getDummyTodos()
   console.log(todos);
  }

  displayDummyTodos()