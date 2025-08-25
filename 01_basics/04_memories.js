// Stack datatype example

let var1 = "pehlivalue"

let var2 = var1 // Initial assignment

var2 = "changed"

//  (index) │ Values       │
// ├─────────┼──────────────┤
// │ 0       │ 'pehlivalue' │
// │ 1       │ 'changed'    │

// console.table([var1,var2])

// Lessopn learnt: Stack memmory assignment does not change original value but the copy of value

let user1 = {
    email: "abc@google.com",
    upi: "user1@ybl"
}

let user2 = user1

//Intitial response

// │ (index) │ email            │ upi         │
// ├─────────┼──────────────────┼─────────────┤
// │ 0       │ 'abc@google.com' │ 'user1@ybl' │
// │ 1       │ 'abc@google.com' │ 'user1@ybl' │

user2.email = "yadayada.google.com"


// ┌─────────┬───────────────────────┐
// │ (index) │ Values                │
// ├─────────┼───────────────────────┤
// │ 0       │ 'yadayada.google.com' │
// │ 1       │ 'yadayada.google.com' │
// └─────────┴───────────────────────┘


console.table([user1.email,user2.email])