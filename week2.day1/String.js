
let value="TestLeaf"
//substring- print the value based on the index -starting index and ending index
let subValue=value.substring(2,7)
//ending index will have n-1
console.log(subValue)

//slice() -> same as substring  but it will accept -ve
//(n,n-1)
let myName="dilip"
let nameSlice=myName.slice(1,3)
console.log(nameSlice)

//(n-1,n)
let data="playwright"
let d=data.slice(-7,-2)
console.log(d)

//repalce - old value to new value
let stringdata="Welcome to Testleat PW batch 2025"
let v=stringdata.replace("PW","Playwright")
console.log(v)

let company="Testeeeeeeeeee"
console.log(company.replace("e","@"))

//replaceAll -
let value1="testleaf25@gmail.com"
console.log(value1.replaceAll(/[^a-z 0-9]/g,"a"))
//testleaf25agmailacom
//^-retain the value

//includes
let tool="playwright"
console.log(tool.includes("Play"))

//concat
let area="Chennai"
let ai=area.concat("Porur").concat("Porur Main road","Hi")
console.log(ai)

console.log("Chennai"+"porur")

//repeat
let bin="dilip"
console.log(bin.repeat(3))

//input value="Learn Functions and String"
//output = String 
//and
//Functions
//Learn

//split() and use resever for loop
//print in resever order