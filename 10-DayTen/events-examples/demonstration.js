var http = require('http');
var events = require('events');
var os = require('os');

//To create an object of Event Emitter class
var eventEmitter = new events.EventEmitter();

let triggered = 0;
eventEmitter.once('MyEvent',()=>{
    console.log(`MyEvent ${++triggered} time(s).`);
    console.log('Host Name' + os.hostname());
})


const server = http.createServer((req,res)=>{
   eventEmitter.emit('MyEvent');
   res.statusCode = 200;
   res.setHeader('Content-Type','text/plain');
   res.end('Hello World');
})

server.listen(3000, () =>{
    console.log('The server is running at port 3000!!');
})
