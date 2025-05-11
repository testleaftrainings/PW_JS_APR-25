function empdetails(name, id, mailId, status) {
    //mailId='dilip@testleaf.com' -> default parameter
    //status?:boolean -> optional paramter
    if (mailId === void 0) { mailId = 'dilip@testleaf.com'; }
    return "the emp details are ".concat(name, " : ").concat(id, " : ").concat(mailId, " : ").concat(status);
}
console.log(empdetails("Dilip", 37, 'dilipkumar@testleaf.com', true));
console.log(empdetails("testleaf", 119, 'platform.testleaf.com', true));
