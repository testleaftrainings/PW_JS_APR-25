import test, { devices } from "@playwright/test";




test.use({
    geolocation:{    
        latitude:48.855334,
        longitude:0.671496
         },
         permissions:['geolocation','notifications'],
       
})
test(`geoLcoation`,async({page})=>{
 await page.goto("https://www.google.com/maps")
 await page.click("#sVuEFc")
 await page.waitForTimeout(4000)
})