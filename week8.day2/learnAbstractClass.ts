import { PgAction } from "./learninterface"

export abstract class ElementWrapper{

     //0 to 100%
     //not allowed to create object
 
     typeAndTab(loctor:string){
        console.log("type in the dat and tab it")
     }

     abstract takeScreenshot():void  

}

export class Login extends ElementWrapper implements PgAction{
    handleWindow(): string {
     return "Window name"
    }
    browserimpl(): void {
       console.log("launched chromeBrowser")
    }
    takeScreenshot(): void {
      console.log("screenshot for each test")
    }
    
}

const login=new Login()
login.typeAndTab("Userfield")
login.takeScreenshot()
login.handleWindow()