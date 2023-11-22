// let arr = [10,20,30,true];
// console.log(arr);   // we can insert all kind off values in arrays in javascript

// let arr2 = [40,50,false]

// let arr3 = arr.concat(arr2);
// arr.unshift(9);
// console.log(arr);
// arr.shift();
// console.log(arr);


// const myArr = arr.join();
// console.log(myArr);


//slice,splice
let arr = [1,2,3,4,5];

console.log("A " ,arr );
const myN1 = arr.slice(1,4);
console.log(myN1);
console.log(arr);



console.log("B " , arr);
const myN2 = arr.splice(1,4);
console.log(myN2);
console.log(arr);