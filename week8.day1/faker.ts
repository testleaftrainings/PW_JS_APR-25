import { faker } from "@faker-js/faker";

export class FakerData{

    static getFirstname(){
         return faker.person.firstName()
    }

}