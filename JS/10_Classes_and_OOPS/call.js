function SetUsername(username){
    this.username = username
    console.log("called")
}


function createUser(username,emai,password){
    SetUsername.call(username)

    this.email = this.email
    this.password = password
}

const chai = new createUser("chai","chai@fb.com",'123')
console.log(chai);