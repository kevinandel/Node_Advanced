//events module

const EventEmitter = require('node:events');  //we used EventEmitter because the events module returns a class called EventEmitter which encapsulates functionalities to emit and respond to events we can give simply events too but the other is more apropriate

const emitter = new EventEmitter();
emitter.on("order-pizza", (size, topping) => {
  console.log(`Order recieved! Baking a ${size} pizza with ${topping}`);
});
emitter.on("order-pizza", (size) => {
  if(size === "large") {
    console.log("Serving complimentary drink!!");
  }
})
console.log("Do work before event occurs"); //this will print first and ie the execution is not blocked.it is simply delaying the execution of a function till an event occurs
emitter.emit("order-pizza", "large", "mushrooms");  // this is an event and when execution reaches this line an event is broadcasted 

