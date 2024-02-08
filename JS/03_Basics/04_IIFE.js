// Immediately Invoked Function Expression (IIFE)

// There causes a lot of pollution due to global scope variables so to remove that pollution we use IFFE : Function which gets executed Immediately

( function chai(){
    //Named IIFE
    console.log("DB CONNECTED");
})();

//Immediately invoked function is invoked but it doesnt know where to stop so we have to end that line first by using terminator ; then the below function will work

//* we can give arguments like this in IIFE
( (name) => {
    // UNNamed IIFE
    console.log(`DB CONNECTED TWO ${name}`)
})("humayoon"); //treat this as normal function call like chai()
