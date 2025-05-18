import test from "playwright/test";

test('Handling Window in amazon application',async({context,page})=>{

await page.goto("https://www.amazon.in/")
const searchBox=  page.locator("#twotabsearchtextbox")
await searchBox.fill("mobiles")
await page.locator("#nav-search-submit-button").click()

await page.waitForTimeout(3000)
//create promise -> Event listener
const newpromise= context.waitForEvent('page')
//click on data
page.locator("//span[contains(text(),'Samsung')]").first().click()
   //resolve the promise
  const childTab= await newpromise 
  await page.waitForTimeout(3000)

  console.log(await childTab.title())
  await page.waitForTimeout(5000)
const price=await childTab.locator(".a-price-whole").first().innerText()
console.log(price)
//child window 
await childTab.close()
//focus parent window
await page.bringToFront()
await page.waitForTimeout(3000)
await searchBox.clear()
await page.waitForTimeout(3000)

})



test.only('Multiple window',async({context,page})=>{
await page.goto("https://leafground.com/window.xhtml")
const [multipleWindow]=await Promise.all([
    context.waitForEvent('page'),
page.getByText("Open Multiple",{exact:true}).click()
])
//[w1,w2,w3,w4....]
//length of window

await page.waitForTimeout(5000)
const allpages=multipleWindow.context().pages()
const value=allpages.length
console.log(value)

await page.waitForTimeout(4000)
//window -p
//table -c,dashboard-c

let tab:any

for(let i=0;i<allpages.length;i++){
await page.waitForTimeout(5000)
    const title= await allpages[i].title()
    console.log(title)
    if(title==='Dashboard'){
        //reslove the promise
tab=allpages[i]
    }
}
    await tab.locator("#email").fill("dilip@testleaf.com")
    await page.waitForTimeout(7000)

})