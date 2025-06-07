import test from "@playwright/test";
import { LoginPage } from "./loginPage";
import fs from 'fs'
let loginData:any


import dotenv from 'dotenv'
import { FakerData } from "./faker";
dotenv.config({path:"data/prod.env"})

let url=process.env.BaseUrl

test.beforeAll(`readData`,async()=>{
 loginData=JSON.parse(fs.readFileSync("data/credentials.json",'utf-8'))
  
})

test(`Run using class and Object`,async({page})=>{
    const login=new LoginPage(page)
    await login.loadUrl(url as string)
    await login.enterCredentials(loginData[0].Username,loginData[0].Password)
    await login.clickLogin()
    console.log(await login.verifyTitle())
    FakerData.getFirstname()
})

//salesforce application