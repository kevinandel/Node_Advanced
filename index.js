/*

require('./add.js'); // ./ refers to same file as that of index.js and require is used to add an external module or file.hre require function laods add.js module into index.js and runs it first 

// require('./add'); //this is also valid node will append .js automatically

console.log('Hello from index.js');

*/

/*
const adding = require('./add.js'); //constant name can be anything

console.log('Hello from index.js');
const sum = adding(1,2);
const sum2 = adding(3,4);
console.log(sum);
console.log(sum2);

*/

/*
require('./superman');
require('./batman');
//theres no conflict eventhough we use the same variable(superHero) in both modules because in node each module has its own scope

*/


/*

// const superHero = require('./super-hero');


// const supperhero = superHero.getName();
// console.log(supperhero);
// superHero.setName('Superman');
// const superhero = superHero.getName();
// console.log(superhero);

console.log(superHero.getName());
superHero.setName('Superman');
console.log(superHero.getName());

const newsuperHero = require('./super-hero');
console.log(newsuperHero.getName()); //here we will think the output as Batman because we are creating a new instance of SuperHero class but the output is Superman.This is where module caching comes into picture. When a new module is required it is cached(remembered) for subsequent usage.when we load it again node remembers that it has already loaded this before and reuses it instead of loading a new one.Since objects are passed by reference we get the same object


//So to avoid this instead of exporting an instance we can export the class itself


// newsuperHero.setName('Flash');
// console.log(newsuperHero.getName());
// console.log(superHero.getName());


*/





//to avoid the issue that comes along with caching of module instead of exporting an object we export the whole class itself and we create different objects for that class in index module


/*
const SuperHero = require('./super-hero');

const superHero1 = new SuperHero('Batman');
const superHero2 = new SuperHero('Superman');


console.log(superHero1.getName());
superHero1.setName('Bruce Wayne');
console.log(superHero1.getName());

console.log(superHero2.getName());


*/



// const add = require('./math');
// console.log(add(3,4));


// const operation = require('./math');
// console.log(operation.add(4, 5));
// console.log(operation.subtract(4, 5));


//by using destructuring
// const operation = require('./math');
// const { add, subtract } = operation;
// console.log(add(2,4));
// console.log(subtract(4,2));


//fourth pattern
// const operation = require('./math');
// const { add, subtract } = operation;
// console.log(add(2,4));
// console.log(subtract(4,2));


//in fifth pattern we can simply replace module.exports with exports
// const math = require('./math'); //that is math becomes empty object when we simply use exports 
// const { add, subtract } = math;
// console.log(add(2,4));
// console.log(subtract(4,2));


/*

const data = require('./data.json');
// const data = require('./data'); but node js will first try to find js file then only search for json.so always use file extension
console.log(data); //print the json data as an object.This is because when we import a json file the require function will parse the json data into a javascript object
console.log(data.name);

*/


/*
//watch mode (node --watch index)


console.log('Hello World'); //node --watch index and it wil eneter watch mode that is we dont have to seperately save and run our code,it will start automtically running
*/





//path modules(built-in modules)

//const path = require('node:path');   //const path = require('path'); //no ./ at the beginning

//const path = require('path'); node: can be omitted

// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename)); //returns last portion of filename or directory name
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename)); //.js
// console.log(path.extname(__dirname)); // empty string because it does not have a dot character in its path

/*
console.log(path.parse(__filename)); //parse gives all the details as an object
console.log(path.format(path.parse(__filename)));  //format converts it back to normal format console.log(__filename);
// console.log(path.parse(__filename).root);
// console.log(path.parse(__filename).dir);
// console.log(path.parse(__filename).base);
// console.log(path.parse(__filename).ext);
// console.log(path.parse(__filename).name);


console.log(__filename);
console.log(path.format(path.parse(__dirname)));



console.log(path.isAbsolute(__filename)); //to check whether it is an absolute path returns true as it is an absolute path because it starts from the root till the target file

console.log(path.isAbsolute('./data.json')); //not an absolute path because ./ is relative path because it is relative to the current working directory or the location of the file from which it's being referenced. It does not start from the root and typically uses . or .. to navigate through directories.

*/


