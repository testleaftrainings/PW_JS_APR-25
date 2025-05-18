import test from '@playwright/test'


test(`File upload using setInput files`, async({page})=>{

    await page.goto("https://leafground.com/file.xhtml")

    //attribut type=file in the dom
    await page.locator("//span[text()='Choose']/following-sibling::input").first()
            .setInputFiles("data/FileUploads.txt")   
           await page.waitForTimeout(3000)
})

test(`File upload using listener`, async({page})=>{
    await page.goto("https://leafground.com/file.xhtml")    
    //type=file not available in the dom    
     const filePromise=page.waitForEvent('filechooser')
     page.locator("//span[text()='Choose']/following-sibling::input").first().click()
     const fileUpload=   await filePromise;
     console.log(fileUpload.isMultiple()) 
     //["","",""]
     await fileUpload.setFiles(["data/FileUploads.txt",""])
     //if it allows multiple file to upload --> ["",""] 
     //await fileUpload.setFiles(["data/FileUploads.txt","data/"])
     //will elem allows to upload multple
       await page.waitForTimeout(3000)

})

test.only(`File download using listener`, async({page})=>{
    await page.goto("https://leafground.com/file.xhtml")    
    
    const filePromise=page.waitForEvent('download')
    page.getByText('Download',{exact:true}).click()
    const fileDownload=await filePromise

    await fileDownload.saveAs("data/"+fileDownload.suggestedFilename())

  await fileDownload.saveAs("data/demo.txt")
  //await fileDownload.failure()
       

})