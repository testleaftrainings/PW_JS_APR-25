import { FakerData } from "./faker";
import { EmployeeSignUp } from "./learAccssMod";

export class HR extends EmployeeSignUp{

   empUpdate(){
     // this.ephno=8988900033 ephno set as readonly , the value cannot be changed
       console.log(this.ephno)
       console.log(FakerData.getFirstname())
   }  
}



let emp=new HR()
emp.empUpdate()
