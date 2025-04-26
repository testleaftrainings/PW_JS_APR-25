function add(a,b,sub){
    console.log(a+b)
   sub(10,8) // call back function -call the sub()
}

function sub(a,b){
    console.log(a-b)
}

add(7,9,sub)
