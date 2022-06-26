"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cricket_1 = require("./Cricket");
const Golf_1 = require("./Golf");
let crick = new Cricket_1.Cricket();
let gol = new Golf_1.Golf();
let mySports = [];
mySports.push(crick);
mySports.push(gol);
for (let i of mySports) {
    console.log(i.getWorkout());
}