/*

//path.join

console.log(path.join('folder1', 'folder2', 'index.html')); //to concatenate strings of paths and also normalises the resulting path

console.log(path.join('/folder1', 'folder2', 'index.html'));

console.log(path.join('/folder1', '//folder2', 'index.html')); //eventhough we give two slashes it normalises and converts to one slash

console.log(path.join('/folder1', '//folder2', '../index.html')); //  ../index.html means to jump two folders up so it skips folder2 and goes directly to folder1

console.log(path.join(__dirname, 'data.json')); 

*/



/*

//resolve(resolves a sequence of path or pathsegments into an absolute path)


console.log(path.resolve('folder1', 'folder2', 'index.html')); //resolve will add an absolute path if there is no forward slash at the beginning
console.log(path.resolve('/folder1', 'folder2', 'index.html')); //if we give a forward slash reolve will return the absolute path from that forward slash 
console.log(path.resolve('/folder1', '//folder2', 'index.html')); //if a forward slash occure later again in the sequence resolve will return the absolute path starting from that forward slash and ignore the previous path
console.log(path.resolve('/folder1', '//folder2', '../index.html')); //here we go up one folder so there is only index.html
console.log(path.resolve(__dirname, 'data.json')); //here __dirname is already an absolute path so we see it combined with data.json returned as an absolute path

*/





/*


//pizza-shop.js

const PizzaShop = require('./pizza-shop');
const DrinkMachine = require('./drink-machine');

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on('order', (size, topping) => {
  console.log(`Order recieved! Baking a ${size} pizza with ${topping}`);
  drinkMachine.serveDrink(size);
})
pizzaShop.order('large', 'mushrooms');
pizzaShop.displayOrderNumber();


//here we were able to extend and inherit the custom emit and on properties for pizzaShop from the EventEmitter class

*/




/*

//buffer

//we dont have to import buffer as node js gives it as  aglobal feature

const buffer = new Buffer.from('KevinJosy'); //'utf-8' is the default encoding value so no need to specify it

buffer.write("Andel"); //this will replace Kevin with Andel as buffer has limited memory.So Andel will replace the first 5 characters and if it was andelandelandel it will only write andelande as it will only replace the characters that already existed in the buffer

console.log(buffer.toString()); //print KevinJosy because toString converts the binary representation to actual character

console.log(buffer); //this will print raw binary data as buffer contains raw binary data but it wil be in a hexadecimal representation because printing 8 bit binary will flood the terminal

console.log(buffer.toJSON()); //we get an object with type: buffer and a data array which contains 5 numbers and each are unicode representation of each character in my name


//nodejs internally uses buffers when required and we may not have to work with buffers directly

*/




/*

//fs module

const fs = require('node:fs');

console.log('first');
const fileContents = fs.readFileSync('./file.txt', 'utf-8'); //when we give 'utf-8' it converts the hexadecimal to normal text.  the sync keyword is very import that it depicts that it is synchronous and javasript will only go to next ine once the whole content is read from the file

console.log(fileContents); //file content in hexadecimal format

console.log('second');

fs.readFile('./file.txt', (error, data) => {//readFile is used to do it asychronously and the arrow function is what is executed when the data is fetch successfully.error is for if their was any error occured during the fetch if there was no error it is set to null and data is populated with filecontents.this pattern of using error first is called error first callback function.we can use uts-8 here too
  if(error) {
    console.log(error);
  }
  else { 
    console.log(data.toString());
  }
  
})

console.log('third');




//output 


first
Hello
second
third
Hello







fs.writeFileSync('./greet.txt', 'Hello');

fs.writeFile('./greet.txt', ' Hiii', { flag: 'a' }, (error) => {
  if(error) {
    console.log(error);
  }
  else {
    console.log('File written');
  }
})

//if the file is already written it overrides what is already inside

// /{ flag: 'a' } appends things instead of overriding


output

first
Hello
second
third
File written
Hello


*/





