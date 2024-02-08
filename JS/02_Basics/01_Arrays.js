// array

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman","naagraj"]
const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1])

// Array Methods

// myArr.push(6)
// console.log(myArr);

// myArr.pop()

// myArr.unshift(9) // inserts at the starting but time consuming has to shift rest of the numbers to the right
// myArr.shift()   // removes the starting element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr) // converts array to string

// slice, splice

// Remember Slice start from no to no - 1 eg from (1,3) means i to 2 only is only included and slice doesnt modify the original Array. where as splice includes all the range i.e (1,3) and also modifies the original array from which the elements are spliced

console.log("A", myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2)




