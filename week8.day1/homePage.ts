import { CRMPage } from "./welcomPage";

export class HomePage extends CRMPage {

  async clickLeads() {
    await this.lppage.click("//a[text()='Leads']")
  }


  async clickAccounts() {
    await this.lppage.click("//a[text()='Accounts']")
  }

  async clickOpportunity() {
    await this.lppage.click("//a[text()='Opportunity']")
  }

}