// Object can be declared by two way: Literal and Constructor

// Singleton: Whenever we make object using constructor singleton becomes an object and when we declare like literals then singleton is not formed
// Object.create //* Constructor Method which creates Singleton


// object literals
// It is stored in key and value pairs

//! Interview Question: Take a Symbol and add it to the object keys and print it
const mySym = Symbol("key1")
const Jsuser = {
    name: "Humayoon",
    "full name": "Humayoon Niyaz", // This cant be accessed with (.) only by [] it can be accessed
    // mySym: "mykey1", //! we added the symbol to it but it never it key at first. it always remains string. 
    [mySym]: "mykey1", //! This is the way to add symbol to object keys. Square Brackets []
    age: 18,
    location: "Kashmir",
    email: "humayoon@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]

}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]); // Behind the Seen the key email is automatically converted into string so we can also access it like this.
// console.log(Jsuser["full name"]); // accesssing key "full name"
// console.log(typeof Jsuser.mySym); //! This shows that its a string
// console.log(typeof Jsuser[mySym]) //! This is the way to print a Symbol after adding to the object keys

// Jsuser.email = "humayoon@chatgpt.com" //* Used to override values in the objects
// Object.freeze(Jsuser) // After freezing whatever changes we do doesnt reflect in the object data
// Jsuser.email = "humayoon@microsoft.com" // this change wont reflect in email
// console.log(Jsuser)

//******************************************* */

//Functions

Jsuser.greeting = function(){
    console.log("Hello Js User");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`); // Referencing the name in object here.
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());