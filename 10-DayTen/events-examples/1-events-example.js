//To get the reference of event module
var events = require('events');

//To create an object of Event Emitter class
var eventEmitter = new events.EventEmitter();

//(subscriber) Creating an event 
eventEmitter.on('FirstEvent',()=>{
    console.log('First event Raised');
})

//(Publisher) Raise an event
eventEmitter.emit('FirstEvent');