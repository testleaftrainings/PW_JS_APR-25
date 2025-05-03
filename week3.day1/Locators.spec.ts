import { only } from "node:test";
import test from "playwright/test";

test('Learn Basic Locators',async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")

    // id=username
    //locator()-> locator element in the dom
    //fill()-> type value inside the textbox 
    //click()-> click the button
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.click(`text='CRM/SFA'`)
    //`text='CRM/SFA'
    const titlepage = await page.title()
    console.log(titlepage)
    
})


test('Handle DropDown with Select Tag', async({page})=>{

    await page.goto("https://www.leafground.com/select.xhtml;")

    //select value from dropdown - index
//index value start from '0'
   // await page.selectOption(".ui-selectonemenu",{index:2})

   await page.selectOption(".ui-selectonemenu",{label:'Puppeteer'})
    await page.waitForTimeout(3000)
    await page.selectOption(".ui-selectonemenu",{index:2})

    await page.waitForTimeout(2000)

})


test('Handel DropDown without Select Tag',async({page})=>{

    await page.goto("https://www.leafground.com/select.xhtml;")
    await page.locator("[id='j_idt87:country_label']").click()
    await page.waitForTimeout(2000)
    await page.locator("[id='j_idt87:country_3']").click()
    await page.waitForTimeout(2000)

})





