function empdetails(name:string,id:number,mailId='dilip@testleaf.com',status?:boolean){

    //mailId='dilip@testleaf.com' -> default parameter -> override
    //status?:boolean -> optional paramter

return `the emp details are ${name} : ${id} : ${mailId} : ${status}`
}


console.log(empdetails("Dilip",37,'dilipkumar@testleaf.com',true))
console.log(empdetails("testleaf",119,'platform.testleaf.com'))

