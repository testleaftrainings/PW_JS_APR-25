// class Employee {
//     empName: string  //global class property and it needs to be addressed with refernce of the class
//     empId: string     //when called inside the class uses this.propertyName
//     //current class will be represted as this -Keyword
//     printDetails(name:string,id:string) {  //block of code 
//         this.empName=name
//         this.empId=id
//       console.log(`Employee details are ${this.empName} : ${this.empId}`)
//     }

//    empDetails(emId:string){   //emId -->local variable available only to this block
//        console.log("the id of the employee "+emId)
//    }
// }

// const emp=new Employee()
// emp.printDetails("Lekshmi","emp123")
// emp.printDetails("Rajkumar","emp456")
// emp.empDetails("emp23")


class Login{

//page instance
page:string

constructor(lppage:string,applnName:string){    //parametized constructor
   //this.page="pg4568993308990" 
   this.page=lppage
   console.log("Using the page reference from constructor:  " +this.page)
   this.loadUrl(applnName)
}

loadUrl(applName:string):string{
    console.log(`page is loaded with ${applName} url:  ${this.page}`)
    return "app is loaded"
} 
}

const lf=new Login("pg4689009276688","Leaftaps")  //parametrized constructor


const sf=new Login("pg7800829020","Salesforce")  //parametrized constructor




//constructor -special method-->executes before all normal method