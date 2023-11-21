/* 
Primitive
----------

7 Types ======>{

    1.String
    2.Numnber
    3.Boolean
    4.Null
    5.undefined
    6.Symbol
    7.BigInt
}
java script is dynamically typed language since it determines the type of variable based on the value assigned to it on run time



*/

const id = Symbol("123");
console.log(typeof id);


//BigInt

const bigNumber = 3455786985940869235676000928n;   //Number range is ====>2^53-1. so this is not right way to use BigInt so add "n" at last to make it as BigInt
console.log(typeof bigNumber);  //returns bigint.


// Reference or Non-Primitive
// --------------------------

// Arrays,Objects,Functions
let arr = ["kaif", "shaik"];
console.log(typeof arr);
// array

let myObj = {
    name: "kaif",
    age: 20
}
// object 
console.log(typeof myObj);


// functions

function myFunction() {
    console.log("kaif");
}
console.log(myFunction);