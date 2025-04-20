
let companyName="Testleaf"

//fetch a single character from the string

console.log(companyName.charAt(3))  //fetch based on the index & the index always starts with 0

console.log(companyName[2])

//to know the index of a character
//position of the character
console.log(companyName.indexOf('a'))
console.log(companyName.indexOf('e'))  //first occurence index

console.log(companyName.lastIndexOf('r'))  

let word ='Bleech'
console.log(word.indexOf('e'))  //first occurence index

console.log(word.lastIndexOf('e')) 


console.log("Learning Sting method's with" +companyName +" for understanding")

let price=`Rs1300`
//${} -template literal
console.log(`The price of the product's is ${price}`)

let sentence="Learning string in Js"
console.log(sentence.split(' ').reverse().join(' '))
//break the works
// Js in String Learning

//split -->break the string based on the delimiter  -->contverted 
//a 
//Le,rining string in Js
//' '
let words=sentence.split(' ')
console.log(words.length)
//single line of code 
let tNmae="vidya"
console.log(tNmae.includes('d'))

//substring
//slice
//replace, replaceAll
//includes
