import test from "playwright/test";

test('Handle Frame with Frame Locator',async({page})=>{
    
    await page.goto("https://www.leafground.com/frame.xhtml")

const allFrame=page.frames()
console.log(allFrame.length)

//mainpage - frame =>1
//frame -> 4 
//total -> 5
//frame index value start with '0'  -> main page


const firstFrame=allFrame[1]
console.log(await firstFrame.locator("#Click").innerText())
 await firstFrame.locator("#Click").click()
 console.log(await firstFrame.locator("#Click").innerText())

 //nested frame  -> 0 -4
 const fourthFrame=allFrame[4]
 await fourthFrame.locator("#Click").click()


console.log(page.url())
})
//1-main page, 2-> f1,3-> f2,4->f3,5->f4
//index '0' - 0-mp,1-f1,2-f2,3-f3,4-f4