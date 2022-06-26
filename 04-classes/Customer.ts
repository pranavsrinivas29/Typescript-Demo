class Customer{
    firstName:String;
    lastName:String;


    constructor(fn:string,ln:string){
        this.firstName = fn;
        this.lastName=ln;
    }
}


// let cus=new Customer();
// cus.firstName="ABC"
// cus.lastName="DEF"

let cus=new Customer("ABC","def")

console.log(cus.firstName+""+cus.lastName)
