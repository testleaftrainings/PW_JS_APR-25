//var -it be  redeclare and reassign - function-scoped or globally

var comName="Testleaf"
//console.log(comName)

var comName="Test"
console.log(comName)

var dosa1="Dosa"
console.log(dosa1)
//let- we cannot re-declaration but we can re-assign the value
let dosa=1
 dosa ="Vada"
console.log(dosa) // output -2
//SyntaxError: Identifier 'dosa' has already been declared

//const - final value - we cannot re- decalration and we cannot re-assign
const pi=3.14
//pi=3.00
console.log(pi)

//var vs let
{
    //blocked - scoped
}