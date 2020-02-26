const GameObject = require('./GameObject');

class Orb extends GameObject {
    constructor(radius, color = null) {
        super(radius, color);
    }
}

module.exports = Orb;
