import test from '@playwright/test'
import userCredential from '../../data/credentials.json'
import fs from 'fs'

//cred -->variable -->holds the array of data from credentials.json
console.log("directly reading json data")
console.log(userCredential)

for(const logindata of userCredential){
    console.log(logindata.Username)
        console.log(logindata.Password)

}
for (const ldata of userCredential) {

    test.only(`TestData with diff rows ${ldata.Username}`, async ({ page }) => {
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.fill("#username", ldata.Username) //always row1 demoCSR
        await page.fill("#password", ldata.Password)   //based on for loop for first iteration -->row1 crmsfa
        //second iteration -->row2 crmsfa 
        await page.click(".decorativeSubmit")

    })

}

//parse 
 const loginInfo=JSON.parse(fs.readFileSync("data/credentials.json",'utf-8'))
    console.log("From parsing format")
 console.log(loginInfo)