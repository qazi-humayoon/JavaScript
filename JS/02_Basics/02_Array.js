const marvel_heros = ["Iron-Man","Spider-Man","Thor"]
const dc_heros = ["Batman","Flash","Superman"]

// marvel_heros.push(dc_heros) //If we Push like this it will send the dc_heros in marvel_heros as a single element rather than creating it as different

// console.log(marvel_heros[3]); //This gives the 3 index whole dc_heros array as one

// To access those elements inside the dc_heros, we use:
// console.log(marvel_heros[3][0]);

//* This way we can do to get the two arrays combined easily and concat return a new Array without modifying existing arrays.
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

//* We can do also this way using Spread Operator to merge to arrays. Here benefit is that we can add multiple arrays just use (... and Array)
// const all_new_Heros = [...marvel_heros,...dc_heros]
// console.log(all_new_Heros)

//* Another method is if we have have array in array we use flat which will flat the array recursively and set infinity rather than flat value.

// const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_Array = another_Array.flat(Infinity)
// console.log(real_another_Array);

// Used in mostly Web Scrapping.

//* To check if it is an array 
console.log(Array.isArray("Humayoon"));

//* To convert it into an Array
console.log(Array.from("Humayoon"))

console.log(Array.from({name:"Humayoon"})); //Interesting, if it cant convert it returnse empty array.

let score1 = 100
let score2 = 200
let score3 = 300

// Converting a set of integers into an Array.
// of can also be used instead of from. 
console.log(Array.of(score1,score2,score3));


