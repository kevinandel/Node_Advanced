(function(message) {
  const superHero = 'Batman';
  console.log(message, superHero);
})('Hello');

(function(message) {
  const superHero = 'Superman';
  console.log(message, superHero);
})('Heyy');

//in iife each function gets its own private scope
//before a modules scope is executed node.js will wrap it with a function wrapper that provides module scope.this saves us from worrying about conflicting variables and it helps in reusability unaffected