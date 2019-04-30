

let arr = require('./module');
let events = require('events'); // include event module
let util = require('util'); // модуль для наследования (классовых) эвентов


// -----------------util / events---------
let Cars = function(model){

    this.model = model;
};

util.inherits(Cars,events.EventEmitter); // устанавливает (наследования) обработчики событий

let bmw = new Cars("BMW");
let audi = new Cars("audi");
let volvo = new Cars("volvo");

let cars = [bmw,audi,volvo];

cars.forEach(car => {

    car.on('speed', function(text) {

        console.log(car.model + " speed is - " + text);

    });

});

bmw.emit('speed','254 km');

// ----------------------------------- //


// Events object

let myEmit = new events.EventEmitter();

myEmit.on('some_event', function(text){

    console.log(text);
});

myEmit.on('click', function(text){

    console.log(text);
})

myEmit.emit("some_event", "hello emit!"); // create event
myEmit.emit("click", "hello click");

// -----------module-------------- ///

console.log(arr.multiply(5,8));
console.log(arr.array(5));

//-----------func--------------------//

let test = function(callback){

    console.log('test func');

    callback();
};
function vvv() { console.log('test vvv'); }
test(vvv);

// -------------------------------------------- //

