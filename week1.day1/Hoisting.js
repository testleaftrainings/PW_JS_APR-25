var a=10
console.log(a) // output -10

//hoisting - bottom to top
var x
console.log(x) //undefined
x="Dilip"
console.log(x) //outpu- Dilip

//ReferenceError: pizza is not defined
var pizza //top
console.log(pizza)
 pizza="veg pizza" //bottom
console.log(pizza) //veg pizza

//let

console.log(name1)
let name1="JS"
console.log(name1)

//ReferenceError: Cannot access 'name1' before initialization
//TDZ -

//const

console.log(pi)
const pi=3.14