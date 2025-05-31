import test from '@playwright/test'

test(`test 1`,{tag:['@smoke','@regression']},async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","demoCSR")
await page.fill("#password","crmsfa")
await page.click(".decorativeSubmit")
})




test(`test 2`,{tag:'@regression'},async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","demoCSR")
await page.fill("#password","crmsfa")
await page.click(".decorativeSubmit")
})