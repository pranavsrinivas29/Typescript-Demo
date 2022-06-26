"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cust = void 0;
class Cust {
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
exports.Cust = Cust;
