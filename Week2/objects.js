
// let car = {
//     carName : "range rover",
//     model : "vellar",
//     carWeight : 80,
//     carEngine : "turbo",

//     start :function () {
//     console.log("vroooooomm")
// },
// drive:function (){
//     console.log("car is moving")
// },
// brake:function (){
//     console.log("krrrrr")
// },
// stop:function (){
//     console.log("car has stopped")
// }

// };

// console.log(car)

// car.carName;
// car.model;
// car.carWeight;
// car.carEngine;

// car.start();
// car.drive();
// car.brake();
// car.stop();

let farmer = {
    name : "Gift Nimusiima",
    age: 28,
    isRegistered: true,
    greetFarmer: function(){
     console.log("welcome" + " " + this.name + " " + "!!")   
    },

    chickRequest : function(quantity){
        console.log(this.name + " " + " requested for" + " " + quantity + "chicks")
    }
}
console.log(farmer.age)
farmer.greetFarmer()
farmer.chickRequest(100);