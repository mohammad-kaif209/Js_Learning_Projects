//immediately invoked function expression (IIFE)
(function myFunc(){
    console.log(`db connected...`);  //named iife
})();  //";" is to terminate function calling

((name)=>{
    console.log(`db is not connected Mr.${name}`);
    //unnamed iife
})("kaif");
