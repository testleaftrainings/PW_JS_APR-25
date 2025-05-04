import test from "playwright/test";

test('playwright Locators',async({page})=>{
    
    await page.goto("https://parabank.parasoft.com/parabank/index.htm")

    //getByText
    await page.getByText("Admin Page").click()

    await page.waitForTimeout(3000)

    await page.getByRole('link',{name:'Forgot login info?'}).click()

    await page.waitForTimeout(3000)

//getByAltText
await page.getByAltText("ParaBank").click()

const url1= await page.url()
console.log(url1)
await page.waitForTimeout(3000)


    //multiple match -first(),last(),nth()
    await page.getByText("Locations").first().click()

    await page.getByPlaceholder("Search").click()

})

test('GetByLabel',async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.getByLabel("Username").fill("DemoSalesManager")

    await page.waitForTimeout(3000)
})