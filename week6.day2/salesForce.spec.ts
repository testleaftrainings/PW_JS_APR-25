//generate token
//enpoint 
//Poet, Get, patch and delete

import { faker } from "@faker-js/faker";
import test from "@playwright/test";

let token: any
let inst_url: any
let tokenType: any
let id:any

test.describe(`SalesForce Api testing`,async()=>{
test(`Generate token`, async ({ request }) => {

    const response = await request.post("https://login.salesforce.com/services/oauth2/token",
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            form: {
                "grant_type": "password",
                "client_id": "3MVG95mg0lk4bathv4oYb772GRC3bVxW1Es_Q3iIRRNR8SK5ApA.LJbPT96HpWJInRGniHTbF.cUq2.uJatoV",
                "client_secret": "149569A62384820C94E7FCB265BEFEC659DE02AD4E4D4BAEE95A354329BCD654",
                "username": "vidyar@testleaf.com",
                "password": "Sales@123"
            }
        })

    const responseBody = await response.json()
    console.log(responseBody)
    token = responseBody.access_token
    inst_url = responseBody.instance_url
    tokenType = responseBody.token_type
    console.log(response.status())
})

test(`Create Lead`, async ({ request }) => {

    const response = await request.post(`${inst_url}/services/data/v60.0/sobjects/Lead`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${tokenType} ${token}`
        },
        data: {
            "lastname": faker.person.firstName(),
            "company": faker.company.buzzNoun()
        }
    })

    const resbody = await response.json()
    console.log(resbody)
    id=resbody.id
    console.log(response.statusText())

})
test(`To Fetch all recent resources created`,async({request})=>{

    const res=await request.get(`${inst_url}/services/data/v60.0/sobjects/Lead`, {
        headers:{
            "Content-Type":"application/json",
            "Authorization": `${tokenType} ${token}`
        }
        })

       const rbody=await res.json()
       console.log(rbody)
})




test(`To Fetch specific resource`,async({request})=>{

    const res=await request.get(`${inst_url}/services/data/v60.0/sobjects/Lead/${id}`, {
        headers:{
            "Content-Type":"application/json",
            "Authorization": `${tokenType} ${token}`
        }
        })

       const rbody=await res.json()
       console.log(rbody)
})



})

