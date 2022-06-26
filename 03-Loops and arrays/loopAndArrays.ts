let reviews:number[]=[1,2,4,6,7];
let total:number=0
for(let i=0; i<reviews.length;i++){
    console.log(reviews[i])
    total+=reviews[i]

}
console.log(total)


// simplified loop
for(let i of reviews){
    console.log(i)
}