//fs promises

// const { error } = require('node:console');
// const fs = require('node:fs/promises');

// console.log('first');

// fs.readFile('file.txt', 'utf-8').then(data => console.log(data)).catch(error => console.log(error));

// console.log('second');




/*

//async

const fs = require('node:fs/promises');

async function readFile() {
    try {
      const data = await fs.readFile('file.txt', 'utf-8')
      console.log(data);
    }
    catch(error) {
      console.log(error);
    }
}

readFile();

*/




/*

//stream - transferrring from file.txt to file2.txt

const fs = require('node:fs');
const zlib = require('node:zlib'); //zlib module provides compression functionality implemented using gzip algorithm.zlib has a builtin transform stream(zlib allows us to create zip files)

const gzip = zlib.createGzip(); //returns a transform stream to compress data so we can chain taht

const readableStream = fs.createReadStream('./file.txt', {
  encoding: 'utf-8',
  highWaterMark: 2 //this is options object and so we created a readablestream to read data from file.txt as chunks and highwatermark 2 means maximum chunk size is now 2 bytes
})

readableStream.pipe(gzip).pipe(fs.WriteStream('./file2.txt.gz'));

const writableStream = fs.createWriteStream('./file2.txt');

readableStream.pipe(writableStream); //pipes connect readable stream and writable stream. pipe returns a destination stream which enables chaining however destination stream has to be readable duplex or transform stream but here we have writable stream

// readableStream.on('data', (chunk) => {
//   console.log(chunk); //here the whole line Hello kevin is inside chunk because default size of readable stream is 64kb and ours is only 18 bytes
//   writableStream.write(chunk);
// });  we can simply use pipes instead of this code

*/





/*

//creating a node server with http module

const http = require('node:http');

const server = http.createServer((request, response) => {

  //object created for JSON response practical
  const superHero = { 
    firstName: 'Bruce',
    lastName: 'Wayne'
  }


  // response.writeHead(200, { "Content-Type": "text/plain"}); //200 is a http status code which shows success

  response.writeHead(200, { "Content-Type": "application/json"});
  // response.end('Hmmmmm');
  response.end(JSON.stringify(superHero));  //TypeError [ERR_INVALID_ARG_TYPE]: The "chunk" argument must be of type string or an instance of Buffer or Uint8Array. Received an instance of Object, so we use JSON.stringify
  // console.log(request); //console a lot of details in terminal
}); //http also extends event emitter class and callback function here is arequest listener.whenever a request reaches the server this function is executed

server.listen(3000, () => {
  console.log('Server running on port 3000')
});


//the program doesnt exit it is now waiting for request on port 3000. local host refers to our own machine which is the server


//so we created an api with one endpoint as localhost 3000 and that endpoint returns some data.so now any sever that can request can access data from our application

*/





/*

//sending html


const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((request, response) => {
  const name = 'Kevin'; //value that we need to insert into out html
  response.writeHead(200, { "Content-Type": "text/html"});
  // fs.createReadStream(__dirname + '/index.html').pipe(response);
  let html = fs.readFileSync('./index.html', 'utf-8')  //if html is very large buffer wil be full anf it will cause unnecessary memory issues so use streams
  html = html.replace('{{name}}', name);
  response.end(html); //this will print the text as itself because content type is plain text
});

  server.listen(3000, () => {
    console.log('Server running on port 3000')
  });


*/




