import test, { chromium } from "@playwright/test";

test(`playwright default browserLaunch`,async()=>{
    const browser=await chromium.launch({headless:false})
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("http://www.google.com")
    await page.waitForTimeout(3000)
})

test.only(`playwright with normal browsermode`,async()=>{   
    const context=await chromium.launchPersistentContext('./userdatadir',{headless:false,
        httpCredentials:{
            username:"admin",
            password:"testleaf"
        }
    })
   //const page=await context.newPage()
    const allpages=context.pages()
    await allpages[0].goto(`https://leafground.com/auth.xhtml`)    
    await allpages[0].click("//span[text()='Basic Auth']")
    await allpages[0].waitForTimeout(5000)
})
