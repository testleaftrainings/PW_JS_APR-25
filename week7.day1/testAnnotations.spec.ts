import test from '@playwright/test'

//will not execute
test.skip(`Test annotations with skip`,async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","demoCSR")
await page.fill("#password","crmsfa")
await page.click(".decorativeSubmit")
})


//will not execute
test.fixme(`Test annotations with fixme`,async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","demoCSR")
await page.fill("#password","crmsfa")
await page.click(".decorativeSubmit")
})


//will execute -->it expect the status of the test to fail /if passed it throws error as expected to fail but passed
test.fail(`Test annotations with fail`,async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","demoCSR")
await page.fill("#password","crmsfa")
await page.click(".decorativeSubmit")
})


//based on the condition double the timout condition using slow()
test(`Test annotations with slow`,async({page,browserName})=>{
test.slow() //general config to double the test timeout
test.slow(browserName=='webkit','the test will be slow in webkit')// to double timeout  120 sec specific to the condition
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","demoCSR",{timeout:5000})  //action timeout
await page.fill("#password","crmsfa")
await page.click(".decorativeSubmit")
})