const { EventEmitter } = require('events')
const ev = new EventEmitter()

// ev.once - uma única vez
ev.on('saySomething', (message) => {
    console.log('Eu ouvi você: ', message)
})

ev.emit('saySomething', "Diego")
