import test, { expect } from "playwright/test";
import { exitCode } from "process";

test('Learn AutoRetry Assertion',async({page})=>{
    
    await page.goto("https://leafground.com/input.xhtml")

    //enabaled
   await expect(page.getByPlaceholder("Babu Manickam")).toBeDisabled({timeout:10000})
   //hard assert

   await expect(page.getByPlaceholder("Disabled")).toBeDisabled()
})

test('soft assert',async({page})=>{
    //soft assert -> except.soft()
    await page.goto("https://leafground.com/input.xhtml")
    await expect.soft(page.getByPlaceholder("Babu Manickam")).toBeDisabled()
    await expect(page.getByPlaceholder("Disabled")).toBeDisabled()

})


test.only('Non retry Assert', async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")

   const title= await page.title()
   console.log(title)

   const actual="Leaftaps TestLeaf Automation Platform"
   expect.soft(title).toEqual(actual)

//   await page.locator("#username").fill("demosalesmanager")
await page.fill("#username","demosalesmanager")

await page.waitForTimeout(5000)

//Thread.sleep(4000) -> java

//await page.click(".click")

})

