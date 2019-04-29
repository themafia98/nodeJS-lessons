

let arr = require('./module');
let events = require('events'); // include event module

// Events

let myEmit = new events.EventEmitter();

myEmit.on('some_event', function(text){


});

// ------------------------------ ///

console.log(arr.multiply(5,8));
console.log(arr.array(5));

// --------------------------------------------- //

console.log(__filename); // current file
console.log(__dirname); // dir to file

let test = function(callback){

    console.log('test func');

    callback();
};
function vvv() { console.log('test vvv'); }
test(vvv);

// -------------------------------------------- //

