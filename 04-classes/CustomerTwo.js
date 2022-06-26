"use strict";
class CustomerTwo {
    constructor() {
        this.__firstName = "A";
        this.__lastName = "B";
    }
    set firstName(value) {
        this.__firstName = value;
    }
    get firstName() {
        return this.__firstName;
    }
}
let cusTwo = new CustomerTwo();
console.log(cusTwo.firstName);
cusTwo.firstName = "B";
console.log(cusTwo.firstName);
