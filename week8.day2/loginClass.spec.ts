import test from "@playwright/test";
import { LFLoginFuntionality } from "./lfLogin";

test(`Login Functionality`,async({page})=>{
const loginObj=new LFLoginFuntionality(page)
 await loginObj.loadUrl()
 await loginObj.enterCredentials()
 await loginObj.clickLogin()

})