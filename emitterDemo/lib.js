const EventEmitter = require('events').EventEmitter;

class HeheSpeaker extends EventEmitter {
    constructor() {
        super();
        setInterval(() => {
            this.emit('lueluelue', {
                heheda: 'hehehe',
                jijiwaiwai: (Math.random() * 100).toFixed(2)
            })
        }, 2000);
    }
}

const heheSpeaker = new HeheSpeaker;

module.exports = heheSpeaker;