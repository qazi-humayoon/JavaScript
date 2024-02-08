const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNumers = myNums.map( (num) => num + 10)
// console.log(newNumers);

//OR Doing same thing with scope just like upar wala
const newNumers = myNums.map( (num) => {
    num += 10
    return num
})
// console.log(newNumers);

const newNums = myNums //Channing all together
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => num >= 40)

console.log(newNums);