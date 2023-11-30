
console.log("first way");
let arr = ["kaif","mohammad" , "shaik"];

arr.forEach((i)=>{
    console.log(i);
});


console.log("second way");

arr.forEach(function (val){
    console.log(val);
});


console.log("third way");

function printMe(index){
    console.log(index);
}
arr.forEach(printMe);