String:

// * its collection of Characters
// declare 2 types

// Type 1:
// String Literal
//let name="Dilip"
//val="Dilip"

// Type 2:
// String Object
let comName= new String("Testleaf")
let name1=new String("TestLeaf")

// Declaring a String:
// Single quotes '   '
// Double quotes "  "
// BackTicks  ` `

let n1="Dilip @ 123"
let n2='dilip'
let n3=dilip


// 1.length is a property-> find total number of characters
// index value -> start form 0
console.log(n1.length) //-> 5 ->0-4
//uses index to store the data
//length of string is 5
//0-->D, 1-->i,....10-->3

//fetching one character from the string
console.log(n1.charAt(4))