/*

stack => primitive dataTypes
Heap => Non-Primitive dataTypes


example  ||
         ||
         __
         \/
*/

let nameOne = "kaif";
let nameTwo = nameOne;
console.log("how copy of nameOne is given to nameTwo");
console.log(nameOne);
console.log(nameTwo);
nameTwo = "shaik"
console.log("you can realise there is no change in nameOne when namTwo value is changed");
console.log(nameOne);
console.log(nameTwo);


//heap example let us take object cause object is non-Primitive datatype

let myObjOne = {
    name:"kaif",
    age:20
}
let myObjTwo = myObjOne;
console.log(myObjOne);
console.log(myObjTwo);

//now iam changing the value of name in object two and you can see there is a change in myobjone also
//because the reference is passsed to object in heap, unlike copy value in stack
myObjTwo.name = "shaik";
console.log(myObjOne);
console.log(myObjTwo);