import test from "playwright/test";

test('Common code -Launch Browser',async ({page})=>{

   await page.goto("https://www.gmail.com")

   //print title page 
   console.log(await page.title())

})