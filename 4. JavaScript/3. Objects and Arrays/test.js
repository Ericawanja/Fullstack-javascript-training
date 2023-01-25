let students = [ 'erica', 'wanja', 'monica', 'martin']
let trainnees = students

students.push('eric')
trainnees.unshift('joseph')
trainnees.pop()


const marks = [401, 1,4,89, 389]

let sorted = marks.sort((a,b)=> b-a)
// console.log(sorted, marks);

let fail = marks.filter(m=>m >100)
// console.log(fail);


let units = [2,3,5,[3,4,5,[23,45,98]]]

let first = marks.findIndex(m=>m>400)

console.log(first);

