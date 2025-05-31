import test from '@playwright/test'



test.describe(`Groups`,async()=>{
 test.describe.configure({mode:"parallel",timeout:6000})
test(`Group1`,async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","demoCSR")
await page.fill("#password","crmsfa")
await page.click(".decorativeSubmit")
})

test(`Group2  `,async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","demoCSR")
await page.fill("#password","crmsfa")
await page.click(".decorativeSubmit")
})


test(`Group3  `,async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","demoCSR")
await page.fill("#password","crmsfa")
await page.click(".decorativeSubmit")
})

})