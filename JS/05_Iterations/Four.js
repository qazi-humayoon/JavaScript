const myObject = {
    js:"javascript",
    cpp:"c++",
    rv:"ruby",
    swift:"Swift by apple"
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

//* On Arrays

const programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
    // console.log(programming[key]);  
}


//* for-in on maps: a map is not iterable 
const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"United States of America")
map.set('Fr',"France")

for (const key in map) {
    console.log(key);
}
