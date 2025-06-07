import { chromium, Page } from "@playwright/test";

export class LoginPage{

   readonly lppage:Page   //page refernce from playwright  -initally no value is assigned
   
  constructor(lpage:Page){
    this.lppage=lpage   //initally no value assigned
 }

  async loadUrl(url:string){
     await this.lppage.goto(url)
  }

  async enterCredentials(userName:string,pwd:string){
    await this.lppage.fill("#username",userName)
    await this.lppage.fill("#password",pwd)
  }

 async clickLogin(){
    await this.lppage.click(".decorativeSubmit")
 }

 async verifyTitle():Promise<string>{
   return await this.lppage.title()
 }

 async closeBrowser(){
    await this.lppage.close()
 }

}

//independent function
async function doLogin(){
    const browser=await chromium.launch({headless:false})
    const context=await browser.newContext()
    const page=await context.newPage()
    //create a object for the class to call the methods
    const login=new LoginPage(page)
    await login.loadUrl("http://leaftaps.com/opentaps/control/main")
    await login.enterCredentials("demoCSR","crmsfa")
    await login.clickLogin()
    console.log(await login.verifyTitle())
    await login.closeBrowser()
}

//doLogin()


