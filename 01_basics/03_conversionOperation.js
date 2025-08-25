let score = 33

// If the source value is from backend and we need to define
//const {score} = requestAnimationFrame.body

// console.log(typeof score)
// console.log(typeof(score))


score = undefined

// console.log(typeof score)

let valueInNumber = Number(score)

// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// null conversion to number goes to 0
// undefined goes to NaN
// Impure number like 33abc also goes to NaN

let booleanEx = 2

let convertBooleanEx = Boolean (booleanEx)

// console.log(typeof convertBooleanEx)
// console.log(convertBooleanEx)

// 0 value is false, rest is true
// empty string is false, rest is true


// Operations

let value = 4
let negValue = -value

// console.log(negValue)

// console.log (1 + "2") // 12
// console.log ("1" + 2 + 2) // 122
// console.log (1 + 4 + "2") // 52


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// x:4, y:3 if y is const and x++
// x:4, y:3 if y in var and x++
// x:4, y:4 if y is var and ++x
// x:4, y:4 if y is const and ++x


console.log ("1" >= 0)