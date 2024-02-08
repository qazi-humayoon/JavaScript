const name = "humayoon"
const repoCount = 50
console.log(name + repoCount + " Value");
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('humayoonqazi-hc-com')

console.log(gameName[0]); //accessing key-value pair of gameName
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8,-5) //We can use -ive no's also in slice
console.log(anotherString);

const newStringOne = "   qazihumayoon    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https;//humayoo.com/humayoon%20google.com"
console.log(url.replace('%20','-'));

console.log(url.includes('sundar'))


console.log(gameName.split('-'));