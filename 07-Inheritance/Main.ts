import { Shape } from "./Shape";
import { Circle } from "./Circle";

let myShape = new Shape(10,14);
console.log(myShape.getInfo());


let myShape1=new Circle(12,10,12);
console.log(myShape1.getInfo())



let theShapes:Shape[]=[];

theShapes.push(myShape)
theShapes.push(myShape1)
console.log("using arrays")
for(let i of theShapes){
    console.log(i.getInfo())

}