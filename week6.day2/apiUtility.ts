//form data, enpoints, auth, body response

import { faker } from "@faker-js/faker";
import { APIRequestContext } from "@playwright/test";
let tokenUrl = "https://login.salesforce.com/services/oauth2/token"
let grantType = "password"
let clientId = "3MVG95mg0lk4bathv4oYb772GRC3bVxW1Es_Q3iIRRNR8SK5ApA.LJbPT96HpWJInRGniHTbF.cUq2.uJatoV"
let clientSecret = "149569A62384820C94E7FCB265BEFEC659DE02AD4E4D4BAEE95A354329BCD654"
let userName = "vidyar@testleaf.com"
let password = "Sales@123"

let token: any
let instUrl: any
let tokenType: any
let resourceId:any
 async function generateTken(request: APIRequestContext) {

    const response = await request.post(tokenUrl,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            form: {
                "grant_type": grantType,
                "client_id": clientId,
                "client_secret": clientSecret,
                "username": userName,
                "password": password
            }
        })

    const responseBody = await response.json()
    token = responseBody.access_token
    tokenType = responseBody.token_type
    instUrl = responseBody.instance_url

}


export async function createResource(request:APIRequestContext){
     await generateTken(request)
     const response=await request.post(`${instUrl}/services/data/v60.0/sobjects/Lead`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${tokenType} ${token}`
        },
        data:{
           "lastname":faker.person.firstName(),
           "company":faker.company.buzzNoun()
        }
     })
      
     const res=await response.json() 
               
    resourceId=res.id

}

export async function fetchResource(request:APIRequestContext){
   
     const response=await request.get(`${instUrl}/services/data/v60.0/sobjects/Lead/${resourceId}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${tokenType} ${token}`
        },
           })      
      const res=await response.json()   
      console.log(res)        
      return res.LastName
}