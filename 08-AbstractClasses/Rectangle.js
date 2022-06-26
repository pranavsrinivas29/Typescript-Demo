"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(thex, they) {
        super(thex, they);
        this.thex = thex;
        this.they = they;
    }
    calculateArea() {
        return this.thex * this.they;
    }
    getInfo() {
        return super.getInfo();
    }
}
exports.Rectangle = Rectangle;
