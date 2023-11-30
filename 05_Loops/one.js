// for

// array = [12,13];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// array = [1,2]
// array.forEach(element => {
//     console.log(element); 
// });


for(let  i = 0 ; i<10;i++){
    if(i==2){
        console.log(`${i} is deducted.. `);
        continue;  // it skips the loop and dont execute further statements, instead it skips one iteration... 
    }
    console.log(i);
}