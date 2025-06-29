// function greetFarmer () {
//     console.log("Hello, welcome to young4chicks platform");
// }
// greetFarmer(); //we have console.log so no need to put return.

// function submitChickRequest () {
//     console.log("Your chick request has been submitted");
//     alert("Your chick request has been submitted");
// }

// //submitChickRequest();

// function calculateTotalCost(quantity, pricePerChick) {
//     return quantity*pricePerChick
// }
// calculateTotalCost(100, 1650);
// calculateTotalCost(70, 1650);
// calculateTotalCost(30, 1650);

// console.log(calculateTotalCost(100, 1650));

// function getApprovalStatus(requestedChicks){
//     if(requestedChicks <= 500){
//         return "Approved";
        
//     } else {
//             return "Rejected";
//         }
// }

// let status = getApprovalStatus(300);
// console.log("Request status:" + status)

function greetFarmer (farmer) {
    console.log("Hello" + " " + farmer + " fu" + "welcome to young4chicks platform");
}
greetFarmer("Gift");
greetFarmer("Zyra");
greetFarmer("Bylon");
greetFarmer("Daph");

function processTheMoney(callback) {
callback()
}
processTheMoney(function(){
    console.log("colleagues, the money is coming")
});