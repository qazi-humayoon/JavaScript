//*Reducer IN JavaScript

const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc,curval) {
//     console.log(`acc ${acc} and curval: ${curval}`);
//     return acc + curval
// },0) //* the value here is initial value and reducer give whole sum including this initial value also

//* Same concept using arrow functions

const myTotal = myNums.reduce( (acc,cur) => acc + cur,0)

// console.log(myTotal);

// Example

const shoppingCart = [
    {
        itemName: "Js course",
        price: 2999
    },
    {
        itemName: "Py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price,0)
console.log(priceToPay);