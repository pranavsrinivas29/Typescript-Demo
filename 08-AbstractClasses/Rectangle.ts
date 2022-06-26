import { Shape } from "./Shape";


export class Rectangle extends Shape{
    calculateArea(): number {
        return this.thex*this.they;
    }
    constructor(private thex:number,
        private they:number){
            super(thex,they);

        }

        getInfo(): string {
            return super.getInfo();
        }
    
}