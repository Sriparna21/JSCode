const user = {
    username : "Sriparna",
    price : 999,


    welcomeMessage : function () {
        console.log(`${this.username}, welcome to the website`)
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()


// console.log(this);

// function chai () {
//     let username : "Sriparna"
//     console.log(this.username)
// }

// chai ()


// const chai = function () {
//     let username : "Sriparna"
//     console.log(this.username)
// }

// chai ()


// const chai =  () => {
//     let username = "Sriparna"
//     console.log(this)
// }

// chai ()

// Explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => (num1 + num2) // Implicit return
     
const addTwo = (num1, num2) => ({username: "Srips"})


console.log(addTwo(2, 3))