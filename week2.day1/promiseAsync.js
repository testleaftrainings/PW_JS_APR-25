function login(userName){

console.log("Check the UserName ")
  return new Promise((resolve,reject) =>{
setTimeout(()=>{
if(userName === "Dilip"){
    resolve("Valid usename")
}else{
    reject("InValid username")
}
},5000)
   })
}

 async function validateUser(user,login){
const message= await login(user)
console.log(message)
}

validateUser("Dilip",login)