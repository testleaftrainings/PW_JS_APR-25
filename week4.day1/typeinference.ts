let empName:string
empName="Dilip"

let empNameList:string[]=['Dilip','Ashok','charan']

function add(a:number,b:number):number{
    return a+b
    //a=10,b=5 => a+b => 15
}

//union and Intersection

//union type inference (OR condition -> pass multiple value)
let browser:string|null|number
browser="chrome"
browser=null
browser=45

console.log(browser)

let responseStatus:string|number
responseStatus="OK created"
//responseStatus=201
console.log(responseStatus)

//intersection(&)
let browserData:string&number
//browserData='dilip'&45

