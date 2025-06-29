
// //^for loop (specific number of times)
// for(initialisation,condition,increment/decrement) { 
//  //code goes here
// };

// let x = 0; //initialisation
// x < 6; //condition
// x++ //increment

// for (let x = 0; x < 6; x++) { 
// console.log(x);
// };

// for (let x = 1; x <= 12; x++) {
//     console.log (`${x}*${x} = ${x * x}`);
// }


// //^while loop (runs while the condition is true)
// //initialisation
// while(condition){ 
//     //code goes here
// decrement/increment
// }

// let x = 0;
// while (x < 6) {
//     console.log(x);
//     x++
// }

// initialisation
// condition (correct password)
// iteration

let password
const correctPassword = "Gifie123";
while(password !== correctPassword){
    password = prompt("enter your password")
}
alert("Access Granted")

// //^do while loop(runs atleast once, then repeats if the condition is true)
// //intialisation
// do{
//     //code goes here
//     increment/decrement
// }while(condition)

let y = 0;
do {
    console.log(y);
    y++
} while (y <= 5);