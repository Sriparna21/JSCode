let score = 33

// If the source value is from backend and we need to define
//const {score} = requestAnimationFrame.body

console.log(typeof score)
console.log(typeof(score))


score = undefined

console.log(typeof score)

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber)

// null conversion to number goes to 0
// undefined goes to NaN
// Impure number like 33abc also goes to NaN

let booleanEx = 2

let convertBooleanEx = Boolean (booleanEx)

console.log(typeof convertBooleanEx)
console.log(convertBooleanEx)

// 0 value is false, rest is true
// empty string is false, rest is true