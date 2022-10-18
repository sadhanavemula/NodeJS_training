//To get the reference of event module
var events = require('events');

//To create an object of Event Emitter class
var eventEmitter = new events.EventEmitter();

//(subscriber) Creating first event and receive some data
eventEmitter.on('FirstEvent',(message)=>{
    console.log(`First event Message: ${message}`);
})

//(subscriber) Creating second event and receive some data
eventEmitter.on('SecondEvent',(message)=>{
    console.log(`Second event Message: ${message}`);
})

//(Publisher) Raise an first event and send some data
eventEmitter.emit('FirstEvent','You are raising first event');

//(Publisher) Raise an second event and send some data
eventEmitter.emit('SecondEvent','You are raising second event');