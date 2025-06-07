import test from "@playwright/test";
import { HomePage } from "./homePage";

test(`LFTaps Modules-Lead`,async({page})=>{

  const hp=new HomePage(page)
  await hp.loadUrl("http://leaftaps.com/opentaps/control/main")
  await hp.enterCredentials("demoCSR","crmsfa")
  await hp.clickLogin()
  await hp.clickCRM()
  await hp.clickLeads()
  console.log(await hp.verifyTitle())
})

test(`LFTaps Modules-Accounts`,async({page})=>{

  const hp=new HomePage(page)
  await hp.loadUrl("http://leaftaps.com/opentaps/control/main")
  await hp.enterCredentials("demoCSR","crmsfa")
  await hp.clickLogin()
  await hp.clickCRM()
  await hp.clickAccounts()
  console.log(await hp.verifyTitle())

})