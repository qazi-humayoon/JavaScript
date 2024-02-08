function sayMyName() { // Basics of how functions work
    console.log("Q");
    console.log("A");
    console.log("Z");
    console.log("I");

}
// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(5,4) //* This works fine
// const result = addTwoNumbers(5,4)
// console.log("Result:", result) //* This shows undefined as we are not returning anything from the function, we are only returning.

//*In-Order to store in a variable we must store in a variable and then return that variable like:
function addTwoNumbers(number1,number2){
    // const result = number1 + number2
    // return result
    // console.log("Humayoon") // unreachable code as we already return function

    // or we can do like this
    return number1 + number2
}

const result = addTwoNumbers(5,4)
// console.log("Result:", result) // Shows correct output

//Another way of using function

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter the Username");
        return 
    }

    return `${username} Just Logged In`
}

// console.log(loginUserMessage("humayoon"))
// console.log(loginUserMessage()) // if we send nothing it will show undefined and the if block will execute


//Another case is that while shopping an user keeps on adding items and if the function has only one parameter declared then how to add all the other parameters. Thus comes the concept of Rest Operator(...)similar as spread operator just diff is place of use, which helps in solving this issue and returns an array arguments and we can run a loop and get the sum easily. 
function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000))

// How to handle object in a function
const user = {
    username: "humayoon",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user)

const myNewArray = [200,300,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,100,1000]));
