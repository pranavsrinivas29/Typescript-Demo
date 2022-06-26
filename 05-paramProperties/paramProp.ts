class Cus{
    constructor(private __fN:string,private __lN:string){

    }
    set firstN(value) {
        this.__fN = value;
    }
    get firstN() {
        return this.__lN;
    }
}

let c2= new Cus("abc","def");

c2.firstN ="D";
console.log(c2.firstN)