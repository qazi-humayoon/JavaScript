//* for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is the best num");
    }
    // console.log(element);
    
}

// console.log(element); // cant access it as element in in for loop which has block scope

// Nested For Loop

for (let i = 0; i <= 10; i++) {
    // console.log(`Outerloop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value: ${j}`);
        // console.log(i + '*' + j + ' = '  + i*j);
    } 
}


// For Loop on Arrays
let myArray = ["flash","Superman","Batman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);   
}

//* break and continue

// break
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log("Detected 5");
        break
    }
    // console.log(`Value of i is ${index}`);    
}

//continue
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log("Detected 5");
        continue
    }
    // console.log(`Value of i is ${index}`);    
}



