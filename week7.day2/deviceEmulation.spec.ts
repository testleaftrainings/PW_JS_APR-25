import test, { devices } from "@playwright/test";


// test.use({
//      ...devices['iPhone 8']
// })
test(`Emulate the devices `,async({page})=>{
    await page.goto("http://www.facebook.com")
    await page.waitForTimeout(4000)
})