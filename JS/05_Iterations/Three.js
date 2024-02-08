//* for of

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);   
}
//* OR(String)
const greetings = "Hello world!"
for (const greet of greetings){
    // console.log(`Each char is ${greet}`);
}


//Maps
//* Same as objects in js but map doesnt consist of unqiue values
const map = new Map()
map.set('IN',"INDIA")
map.set('IN',"INDIA") // wont print as map means unique values
map.set('USA',"United States of America")
map.set('Fr',"France")

// console.log(map);

for(const [key,value] of map){
    // console.log(key,":-",value)
}

//* for loop on object
const myObject = {
    game1: 'NFA',
    game2: 'Spiderman'
}

for(const [key,value] of myObject){ //* for loop doesnt work on the objects
    console.log(key,':-',value)
}