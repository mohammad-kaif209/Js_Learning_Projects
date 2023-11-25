// why return statements are used inside the functions?
// example=>

// function addNums(n1,n2){
//     console.log(n1+n2);
// }
// const result = addNums(2,3);
// console.log(`result = ${result}`);   //it prints the results value as undefined since,you have not returned any thing

function addNums(n1,n2){
    return n1+n2;
}
const result = addNums(2,3);
console.log(result);


//if you don't pass any values when calling the function and the functions is having parameters then,
// it won't throw error it just replace undefined in the place of parameter

function calculatePrice(...n1){
    return n1;

}
console.log(calculatePrice(1,2,3,4,5,6));

//rest and spread.