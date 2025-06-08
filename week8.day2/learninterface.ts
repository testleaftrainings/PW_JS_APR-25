export interface EleAction{

   typeAndEnter(locator:string):void 

}
//cannot create  obj for the interface
export interface Browser{
    browserimpl():void
}

export interface PgAction extends Browser{
    handleWindow():string
}

export class webElement implements EleAction,PgAction{
    browserimpl(): void {
       console.log("launch browser")
    }
    handleWindow(): string {
       console.log("handleWindow")
       return "windowName"
    }
    typeAndEnter(locator: string): void {
      console.log("login locator")
    }
    
}

const ob=new webElement()
ob.typeAndEnter("locator")
ob.browserimpl()
ob.handleWindow()

