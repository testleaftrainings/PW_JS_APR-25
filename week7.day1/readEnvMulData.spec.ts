import test from '@playwright/test'
import dotenv from 'dotenv'


//process.env.envFile-->to set the filename or take the default file as qa to read data
let filename=process.env.envFile || 'qa'
dotenv.config({path:`data/${filename}.env`})

test(`Read the data from env file`,async({page})=>{
console.log(process.env.BaseUrl)
console.log(process.env.LF_Username)  
let url=process.env.BaseUrl as string
let username=process.env.LF_Username as string
let pwd=process.env.LF_Password as string
await page.goto(url)
await page.fill("#username",username)
await page.fill("#password",pwd)
await page.click(".decorativeSubmit")
})