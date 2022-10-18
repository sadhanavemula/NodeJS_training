var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
var users = [], chatlog = [];

chat.on('message', function(message) {
 chatlog.push(message);
 console.log(chatlog);
});

chat.on('join', function(nickname) {
 users.push(nickname);
 console.log(users);
});

chat.emit('join','emmiting join event');
chat.emit('message','emmiting message event');