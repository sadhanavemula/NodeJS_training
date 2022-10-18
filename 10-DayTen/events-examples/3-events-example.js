var emitter = require('events').EventEmitter;
var eventEmitter = new emitter();

// subscribing an event
eventEmitter.addListener('FirstEvent',(message)=>{
    console.log(`First event Message: ${message}`);
})

//Raising an event
eventEmitter.emit('FirstEvent','You are raising first event');
