/*Create a constructor function called animal that takes parameters for name and sound add a method to the animal prototype 
called makeSound that logs the sound of the animal create  two instance of the animal and call the makeSound method for each 
instance 

Extend the animal constructor function from problem 1 to include the property called type. Update the makeSound method to include
the type  of the animal in the log message. create an instance of an animal with a specific type and sound and call the 
makeSound method */

function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
}

Animal.prototype.makeSound = function () {
  console.log(`name:${this.name} sound:${this.sound} type:${this.type}`);
};

Animal.prototype.type = "Animal";

var animal1 = new Animal("tiger", "roar");
var animal2 = new Animal("car", "meaw");
animal1.type = "wild Animal";

animal1.makeSound();
