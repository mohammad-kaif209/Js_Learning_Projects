const user = {
    name:"kaif",
    fee :"199",
    welcomeMessage : function(){
        console.log(`welcome to ${this.name} 's website...`) ;
        console.log(this);   // this "this" going to show what are all the contents in this particular scope(i.e; Object)
    }
}

user.welcomeMessage();
console.log(this); //this "this will print empty object.."
function myFunc(){
    let name = "kaif";
    console.log(this.name); // prints undefined
}
myFunc();
// another function

const myFunc1=function (){
    let name = "kaif";
    console.log(this.name); //it also prints undefined

}
myFunc1();


const myFunc2 = () =>{
    let name = "kaif";
    console.log(this); // output ===> {} "which is different from other function methods"
    console.log(this.name); //prints undefined same as other methods
}
myFunc2();


//benefit of arrow function is we don't need to return statement if you can return in single line 

// example

// const addTwo = (n1,n2) =>{
//     return n1+n2
// }  this is normal way

const addTwo = (n1,n2)=> n1+n2; //use (n1+n2) it is a good practice...it would be helpful 
//when you are returning objects without using return object

console.log(addTwo(1,2))