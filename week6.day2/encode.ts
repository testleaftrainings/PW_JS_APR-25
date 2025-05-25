import { faker } from "@faker-js/faker"

let username ="admin"
let password="khOyo%57C$QC"
 let auth=btoa(`${username}:${password}`)

 console.log(auth)


 let fname=faker.person.firstName()
 let company=faker.company.buzzNoun()
 let cvv=faker.finance.creditCardCVV()

 console.log(`${fname}:${company}:${cvv}`)

 console.log(faker.lorem.sentence(5))