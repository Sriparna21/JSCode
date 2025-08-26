const name = "Srips"

console.log (`Hello my name is ${name}`)

const gameName = new String ('Sriparna')

// console.log (gameName[2])
// console.log (gameName.__proto__)
// console.log (gameName.length)
// console.log (gameName.toUpperCase())
// console.log (gameName.charAt(6))
// console.log (gameName.indexOf('a'))


// Dates

let myDate = new Date()
// console.log('The date today is ' + myDate.toDateString())

let myCreatedDate = new Date (2023, 12, 23)
// console.log('The date today is ' + myCreatedDate.toDateString())

let tsNow = Date.now()
// console.log(tsNow)

console.log(myCreatedDate.toLocaleDateString ('default',{
    weekday: "long"
}

))

