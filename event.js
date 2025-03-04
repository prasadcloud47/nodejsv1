const EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('newEvent', function(message){
    console.log(`Message: ${message}`);
}
);  

emitter.on('ratEvent', function(message){
    console.log(`Message: ${message}`);
}
);  

emitter.on('datareturnEvent', function(message){
    console.log(`Event Data :--:  ID: ${message.id + '  Name:' + message.name}`);
}
);  

//emitter.emit('newEvent', 'Hello World!');
//emitter.emit('ratEvent', 'Hello Neo!');
emitter.emit('datareturnEvent', { id:1, name:'rat'});
// Output:
// Message: Hello World!
// In this exercise, we are using the EventEmitter class from the events module to create an event emitter object. We then use the on method to listen for the 'newEvent' event and specify a callback function to be executed
// when the event is emitted. Finally, we use the emit method to emit the 'newEvent' event with the message 'Hello World!', which triggers the callback function and prints the message to the console.