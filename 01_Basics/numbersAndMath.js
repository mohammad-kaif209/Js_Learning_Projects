const score = 20;
console.log(score);

const balance = new Number(200);
console.log(balance);


console.log(typeof score);
console.log(typeof balance);



console.log(balance.toString().length);
console.log(typeof balance);
console.log(balance.toFixed(2));
const fixedVal = 200.896;
console.log(fixedVal.toPrecision(4));

//it is difficult to read numbers in lakhs,crores,etc.. in given number so,we can use
// .toLocaleString() method

//example

let cost = 1000000000;
console.log(cost.toLocaleString()); // O/p =====> 1,000,000,000 ---->US
console.log(cost.toLocaleString('en-IN')); // O/p ====> 1,00,00,00,000 ----->Indian rupees



// --------------------MATH library-----------------------------//

console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.round(3.14));


console.log((Math.floor(Math.random()*10)) + 1);


// formula to print numbers between  x & y 

const min = 0;
const max = 30; 
console.log(Math.floor(Math.random()*(max-min)+1)+min);    // very important....
