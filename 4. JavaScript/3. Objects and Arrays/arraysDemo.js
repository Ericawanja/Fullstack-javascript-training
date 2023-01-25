//Create an array

let marks = [ 23, 47, 40, 30] //  ['martin', 'rachael', 'enock', 'george']

let studentNames = new Array('martin', 'rachael', 'george', 'otieno')
// console.log(typeof marks)


//Length

//arrayname. length
let len = marks.length


//Add elemenths end
//push()

studentNames.push('patrick')

//Add elements at the start
// unShift()

studentNames.unshift('john')


let trainnes = ['mwangi', 'brendah']
let students = trainnes.push('monicah')

//remove elements in an array

// at the end pop()

let years = [2023, 2022, 2021, 2020]
years.pop()

//first element - shift()

years.shift()





/**
 * banana- 0
 * orange- 1
 */


// fruits.splice()
// console.log(years);

//remove at a certain position
let fruits = ['banana', 'orange', 'pineapple', 'apple']

fruits.splice(2, 1, 'pawpaw')
// console.log(fruits);

//delete
delete fruits[0]


//fill
let ages = [12, 34, 87, 19, 20]
ages.fill(0)

// console.log(ages);

//slice

let perfomance = [12, 34, 45, 78, 89]

let highest = perfomance.slice(2)
let newPerfomance = perfomance.slice(1, 3)
// console.log(newPerfomance);

//concat()

let list1 = ['gladwin', 'george', 'patrick', 'marion']
let list2 = [ 'martin', 'erick', 'monicah', 'frank']
let fullList = list1.concat(list2)

//reverse
let revList = fullList.reverse()

//arrange alphabetically - sort

revList.sort()

//sort array numbers

let testYears = [2030, 2020, 2015, 2019, 2010]
testYears.sort((a,b)=>b-a)
// console.log(testYears);

//filter

let studentAges = [12, 34, 23, 12, 14, 17, 23, 20, 24]
let aboveAge = studentAges.filter(a=> a > 18)

let modifiedData = studentAges.map(a=>{
    return a + 5
})


let list3 = ['gladwin', 'george', 'patrick', 'marion', 'george']
let listString = list3.join(",")
// console.log(listString);

// console.log(list3.indexOf('martin'));

// console.log(list3.includes('erick'));

let unitCode = [113, 456, 390]
let unit = unitCode.find((unit)=> unit > 300)
console.log(unit);