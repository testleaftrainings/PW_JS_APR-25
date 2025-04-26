
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
function Validatauser(user,login){

    login(user).then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    });

    console.log("click on button")
}


Validatauser("Vidya",login)