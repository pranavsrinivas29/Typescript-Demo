"use strict";
class Cus {
    constructor(__fN, __lN) {
        this.__fN = __fN;
        this.__lN = __lN;
    }
    set firstN(value) {
        this.__fN = value;
    }
    get firstN() {
        return this.__lN;
    }
}
let c2 = new Cus("abc", "def");
c2.firstN = "D";
console.log(c2.firstN);
