// high order array loops
// const Arr = [1,2,3,4]
// for (const nums of Arr) {
//     console.log(nums);
// }

const  map = new Map();
map.set("name" , "kaif");
map.set("age",20);

// console.log(typeof map);
// console.log(map);
for (const [key,val] of map) {
    console.log(key + ':-' + val);
    
}

