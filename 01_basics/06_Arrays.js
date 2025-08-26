const arr1 = [0, 2, 4, 6, 8]

const arr2 = new Array(1,2,4,6)


arr2.push(5)
// console.log(arr2[arr2.length -1])

arr2.unshift(124)
// console.log(arr2)

arr2.shift()

const arr3 = arr2.join()
// console.log(arr3)
// console.log(typeof arr3)

// console.log ("A", arr2)

const slicearr = arr2.slice(1,4)
// console.log("B",slicearr) // Does not include the last range
// console.log(arr2)

const splicearr = arr2.splice(1,4)
// console.log("C",splicearr) // Prints the last range
// console.log(arr2) // Original array gets manipulated


// Arrays in depth

const marvel = ["Thor", "Captain America", "Fantastic Four"]
const dc = ["Superman", 'Batman', 'Flash']

// marvel.push(dc) // The DC array gets pushed as a completely separate array instead of the elements getting added into the marvel array

//  console.log(marvel[3][0])

// [
//   'Thor',
//   'Captain America',
//   'Fantastic Four',
//   [ 'Superman', 'Batman', 'Flash' ]
// ]


const heros = marvel.concat(dc)
// console.log(heros)

// [
//   'Thor',
//   'Captain America',
//   'Fantastic Four',
//   'Superman',
//   'Batman',
//   'Flash'
// ]

// Spread

const spreadHeros = [...marvel, ...dc]
// console.log(spreadHeros)

// [
//   'Thor',
//   'Captain America',
//   'Fantastic Four',
//   'Superman',
//   'Batman',
//   'Flash'
// ]

const ar = [1,2,3, [4, 5, 6],7,[8,9,[10,11,12]]]

const real = ar.flat(Infinity)

// console.log(ar)
// console.log(real)


// [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 8, 9, [ 10, 11, 12 ] ] ]
// [
//    1,  2, 3, 4,  5,
//    6,  7, 8, 9, 10,
//   11, 12
// ]


console.log(Array.isArray("Srips"))
console.log(Array.from("Srips"))

// false
// [ 'S', 'r', 'i', 'p', 's' ]


let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1,s2,s3))