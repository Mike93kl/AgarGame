const GameObject = require('./GameObject');
class Player extends GameObject {
    constructor(_id,name, radius, color) {
        super(radius, color);
        this.name = name;
        this.id = _id;
    }

}

module.exports = Player;