/*

//http routing



const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((request, response) => {
//   response.end(request.url); //gives the url query string which represents the route (/about or /api or /)
// });

//http gives us acces to request method and it gives access to url also gives access to GET POST PUT DELETE
if(request.url === '/') {
  response.writeHead(200, {"Content-Type": "text/plain"})
  response.end('Home Page');
} else if(request.url === '/about') {
  response.writeHead(200, {"Content-Type": "text/plain"})
  response.end('About page');
} else if(request.url === '/api') {
  response.writeHead(200, {"Content-Type": "application/json"})
  response.end(JSON.stringify({
    firstName: 'Bruce',
    lastName: 'Wayne'
  }));
} else {
  response.writeHead(404);
  response.end('Page not found');
}
});

  server.listen(3000, () => {
    console.log('Server running on port 3000')
  });



*/





//libuv-thread pool



// const fs = require('node:fs');

// console.log('first');

// fs.readFile('./file.txt', 'utf-8', (error, data) => {
//   console.log('File Contents');
// });

// console.log('last');



// const crypto = require('node:crypto');

//pbkdft is a cpu intensive task that takes a huge amount of time and is offloaded to libuv's threadpool



// //sychronous version
// const start = Date.now();
// crypto.pbkdf2Sync('password','salt', 100000, 512, 'sha512');
// crypto.pbkdf2Sync('password','salt', 100000, 512, 'sha512'); //doubled the time when theres two
// console.log('Hash: ', Date.now() - start);




//asychronous version
// const MAX_CALLS = 3;
// const start = Date.now();
// for(let i = 0;i < MAX_CALLS;i++) {
//   crypto.pbkdf2('password','salt', 100000, 512, 'sha512', () => {
//     console.log(`Hash: ${i+1}`, Date.now() - start);
//   });
// }
//this outputted 3 almost equal times of execution which shows that it was asynchronous and it used libuvs threadpool


//experimenting to check how many thread pools are there

// const MAX_CALLS = 5;
// const start = Date.now();
// for(let i = 0;i < MAX_CALLS;i++) {
//   crypto.pbkdf2('password','salt', 100000, 512, 'sha512', () => {
//     console.log(`Hash: ${i+1}`, Date.now() - start);
//   });
// } //here hash 5 took twice the amount of other 4. that is libuvs thread pool has 4 threads and hash 5 has to wait for one thread to be complete which results in twice the time



//increasing the number of threads in threadpool it may not be working on my lap due to lack of resources and high usage of memory

// process.env.UV_THREADPOOL_SIZE = 16;
// const crypto = require('node:crypto');
// const MAX_CALLS = 16;
// const start = Date.now();
// for(let i = 0;i < MAX_CALLS;i++) {
//   crypto.pbkdf2('password','salt', 100000, 512, 'sha512', () => {
//     console.log(`Hash: ${i+1}`, Date.now() - start);
//   });
// } 




/*

//network i/o experiment
//https does not use the threadpool because not a larger average time was seen for more tahn 4 requests and also it was not afected by the number of cpu cores either because https request is a network io operation not a cpu bound operation and it does not use thread pool

const https = require('node:https'); //secure version of http module
// const crypto = require('node:crypto');
// process.env.UV_THREADPOOL_SIZE = 16;
const MAX_CALLS = 6;
const start = Date.now();
for(let i = 0;i < MAX_CALLS;i++) {
  https.request('https://www.google.com', (res) => {
    res.on('data', () => {});
    res.on('end', () => {
      console.log(`Request: ${i+1}`, Date.now() - start);
    });
  }).end();
  // // crypto.pbkdf2('password','salt', 100000, 512, 'sha512', () => {
  // //   console.log(`Hash: ${i+1}`, Date.now() - start);
  // });
}
  

*/



const uname = 'admin';
const pwd = 'pas';

const Express = require('express')
const router = Express().Router();

router.get('/',(req, res) => {
 res.send('Hii');
})


router.post('/verify', (req, res) => {
  if(req.body.username === uname && req.body.password === pwd) {
    res.render('/home')
  }
  res.send('home');
})

