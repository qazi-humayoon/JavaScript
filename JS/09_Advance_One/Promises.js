
//? In JavaScript, a Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. 

//Creating the Promise
const promiseOne = new Promise(function (resolve,reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function (){
        console.log('Async task is completed');
        resolve() //* this will connect resolve with .then and then but logs will gets printed. if not used then only async string gets printed 
    },1000) 
})

// Consuming the Promise
// .then has connection with resolve
promiseOne.then(function(){
    console.log("Promise consumed");

})


//! Doing same upar wala thing but without storing it in an variable promiseOne
new Promise(function(resolve, reject){
    setTimeout(function (){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function (){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function (resolve,reject){
    setTimeout(function (){
        resolve({username: "Chai",email:"chai@example.com"}) //* Giving parameters which will be send

    },1000)

})
//* WE easily can get here the parameters which are given in the resolve we will easily get it here. 
promiseThree.then(function (user){
    console.log(user); // printing the users as parameters which is in resolve

})

//* checking for example if there is any error or not and we have to inform the other part if it consists of any error or not
const promiseFour = new Promise(function (resolve,reject){
    setTimeout(function (){
        let error = false //* if true else will executed and catch will be applied and if false then gives data from resolve parameter
        if (!error){
            resolve({username:"humayoon",password:"123"})
        } else{
            reject('ERROR: Something went wrong')
        }
    },1000)

})

//! This process here is called chaining here we take parameters from resolve and then take parameter and  from inside that parameter using (then) and if there is any error we (catch) that also
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error){
    console.log(error); // it will show something went wrong as error was true
}).finally( () =>{ //* This block always works and gets printed just like in exceptional handling
    console.log("the promise is either resolved or rejected");

})

//______________-----------____________________--------_______________-------______________
//! WE can either use upar wala to handle promises using then catch and finall or nechai wala using try and catch
// ______________-----------____________________--------_______________-------______________


const promiseFive = new Promise(function (resolve,reject){
    setTimeout(function (){
        let error = true //* if true else will executed and catch will be applied and if false then gives data from resolve parameter
        if (!error){
            resolve({username:"javascript",password:"123"})
        }
        else{
            reject('ERROR: JS went Wrong')
        }
    },1000)
})

//! async waits if the work is done and then moves forward or if there is any error it directly gives error there and doesnt move forward and we dont use catch but we gracefully handle errors here using (try) and (catch)
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        
        console.log(error); // gracefully handling the error
    }
        
}
consumePromiseFive()


// ____________________________________________________________________

//* Example of what we studied and behind the scene where all these things are being used
//! Note: Chat gpt things to understand how its working and other things in a better way

//! Note: You don't explicitly need to create a Promise because fetch already returns a Promise

// async function getAllUsers(){   
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E ",error);
        
//     }
// }

// getAllUsers()


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//* doing same thing with the help of then and catch


//! Note: You don't explicitly need to create a Promise because fetch already returns a Promise

// fetch always give promise whether it is resolved successfull or rejected
fetch("https://api.github.com/users/qazi-humayoon")
.then ((response) =>{
    return response.json()
})
.then((data)=>{ // this then takes response from upar wala then
    console.log(data);
})
.catch((error) => {
    console.log(error);
})