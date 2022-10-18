var emitter = require('events').EventEmitter;
var eventEmitter = new emitter();

// subscribing an event for raising only once by Publisher
eventEmitter.once('FirstEvent',(message)=>{
    console.log(`First event Message: ${message}`);
})

//Raising an event
eventEmitter.emit('FirstEvent','You are raising first event');//Printed
eventEmitter.emit('FirstEvent','You are raising second event');
eventEmitter.emit('FirstEvent','You are raising third event');
eventEmitter.emit('FirstEvent','You are raising fourth event');
