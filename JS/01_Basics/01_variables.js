const accountId = 144553 // if we use const we cant change the value of the variable declare
let accountEmail = "humayoon@google.com" //assign variable and can change value in the variables declared with the help of let
var accountPassword = "12345" //we should not use var but it is a way to do but we should avoid it due to issue in block scope and functinal scope

accountCity = "Jaipur" //without writing anthing before the variable we can declare any variable but this is not a good way to do things in js just remember this is also a way of declaring variables

let accountState; //thus its o/p is undefined as in js if we declare something and then dont declare it value is naturally is undefined

//accountId = 2 // not allowed as already declared in const

accountEmail = "hdf@.com"
accountPassword = "2121321"
accountCity = "benglurur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

