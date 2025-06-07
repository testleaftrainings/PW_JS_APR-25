export class EmployeeSignUp{
  public eName:string
  public eid:string
  protected readonly ephno:number  //becomes the constant data a-->dont allow you set any value 
  private eSalary:number 

   constructor(){
    this.eName="Ajay"
    this.eid="eid23"
    this.ephno=7864489000
    this.eSalary=4000000
   }
    printDetails(){
    console.log(`The emp details ${this.eName}:${this.eid}:${this.ephno} :${this.eSalary}`)
   }   

 //to permit to read the data -->get method
 public get  readData(){
    return this.eSalary
 }

 public set writeData(sal:number){
      this.eSalary=sal
 }
}

const emp=new EmployeeSignUp()
emp.printDetails()
let oldSalary=emp.readData
console.log(oldSalary)
emp.writeData=6000000
console.log(emp.readData)