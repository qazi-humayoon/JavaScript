const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(function (item) {
//     console.log(item);
// })

//* OR

// coding.forEach( (item) => {
//     console.log(item);

// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach( (item,index,arr)=> {
//      console.log(item,index,arr);
// })


//! Imp: Mostly Data from databases comes in the form of arrays and every value is an object.
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) =>{
    console.log(item.languageName);

})