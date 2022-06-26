"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(thex, they, radius) {
        super(thex, they);
        this.thex = thex;
        this.they = they;
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    getInfo() {
        return super.getInfo() +
            `rad= ${this.radius}`;
    }
}
exports.Circle = Circle;
