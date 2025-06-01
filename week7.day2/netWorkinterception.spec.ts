import test from "@playwright/test";

test(`Request and responses`,async({page})=>{

    page.on('request',request=>{
        console.log(`<<<Request>>>>--> ${request.url()}>>>> ${request.postData()}`)
    })

    page.on('response',response=>{
        console.log(`<<<Response>>>>--> ${response.status()}>>>> ${response.statusText()}`)
    })

    await page.goto("http://login.salesforce.com")
    await page.fill("#username","vidyar@testleaf.com")
    await page.fill("#password","Sales@123")
    await page.click("#Login")

})




test(`Abort few api's`,async({page})=>{

    await page.route(`**/**.{jpeg,png,svg,img}`,route=>route.abort())
    await page.goto("http://www.salesforce.com")
    await page.waitForTimeout(4000)

    // await page.fill("#username","vidyar@testleaf.com")
    // await page.fill("#password","Sales@123")
    // await page.click("#Login")
})


test.only(`Request modified`,async({page})=>{

  await page.goto("http://login.salesforce.com")

  await page.route("**/**.{jpeg,png,svg,img}",
    (route,request)=>{
        console.log(request.url())
        console.log(request.postData())
        console.log(request.headers())
      //  delete Headers['data']

      route.continue({  //modifiy the request data
        headers:{
            'accept-language':'en'
        }
      })
      console.log(request.headers())

      //mock the response
    //   route.fulfill({
    //      'status':302,
    //   })
     })

    await page.fill("#username","vidyar@testleaf.com")
    await page.fill("#password","Sales@123")
    await page.click("#Login")

})