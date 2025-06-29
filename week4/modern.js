//commonjs: Used to connect javascript files.

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
module.exports = farmer;
export default farmer;