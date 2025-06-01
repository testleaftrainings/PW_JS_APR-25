import test, { TestInfo } from "@playwright/test";
import { parse } from "csv-parse/sync";
import fs from 'fs'

let loginData: any


// tosetup any db connection
test.beforeAll(`Read Json data`, async () => {
    console.log("Running before all test")
    loginData = parse(fs.readFileSync("data/login.csv"), {
        columns: true //defines the first row as header
    })

})

test.beforeEach(`Login Functionality`, async ({ page }) => {
    console.log("Running before each test")
    // await page.goto("http://leaftaps.com/opentaps/control/main")
    // await page.fill("#username", loginData[0].username)
    // await page.fill("#password", loginData[0].password)
    // await page.click(".decorativeSubmit")
    // await page.click('text=CRM/SFA')
})

test.use({storageState:'data/login_LT.json'})
test(`Lead module`, async ({ page }) => {
    console.log("Running test")

    //appending the information about the test in report
    test.info().annotations.push({ type: "Smoke", description: "Testing Lead e2e" },
        { type: "Author", description: "Manjupriya" }
    )

     await page.goto(`http://leaftaps.com/crmsfa/control/main`)
    test.step(`Clicking on Leads`,async()=>{
    await page.click("//a[text()='Leads']")
    })

    test.step(`Clicking  on Create Lead`,async()=>{
    await page.click("//a[text()='Create Lead']")
    console.log(await page.title())
      })
})

test.use({storageState:'data/login_LT.json'})
test(`Accounts module`, async ({ page }) => {
    console.log("Running  test")
    test.info().annotations.push({ type: "Regression", description: `Testing Account e2e for ${test.info().title}` },
        { type: "Author", description: "Manjupriya" }
    )
   await page.goto(`http://leaftaps.com/crmsfa/control/main`)

    await page.click("//a[text()='Accounts']")
    await page.click("//a[text()='Create Account']")
    console.log(await page.title())
})

test.afterEach(`Fetch the test status`, async ({}, testinfo) => {
    console.log("Running after each test")
    console.log(testinfo.title)
    console.log(testinfo.status)
})

test.afterAll(`Upload the attachments`, async () => {
    console.log("Running after all test")

    console.log(`the reports and screenshots are uploaded in test management tool`)
})
