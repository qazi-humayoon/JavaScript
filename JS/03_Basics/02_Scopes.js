//* Remember Var has global scope even when used inside the function that is why we don't usually use it.

let a = 300
if(true) {
    
let a = 10
const b = 20
// var c = 30
// console.log("INNER",a)
}

// console.log(a);
// console.log(b);
// console.log(c);

// Nested Scope

// In Nested Functions the child functions can access the parent variables and where as the parent function can't acces child variables.
function one(){
    const username = "humayoon"
    function two(){
        const website = "youtube"
        console.log(username);
    }
//   console.log(website)//This shows error as website is in two so cantuse
    // two()
}
// one()

if (true) {
    const username = "humayoon"
    if(username === "humayoon") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ************** Interesting *************************

addone(5)  // we can call function like this here also in JS
function addone(num){
    return num + 1
}


addtwo() // It throws error and cant be accessed because we are calling it before the variable which we had declared and assigned it to
const addtwo = function(num){ // variables are powerful in JS they can hold function like this also and its another method of declaration of function
    return num + 2            
}





