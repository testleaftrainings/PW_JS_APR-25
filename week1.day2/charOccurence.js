let browserName= 'Chrome Browser'

let targetCharacter ='r'

//iterate into each character, find targerCharacter===browsername[index]
//0 -->C
//r===C -->fails
//r===h -->fails
//r===r -->matched  -->count as 1
//---contiues -->count ++ -->count +1

let strLen=browserName.length
let counter=0;
//let reverstr=''
for(let i=0;i<strLen;i++){
  if(browserName.charAt(i)==targetCharacter){
     //counter=counter+1

     //counter +=strLen
     //counter= counter+strLe

     //reverstr+=browserName[i]
     
    counter++
  }

}
console.log(`The occurence of Character ${targetCharacter} is ${counter}`)
console.log(reverstr)
    //0 ==C -->0<14  ,13 ...

    //Vidya  --> 
    // 
    // name aydiV
    //start loop -->i=length-1 -->a 
    //loop (i=length-1 , i>0, i-- ){ print name[i] }
    
