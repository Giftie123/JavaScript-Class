let emailPattern;
let phonePattern;
// let ninPattern;
// let farmerNamePattern = /^[A-Za-z]+$/;
// let farmerName = prompt("Enter your name")
// console.log(farmerNamePattern.test(farmerName)); //true if valid, false if invalid

let ninPattern = /^[A-Za-z0-9]{14}$/;
let farmerNin = prompt("enter your nin")
console.log(ninPattern.test("CF704564333Wxy"));
