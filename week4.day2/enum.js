//numeric enum
var teststatus;
(function (teststatus) {
    teststatus[teststatus["pass"] = 0] = "pass";
    teststatus[teststatus["fail"] = 5] = "fail";
    teststatus[teststatus["absent"] = 6] = "absent";
    teststatus[teststatus["timeout"] = 7] = "timeout";
    teststatus[teststatus["status"] = 8] = "status";
})(teststatus || (teststatus = {}));
console.log(teststatus.absent);
console.log(teststatus.status);
//string enum
var browserName;
(function (browserName) {
    browserName["browser1"] = "chrome";
    browserName["browser2"] = "edge";
    browserName["browser3"] = "firefox";
})(browserName || (browserName = {}));
console.log(browserName.browser2);
//hetrogenous -> both number and string
var hetro;
(function (hetro) {
    hetro["name"] = "dilip";
    hetro[hetro["id"] = 37] = "id";
    hetro["mailId"] = "dilip@testleaf.com";
})(hetro || (hetro = {}));
console.log(hetro.mailId);
