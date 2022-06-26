class CustomerTwo{
    private __firstName:string;
    private __lastName:string;

   constructor(){
    this.__firstName="A"
    this.__lastName="B"
   } 

   public set firstName(value:string) {
    this.__firstName=value
   }
   public get firstName():string{
        return this.__firstName;
   }
}

let cusTwo=new CustomerTwo();
console.log(cusTwo.firstName)
cusTwo.firstName="B"
console.log(cusTwo.firstName)