// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// In js equality check and comparison are different things
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// E.G

// In JavaScript, the == operator performs type coercion when comparing values of different types. Type coercion is the process of converting the operands to the same type before making the comparison. In the expression console.log("2" == 2);, the string "2" is being compared with the number 2.

// During the comparison, JavaScript converts the string "2" to a number, so the expression becomes 2 == 2. Now, both operands are of the same type (number), and the comparison is true.
console.log("2" == 2); //This will show o/p as true

// === mean strict check and it check for datatype also
// If you want to perform a strict equality check without type coercion, you can use the === operator
console.log("2" === 2);