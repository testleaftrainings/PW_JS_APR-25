import test, { chromium, firefox, webkit } from "playwright/test";

test('Launch Browser' , async () => {

    //Launch the browser - run in chrome browser
    const browser= await chromium.launch({channel:'chrome'})
//open window or context
const context=await browser.newContext()
//open the tab or page
const page= await context.newPage()
//load the url 
await page.goto("http://leaftaps.com/opentaps/control/main")

await page.waitForTimeout(5000)
//execution
    //npx playwright test LaunchBrowser.spec.ts

    const context1 = await browser.newContext()    
    const page1= await context1.newPage()
    await page1.goto("https://platform.testleaf.com/#/")
    
   // await.page1.waitForTimeout(5000)




} )