// i can access the function before initialisation also in case of thies ====>
console.log(addOne(1));
function addOne(n){
    return n+1;
}


//but here we cannot do 
console.log(addTwo(1));
const addTwo = function(n){
    return n+2;
}

//ReferenceError: Cannot access 'addTwo' before initialization