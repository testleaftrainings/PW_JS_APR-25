import test from '@playwright/test'


test(`Window`,async({context,page})=>{

 await page.goto("http://www.amazon.in")

 const searchbox= page.locator("#twotabsearchtextbox")
 await searchbox.fill("Phones")
 await searchbox.press("Enter")

  const newTab=context.waitForEvent('page')  //create a promise for the event based on click
  await page.locator("//span[contains(text(),'Samsung')]").first().click() 
  const newPage=await newTab 

  console.log(await newPage.locator("//span[@class='a-price-whole']").first().innerText()) 
 //price =57,900

 console.log(await page.title())
 console.log(await newPage.title())
})





test.only(`Multiple Windows`,async({context,page})=>{

    await page.goto("https://leafground.com/window.xhtml")

    const [allPromises]=await Promise.all([
       context.waitForEvent('page'),
       page.getByText("Open Multiple",{exact:true}).click()
    ])


    //[promise1, promise1]=allPromises

    const allpages= allPromises.context().pages()

    for(const eacPage of allpages){
        console.log(eacPage.url())
     }
    // console.log(await allpages[0].title())
    //     console.log(await allpages[1].title())
    //         console.log(await allpages[2].title())
    
    let childTab:any
     for(let i=0;i<allpages.length;i++){

        console.log(await allpages[i].title())

        const title=await allpages[i].title()

        if(title=="Dashboard"){
            childTab=allpages[i]
        }
    }
     await childTab.locator("").click

 })