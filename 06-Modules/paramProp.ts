export class Cust{
    constructor(private __fN:string,private __lN:string){

    }
    set firstN(value) {
        this.__fN = value;
    }
    get firstN() {
        return this.__lN;
    }
}
