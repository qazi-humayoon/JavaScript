let score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3)); //focus on before decimal more

const hundrends = 1000000
// console.log(hundrends.toLocaleString('en-IN')); //converts into indian way of currency

//++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));

// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.3));
// console.log(Math.min(4,3,5,6,7,8));
// console.log(Math.max(4,3,5,6,7,8));

console.log(Math.random());//  0-1
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.random() * (max - min + 1));
console.log(Math.floor(Math.random() * (max - min + 1)) + min);