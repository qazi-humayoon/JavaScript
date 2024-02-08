//* if

// const temp = 41
// if (temp === 40){
//     console.log("less than 50")

// }  else{
//     console.log("temp is greater than 50")
// }
// console.log("Execute"); // this always executes as its not in if-else block

// <, > , <=, >=, ==, != , ===, !==

// const score = 200
// if (score > 100){
//     let power = "fly" //Remember this has block scope and cant be used outside the if block
//     console.log(`User Power: ${power}`);
// }

// console.log(`User Power: ${power}`);

// const balance = 1000
//* if (balance > 500) console.log("Test") //implicit if declaration

//*************************************************************** */

// Nested Conditions

// const balance = 1000

// if(balance < 500){
//     console.log("less than 500");
// } else if(balance < 750){
//     console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 900");
// } else{
//     console.log("less than 1200");
// }


const userLoggedIN = true
const debitCard = true
const loggedinFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIN && debitCard){
    console.log("allow to buy course");
}

if (loggedinFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}



