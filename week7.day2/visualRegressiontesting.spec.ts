import test, { expect } from "@playwright/test";

test(`Visual regression testing`,async({page})=>{

     await page.goto("http://www.testleaf.com")
    // await expect(page).toHaveScreenshot()
   const ss= await page.screenshot()
    expect(ss).toMatchSnapshot()

})


test.only(`Visual regression testing-2`,async({page})=>{

     await page.goto("http://leaftaps.com/opentaps/control/login")
    // await expect(page).toHaveScreenshot()
      const ele= page.locator("#username")
      const ss= await ele.screenshot()
      expect(ss).toMatchSnapshot()

})