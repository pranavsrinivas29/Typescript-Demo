"use strict";
class Customer {
    constructor(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }
}
// let cus=new Customer();
// cus.firstName="ABC"
// cus.lastName="DEF"
let cus = new Customer("ABC", "def");
console.log(cus.firstName + "" + cus.lastName);
