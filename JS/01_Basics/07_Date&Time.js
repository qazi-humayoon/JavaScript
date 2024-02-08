//* Date and Time

// Other mathods also available for date
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // Always Object //Asked in Interviews

// let myCreatedDate = new Date(2024,0,28)
let myCreatedDate = new Date("01-28-2024")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// It gives in MIlliSeconds which can be used to compare date and time and which is also used in comparison in my wewbsites or creating quizes
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

        // Converting from milliSeconds to Seconds
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: ""
})

