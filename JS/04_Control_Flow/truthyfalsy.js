const userEmail = "humay@.ai"

if (userEmail){  // here we are not comparing like == it automatically checks if there is something in userEmail or not if there is then if block is executed
    console.log("got user email");
} else {
    console.log("don't have user email");
}

// falsy values
// false,0,-0,BigIn 0n,"",  null,undefined,NaN, everyone except these are truthy values


//truthy examples
"0",'false',' ',[],{},function (){}

// To check for Array truthy
const user = []
if (user.length === 0){
    console.log("array is empty");
}

// To check for object truthy

const emptyobj = {}
if (Object.keys(emptyobj).length === 0) {
    console.log("Object is empty");
    
}

//* Nullish Coalescing Operator (??): null, undefined
// Used to handle null or undefined which can cause error in database
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 16
console.log(val1);


//* Teriniary Operator
// condition ? true : false
const iceTreaPrice = 100
iceTreaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80");