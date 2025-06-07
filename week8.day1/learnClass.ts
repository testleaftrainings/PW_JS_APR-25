class Browser{
    //property
     browserInfo:string="Chrome"
     browserversion:number=131.45

//action-user defined method
    launchBrowser(){
        //test logic will written inside the method
     //   let browserMethod=""
          console.log("Launching chrome")
    }
}

//create a object outside the class -->new keyword -->to inilaize the object -->assigns a default value to it/allocates the memory
//syntax let/const variable=new classname() -->constructor-special method

let leafTaps=new Browser()  //reference created for the class and stored under the variable leaftaps
//refernce.classproprty
//refernce.classmethod()
leafTaps.launchBrowser()
console.log(leafTaps.browserInfo)
console.log(leafTaps.browserversion)