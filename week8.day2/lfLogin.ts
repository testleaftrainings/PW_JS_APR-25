import { chromium, Page } from "@playwright/test";

export class LFLoginFuntionality {

    //url
    //crends
    //login
    //userdefined variable
    pageInstance: Page  //no value empty variable

    constructor(page:Page) {
        this.pageInstance = page
    
    }

    //    async launchBrowser(){
    //      const browser=await chromium.launch({headless:false})
    //      const context=await browser.newContext()
    //      const page=await context.newPage()
    //      this.pageInstance=page
    //    }

    async loadUrl() {
        await this.pageInstance.goto("http://leaftaps.com/opentaps/control/main")
    }

    async enterCredentials() {
        await this.pageInstance.fill("#username", "demoCSR")
        await this.pageInstance.fill("#password", "crmsfa")
    }

    async clickLogin() {
        await this.pageInstance.click(".decorativeSubmit")
        await this.pageInstance.close()
    }

}

// async function login() {

//     const browser = await chromium.launch({ headless: false })
//     const context = await browser.newContext()
//     const pgins = await context.newPage()
//     const lp = new LFLoginFuntionality(pgins)
//     await lp.loadUrl()
//     await lp.enterCredentials()
//     await lp.clickLogin()
//}

// login()


