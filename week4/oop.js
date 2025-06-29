// //five ways of creating objects
// Example 1
// //{} or object literals
// const myObject = {
//     property1  : "value1",
//     property2 : "value2",
//     method1: function(){
//         console.log ("hello from method1");
//     }
// };
// console.log (myObject)

// console.log(Object.getPrototypeOf(myObject));
//using Object.create method()
const animal = {
    sound : "animal sound",
    makeSound : function(){
        console.log(this.sound)
    },
    /*makeSound(){
        return `This is ${this.sound}`;
    }*/
}
const dog = Object.create(animal);
dog.sound = "woof woof";
dog.makeSound();
console.log(dog);
// console.log(animal);

//Example 3
//Constructor functions
function Person(name,age){
    this.name = name
    this.age = age
    this.greet =function(){
        console.log(`Hello my name is ${this.name}`);
    };

}
const person1 = new Person("Zyra",1);
const person2 = new Person("Itungo",12);
const person3 = new Person("Matama",20);
const person4 = new Person("Yabwana",22);
console.log(person1);
person1.greet();

//Example 4
//Using ES6 classes
class Car{
    constructor(make,model){
        this.make = make;
        this.model = model;
    }
     start() {
      console.log(`$(this.make) is starting`)  
    }
}
const car1 = new Car ("Toyota", "Auris");
const car2 = new Car ("Range Rover", "Sport");
console.log(car2);

//method 5
//factory functions
// function createProduct(name,price){
//     return{
//         name: name,
//     price: price,
//     displayInfo: function({
//         console.log(`product: ${this.name}, price: ${this.price}`)
//     })
// }
//     }
// }

//encapsulation
//helps in data hiding

//inheritance

class Animal {//parent class
    constructor(name){
        this.name = name;       
    }
 
  
  speak(){
    console.log(`&{this.name}makes a sound.`);
  }

}
class Dog extends Animal {//dog - child class
 speak() {
    console.log(`&{this.name}barks.`); 
 }
         
}
let buck = new Dog ("buck");
    daisy.speak(); //Output: Daisy barks
    
//polymorphism
//methods of the class have the same name but acts differently
//used for decision making just as if statements
class User {
    login() {
        console.log("User logged in");
    }
}

class Host extends User{
    login() {
        console.log("Host logged in with elevated pages");
    }
}
 let newHost = new Host()
 newHost.login(); //Output: Host logged in with elevated privilege

 //abstraction
 //hiding the complex implementation