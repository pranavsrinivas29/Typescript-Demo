import { Shape } from "./Shape";


export class Circle extends Shape{
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