"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
let myShape = new Shape_1.Shape(10, 14);
console.log(myShape.getInfo());
let myShape1 = new Circle_1.Circle(12, 10, 12);
console.log(myShape1.getInfo());
let theShapes = [];
theShapes.push(myShape);
theShapes.push(myShape1);
console.log("using arrays");
for (let i of theShapes) {
    console.log(i.getInfo());
}
