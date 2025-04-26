//call back function -call one function in another function using parameter

function browserLaunch(callback){
    console.log("Launching Chrome Browser")
    callback()
}

function logindata(callback){
    console.log('enter the username')
    console.log('enter the password')
    callback()
}


function clickOnLogin(){
    console.log("Click on login button")

}

browserLaunch(()=>logindata(()=>clickOnLogin()))

browserLaunch(()=>clickOnLogin(()=> logindata()))