import { console } from "inspector";
import test from "playwright/test";

test('Learn Frame with frame object',async({page})=>{

    await page.goto("https://www.leafground.com/frame.xhtml")

    //Frame Object
const frame1= page.frame({url:"https://www.leafground.com/default.xhtml"})
await frame1?.locator("#Click").click();
})

test.only('Learn Nested Frame with Frame Object',async({page})=>{
await page.goto("https://www.leafground.com/frame.xhtml")
const innerFrame= page.frame({url:"https://www.leafground.com/framebutton.xhtml"})
await innerFrame?.locator("#Click").click()
// const childFrame=innerFrame?.childFrames()
// console.log("Total Number of Child Frame : "+ childFrame?.length) //1 -0
// await childFrame?.at(0)?.locator("#Click").click()
// await page.waitForTimeout(4000)

})

