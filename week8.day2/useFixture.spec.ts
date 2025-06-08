import { test } from "./fixture";

test(`using custom fixture`,async({page})=>{
    console.log(await page.title())
})