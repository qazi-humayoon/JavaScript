// const tinderUser = new Object() // A way of declaring the object no internal difference. Only diff is that this one is singleton object.

const tinderUser = {} // Also a way of declaring objects with no internal difference.Only diff is that this one is a non-singleton object.
tinderUser.id = "123abc"
tinderUser.name = "humayoon" // Basics
tinderUser.isLoggedIn = false

// console.log(tinderUser);


// Nested Objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "humayoon",
            lastname: "niyaz"
        }
    }
}

// console.log(regularUser)
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);

//Combining two objects together
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1, obj2} //* This creates same problem like in array. it will create object in object
// console.log(obj3) //* Here check it creates object in object

// const obj3 = Object.assign({},obj1,obj2) //* {} parameter which acts as target if there are more than two objects and it means all values will be stored in {} if not used {} then it gets stored in obj1
// console.log(obj3)

//* Same using spread operator used in array to combine two or more arrays but in array we use [] and here we uesd {}.

// const obj3 = {...obj1,...obj2}
// console.log(obj3)


//* This synatax is mostly used when values come from database. Suppose users come from database it comes in array of objects
const users = [
    {
    id: 1,
    email:"h@gmail.com"
    },
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id: 1,
        email:"h@gmail.com"
    },
]

users[1].email // Can access like this also

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //* IMP: The output value of datatype gives an array of keys which can be used at various places from work
// console.log(Object.values(tinderUser)); //* IMP: Similar but gives the values in array which can also be used in various ways

// console.log(Object.entries(tinderUser)); //* Create an array for key-value pairs


//todo when we loop through objects and try to find value and if value does not exist then there are chances of crashes. So for that we either can manually check or also ask

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // It return true yes i have this property
// console.log(tinderUser.hasOwnProperty('LoggedIn')); // Return false as this property doesn't exist in the object


// Destructuring also used in react
const course = {
    coursename: "Js in Hindi",
    price: "999",
    courseInstructor: "humayoon"
}

// console.log(course.courseInstructor); // can do also like this

const {courseInstructor: instructor} = course // destructuring courseInstructor to Instructor
console.log(instructor); // thus we destructured courseInstructor to instructor

//* API's Give in JSON format which contains Key-Value Pairs like:
// {
//     "name":"humayoon",
//     "coursename": "Js in hindi",
//     "price": "free"
// }

//* Sometimes we get in array format which contains many objects

// [
//     {},
//     {},
//     {}
// ]