const EventEmitter = require('node:events');

class PizzaShop extends EventEmitter{
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order (size, topping) {
    this.orderNumber++;
    this.emit('order', size, topping);
  }

  displayOrderNumber() {
    console.log(`Current order number: ${this.orderNumber}`);
  }
}

module.exports = PizzaShop;



/*

super keyword explanation


class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log("Hello, I'm " + this.name);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calling the parent class's constructor
    this.breed = breed;
  }

  bark() {
    console.log("Woof!");
  }
}

const puppy = new Dog("Max", "Golden Retriever");
puppy.speak(); // Output: Hello, I'm Max
puppy.bark(); // Output: Woof!
*/