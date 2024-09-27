// const add = (a, b) => {
//   return a + b;
// };

// module.exports = add;


//another pattern of doing the same
// module.exports = (a, b) => {
//      return a + b;
//   };


//third pattern

// const add = (a, b) => {
//   return a + b;
// };

// const subtract = (a, b) => {
//   return a - b;
// };

// module.exports = {  //just exports wont work here because from a module nodejs only returns module.exports and not the exports object,exports is just a reference to module.exports and when we assign an object literal to exports the reference is broken,so it wont workas expected in module.exports,and module.exports will be an empty object
//   add: add,
//   subtract: subtract
// };

//key and value are same so simply specify one single value
// module.exports = {
//   add,
//   subtract
// };



//forth pattern
// module.exports.add = (a, b) => {
//   return a + b;
// };

// module.exports.subtract = (a, b) => {
//   return a - b;
// };



// in fifth pattern we can simply replace module.exports with exports.but always stick to module.exports
// exports.add = (a, b) => {
//   return a + b;
// };

// exports.subtract = (a, b) => {
//   return a - b;
// };
