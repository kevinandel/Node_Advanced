Executing Javacsript with Node

0. node -v to see the version of node

1. Node REPL
Read, Evaluate, Print, Loop


Type clear in terminal to clear all contents

console.log('Hello World')
Hello World //output
undefined  //is the return value of the statement console.log......

2 + 2
4 //output


Node REPL reads javscript code evaluates result and print it on output and loops till we instructs to quit

Ctrl + C to quit

Its better to write the javascript code in a file


2. node index.js or node index to run javascript code in a file in terminal


3. Browser vs node

in browser we interact mostly with DOM or other web platform apis like cookies whereas in node we dont have document, window and all other objects that are provided by browser

but in browser we dont have all the nice API s that Node.js provides through its modules.For example the filesystem access functionality

4. Modules

a module is an encapsulated and reusable chunk of code that has its own context.in node each file is treated as a seperate module.

types

local - that we create in our application
builtin - that node ships with out of the box
thirdparty - that written by other developers that we can use in our application


CommonJS

It is a standard that states how a module should be structured and shared.node adopted commonjs when it started out and is what you will see in code bases


In Node.js each files is a module that is isolated by default.
require function is used to load a module into another file



Module Wrapper

the IIFE that wraps every module contains 5 parameters which are important for functioning of a module.the 5 parameter are as below

(function(exports, require, module, __filename, __dirname) {
  const superHero = "Batman";
  console.log(superHero);
})


module points to current modulet that we are working on


Module Caching

Modules that were previously required is memorized in nodejs



CommonJS

* Each file is treated as a module
* Variables, functions, classes are not accessible to other files by default
* Explicitly tell the module system which parts of your code should be exported via module.exports or exports
* To import a code into a file,use the require() function

Eventhough CommonJS works perfectly fine a new module system has been added and that is ES modules.

file extension for es modules is .mjs not .js

* In es modules we use export and import keywords
* If it is a default export we can assign any name while importing
* If it is a named export, the import name must be the same




Built-in modules


5 main builtin modules are
path,events,fs,stream,http


node: Protocol

Makes it perfectly clear that the import is a Node.js builtin module
Makes the import identifier a valid absolute URL
Avoid conflicts for future Node.js built-in modules



Streams

data moves from one point to anotehr as streams of data
from one file to another or from one computer to another

data arrives in chunk and it is loaded instead of waiting for the entire file to arrive


buffers

imagine the example of rollercoaster it is only allocated when enough people are there and when a lot of people come only a fixed amount is allocated so the people waiting are buffer

ie node puts arriving data in a buffer if there are data being already processed or theres ver too little data to process



types of streams

helps us to work with data as chunks

readable streams from which data can be read eg.readable streams

writable streams to which we can write data eg.writable streams

duplex streams that are both readable and writable eg.sockets

transform streams that can modify or tranform the data as it is written and read eg:file compression where you can write compressed data and read decompressed data to and from a file as a transform stream





pipes

pipes help us to connet between streams


libuv

libuv is  cross platform open source library written in C language

handles asynchronous nonblocking operations in nodejs

abstracts away all the complexities of dealing with os by using thread pool and event loop



event loop

event loop is a c program and part of libuv

a design pattern that orchestrates or coordinates the execution of synchronous and asynchronous code in nodejs

execution order

microtask queues are first inside it first is nextTick queues and then promise queue

all callbacks within timer queue. but remember that timer queue is not a queue but a heap. timer queue has always a minimum of 1ms delay.never 0

callbacks in microtask if present are executed. again first tasks in the nextTick queue and then tasks in promise queue

io queue- most of the async methods from built in modules queue the callback function in io queue

callbacks in microtask if present are executed. again first tasks in the nextTick queue and then tasks in promise queue

check queue

callbacks in microtask if present are executed. again first tasks in the nextTick queue and then tasks in promise queue

close queue

for one final time microtask queue is executed

same steps are again repeated if there are more callbacks to be executed

if no more code to process the even loop exits

