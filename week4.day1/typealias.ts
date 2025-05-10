// type alias -> Creating custom type of data
//let value:string

//syntax: type typeName=definition

type username=string
let emp:username="Dilip"



//union
type browserName="Chrome"|"Edge"|"WebKit"

function LaunchBrowser(browservalue:browserName){

    if(browservalue === "Chrome"){
console.log("Launch chrome browser")
    }else if(browservalue==="Edge"){
        console.log("Launch edge browser")
    }else{
        console.log("no Browser is Launched")
    }
}

LaunchBrowser("Chrome")

//intersection
type Admin={
    username:string
    userid:number
}

type employee={
    name:string
    status?:boolean //optional data -> variableName?
}

type db=Admin&employee

let value:db={
username:"dilip",
userid:37,
name:"testlead"

}

console.log(value)

//print only userid
console.log(value.userid)