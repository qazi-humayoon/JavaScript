const user = {
    username: "humayoon",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function (){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`); //* have to use this to let it know we are talking about current context username: 'humayoon'
        console.log(this); //this give all the current context i.e fun video
    }
}

console.log(user.username);
console.log(user.getUserDetails());

//! Constructor

// const promiseOne = new Promise() // new keyword is constructor func which allows to create multiple instances with single object literal
// const date = new Date()


function User(username,loginCount,isLoggedIN){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIN = isLoggedIN
    
    this.greeting = function (){
        console.log(`welcome ${this.username}`);
    }

    // return this // implicit defined not necessary to write
}

//? Step 1: Whenever a new keyword is used at first an empty object is created called instance

//? Step 2: once object is created the constructor is called with the help of new keyword and then it packs all the arguments in it and gives us

//? Step 3: All the arguments are injected in the This keyword
//? Step 4: At last we get a new function


//! if new keyword is removed userOne is overrided by userTWo
const userOne = new User("Humayoon",12,true) // we dont use new keyword here thus overriding the userOne "humayoon" to userTwo- "Qazi" even without calling or printing the userTwo
const userTwo = new User("Qazi",12,true) // thus to overcome this issue we use new keyword  
console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo);