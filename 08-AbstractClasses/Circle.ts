import { Shape } from "./Shape";


export class Circle extends Shape{
    calculateArea(): number {
        return Math.PI *Math.pow(this.radius,2);
    }
    constructor(private thex:number,
        private they:number,
        private radius:number){
            super(thex,they);

        }

        getInfo(): string {
            return super.getInfo()+
            `rad= ${this.radius}`;
        }
    
}