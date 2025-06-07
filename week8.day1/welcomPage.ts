import { LoginPage } from "./loginPage";

export class CRMPage extends LoginPage{

  async clickCRM(){
   await this.lppage.click("text=CRM/SFA")
  }

   async clicklogout(){

  }


}