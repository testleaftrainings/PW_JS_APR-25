// type alias -> Creating custom type of data
//let value:string
var emp = "Dilip";
function LaunchBrowser(browservalue) {
    if (browservalue === "Chrome") {
        console.log("Launch chrome browser");
    }
    else if (browservalue === "Edge") {
        console.log("Launch edge browser");
    }
    else {
        console.log("no Browser is Launched");
    }
}
LaunchBrowser("Chrome");
var value = {
    username: "dilip",
    userid: 37,
    name: "testlead",
};
console.log(value);
//print only userid
console.log(value.userid);
