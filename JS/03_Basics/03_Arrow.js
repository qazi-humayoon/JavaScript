const user = {
    username: "humayoon",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); // this is used to refer here to current context 
        console.log(this);// it talks about current values of object
    }
}

// user.welcomeMessage()
// user.username = "sam" // we can change values of current context/values of variable
// user.welcomeMessage()

// console.log(this);// this will show empty object as there is nothing in global

//? Remember: In browser the global object is always the window object

// function chai(){
//     let username = "humayoon"
//     console.log(this.username); // cant be used like this in functions
// }
// chai()

// const chai = function(){  // same as upar wala
//     let username = "humayoon"
//     console.log(this.username);
// }
// chai()

//* Arrow Function
const chai = () => {
    let username = "humayoon"
    // console.log(this.username);
    console.log(this);
}
// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 //* implicit return wihout paranthesis

// or 
// console.log(addTwo(3 , 4))

// const addTwo = (num1,num2)  => ({username:"humayoon"})
// console.log(addTwo(3,4));
