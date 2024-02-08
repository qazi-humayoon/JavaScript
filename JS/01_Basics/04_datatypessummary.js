// On the basis of how data is stored and accessed on the basis of that of that there are two types

// 1. Primitive
// All Primitives are call by value. In call by value, a copy of the actual data is passed to the function. Changes within the function don't affect the original data outside.e.g int, string etc
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId)

const bigNumber = 65461651n


// Call by Reference:
// In call by reference, a reference (memory address) to the actual data is passed to the function. Changes within the function directly affect the original data outside.
// 2. Reference (Non Primitive):

// Array, Objects, Functions

const heros = ["shaktiman","naagrj","doga"];

// objects
let myObj = {
    name:"hitesh",
    age:22,
}

//function
// const myfunction = function(){
//     console.log("Hello World");
// }

// console.log(typeof userEmail)

//*************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "humayoonniyaz"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "humayoon@google.com"

console.log(userOne.email);
console.log(userTwo.email);
