import test from '@playwright/test'
import { parse } from 'csv-parse/sync'
import fs from 'fs'


const loginData = parse(fs.readFileSync("data/login.csv"), {
    columns: true //defines the first row as header
})

console.log(loginData)

//object-->array of  data  -->data[0]

for (let data of loginData) {
    test(`Read data from CSV row ${data.username}`, async ({ page }) => {
        const { username, password } = loginData
        await page.goto("http://leaftaps.com/opentaps/control/main")
        if (username == "demoCSR") {
            await page.fill("#username", username)
            await page.fill("#password", password)
            await page.click(".decorativeSubmit")
        }
    })
}

test(`TestData`, async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username", loginData[0].username)
    await page.fill("#password", loginData[0].password)
    await page.click(".decorativeSubmit")

})




for (const ldata of loginData) {

    test.only(`TestData with diff rows ${ldata.username}`, async ({ page }) => {
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.fill("#username", loginData[0].username) //always row1 demoCSR
        await page.fill("#password", ldata.password)   //based on for loop for first iteration -->row1 crmsfa
        //second iteration -->row2 crmsfa 
        await page.click(".decorativeSubmit")


    })

}