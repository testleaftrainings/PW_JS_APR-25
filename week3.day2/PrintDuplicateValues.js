let num=[2,5,1,7,4,5,8,7,7,5]
// for loop and if condition 

// for(let index=0;index<num.length;index++){

//     for(let i=index+1;i<num.length;i++){

//         if(num[index]===num[i]){
//             console.log(`Duplicate number is : ${num[i]}`)
//         }
//     }
// }

//sort the array
let value =num.sort()
console.log(value)

for(let index=0;index<num.length;index++){
    if(num[index]===num[index+1]){
        //num[0]===num[0+1] => 1===2
        //num[1]===num[1+1] => 2===4
console.log(`duplicate value is : ${num[index+1]}`)
    }
}
//1,2,4,5,5,5,7,7,7,8

//= ->assign let a=10
//== -> check only value not datatype
//=== -> check value and datatype

