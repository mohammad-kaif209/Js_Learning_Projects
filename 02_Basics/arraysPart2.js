const dcHeroes = ["batman" , "superman" , "flash"];
const indianHeros = ["sampu","saktiman","nagin"];

let combiningArrays = dcHeroes.concat(indianHeros);
//using concat
console.log(`Using concat method ${combiningArrays}`);

dcHeroes.push(indianHeros);
console.log(dcHeroes);

//using push



let arraysWithsubArrays = [1,2,3,4,[5,6,7],[7,8,[9,10]],[11,12,[13,14,[15,16,17]]]];
const realArray = arraysWithsubArrays.flat(Infinity);
console.log(realArray);


// to convert into array 

console.log(Array.from("shaik"));

// to convert multiple values at a time we can use "of"

let val1=100;
let val2=200;
let val3=300;
console.log(Array.of(val1,val2,val3));