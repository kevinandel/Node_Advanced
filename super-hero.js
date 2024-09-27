class SuperHero {
  constructor(name) {
    this.name = name;
  }


  // when we create a function inside a class function keyword is not required as javascript automatically associates it with the class and treats it as a function
  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}


// module.exports = new SuperHero("Batman");

//to avoid the issue that comes along with caching of module instead of exporting an object we export the whole class itself and we create different objects for that class in index module

module.exports = SuperHero;