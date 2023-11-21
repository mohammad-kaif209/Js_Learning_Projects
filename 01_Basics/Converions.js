let numVal = 10;
let stringVal1 = "kaif";
let stringValtonumVal1 = Number(stringVal1);
console.log("type\tvalue");
console.log("--------------");


console.log(typeof stringValtonumVal1+"\t"+stringValtonumVal1);


let stringVal2 = "33";
let stringValtonumVal2 = Number(stringVal2);
console.log(typeof stringValtonumVal2 +"\t" + stringValtonumVal2);

let nullVal = null;
let nullValtonumVal = Number(nullVal);
console.log(typeof nullValtonumVal +"\t" + nullValtonumVal);

let undefinedVal = undefined;
let undefinedValtonumVal = Number(undefinedVal);
console.log(typeof undefinedValtonumVal+"\t"+undefinedValtonumVal);

let booleanVal1 = true;
let booleanValtonumVal1 = Number(booleanVal1);
console.log(typeof booleanValtonumVal1+"\t"+booleanValtonumVal1);
let booleanVal2 = false;
let booleanValtonumVal2 = Number(booleanVal2);
console.log(typeof booleanValtonumVal2+"\t"+booleanValtonumVal2);

// Number conversions
/*
"33" => 33
"1abc" => NaN =====> not a number
null => 0
True => 1
False => 0
undefined => NaN =====> not a number

*/ 

//conversion of string to boolean
let StringVal = "";
console.log(typeof Boolean(StringVal)+"\t"+Boolean(StringVal));

let StringVal3 = "kaif";
console.log(typeof Boolean(StringVal3)+"\t"+Boolean(StringVal3));

/* 
str = "" =>boolean false
str = "some_value" => boolean true
*/