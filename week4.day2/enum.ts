//numeric enum

enum teststatus{
pass, //0
fail =5, //1
absent, //2
timeout,
status
}

console.log(teststatus.absent)
console.log(teststatus.status)

//string enum

enum browserName{
    browser1="chrome",
    browser2="edge",
    browser3="firefox"
}
console.log(browserName.browser2)

//hetrogenous -> both number and string
enum hetro{
    name="dilip",
    id=37,
    mailId="dilip@testleaf.com"

}
console.log