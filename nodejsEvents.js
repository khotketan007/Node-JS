const EventEmitter = require('events')

class MyEmitter extends EventEmitter{}

const myEmitter =  new MyEmitter()
myEmitter.on('waterFall', () => {
    console.log("Please turn off the Motor");
    setTimeout(() => {
        console.log("Please turn off the Motor! It's a gentle remainder")
    }, 2000);
})

console.log("Motor is Running");
myEmitter.emit('waterFall')
console.log("Motor is Still Running");