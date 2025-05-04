let browserName=['chrome','webkit','firefox','msedge']

//array index value will start from '0'
//find the of length array
console.log(browserName.length)
//[0]-> chorme
//[1]-> webkit
//[2]-> firefox
//[3]-> msedge

//index -2 -> firefox
console.log(browserName[2])

//index -6 ->undefined
console.log(browserName[6])

//add some-more data
//what will value index[4] -> <empty item
browserName[5]=1
browserName[7]=true
browserName[10]='safari'
console.log(browserName)
console.log(browserName.length)
console.log(typeof browserName)

//add first value in the array -> unshift
browserName.unshift("Dilip")
console.log(browserName)

//add last value in the array -> push
browserName.push(2025)
console.log(browserName)

//remove first value  from array -> shift
browserName.shift()
console.log(browserName)

//remove last value from the array -> pop
browserName.pop()
console.log(browserName)

//spread syntax -> ...a2
let a1=[1,true,'playwright','js',8]
let a2=['Chrome','msedge',...a1]

console.log(a2.length)


//nested array or multiple
let data=['ab',false,170,['dilip','js']]
console.log(data.length)
console.log(data[3])

//index -0,1,2,3
//       1,2,3,4