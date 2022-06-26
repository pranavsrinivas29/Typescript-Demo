import { Coach } from "./Coach";
import { Cricket } from "./Cricket";
import { Golf } from "./Golf";

let crick=new Cricket();
let gol=new Golf();

let mySports:Coach[]=[]

mySports.push(crick)
mySports.push(gol)

for(let i of mySports){
    console.log(i.getWorkout());
    
}