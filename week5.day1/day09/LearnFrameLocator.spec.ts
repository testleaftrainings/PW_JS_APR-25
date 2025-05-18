import test from "playwright/test";

test('Learn Frame with Frame Locators',async({page})=>{

    await page.goto("https://www.leafground.com/frame.xhtml")
    await page.frameLocator("(//iframe)[1]").locator("#Click").click()

    await page.waitForTimeout(3000)

    //nested frame -> firstFrame().secondFrame().locator().click()
//switch frame one by one
    await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").click()

})