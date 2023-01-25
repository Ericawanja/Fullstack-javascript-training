let info = 'This is the information '

//length
let len = info.length
// console.log(len);

//charAt - character index
let element = info.charAt(3)

//charCodeAt - returns the character code
let code = info.charCodeAt(0)

// console.log(code);
//includes- true or false

let state = info.includes('this')
// console.log(state);

//indexOf
let position = info.indexOf('world')
console.log(position);
//localeCompare
let stri1 = 'Hello world'
let stri2 = 'Hello world'
let equal = stri1.localeCompare(stri2)
// console.log(equal);

//toUpperCase
// console.log(stri1.toUpperCase());

// toLowerCase
//replace -- case sensitive
let str3 = ' Hello world'
let nationGreetings = str3.replace('world', 'nation')
// console.log(nationGreetings);


// trim(), trimStart()
str3.trim()
str3.trimStart()

// concat()
let combined = stri1.concat(str3)
console.log(combined);
// slice()- start and end - end execluded - accepts negative values
let str5 = 'This is a very long information'
let newStr = str5.slice(2, 5)
// console.log(newStr);

// subString() no negative values
// subStri() second paramaeter length
let anotherString = str5.substr(2, 7)

//string to an array -- .split(""), (",")- the separator
let students= "Erick Gladwin wambugu marion"
let arr =students.split("")
console.log(arr);


//trim localecompare slice

let str6 = 'This is yet another information  '
let str7 = str6.trim()

// console.log(str7.split(""));

let list5 = "Erick Gladwin wambugu marion"
let list4= "Erick Gladwin wambugu marion"

console.log(list5 === list4);



let str9 = 'mango banana pawpaw apple'
console.log(str9.slice(0,5));