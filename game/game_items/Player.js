const GameObject = require('./GameObject');
class Player extends GameObject {
    constructor(_id,name, radius, color) {
        super(radius, color);
        this.name = name;
        this.id = _id;
        this.score        = 0;
        this.orbsAbsorbed = 0;
        this.speed = 4;
    }

}

module.exports = Player;
