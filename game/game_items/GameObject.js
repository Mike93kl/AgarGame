const settings = require('../config/default_settings');

class GameObject {
    constructor(radius, color = null) {
        this.location = { x: settings.randomX() , y: settings.randomX() };
        this.radius = radius;
        this.color = (color) ? color : settings.randomColor();
    }

    /**
     *
     * @param object GameObject instance
     * @returns {boolean}
     */
    collidedWith(object) {
        const deltaX = object.location.x - this.location.x, deltaY = object.location.y - this.location.y,
            distance = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
        return distance <= (object.radius + this.radius);
    }

    moveX(x) {
        this.location.x += x;
    }

    moveY(y) {
        this.location.y += y;
    }

    move(x,y) {
        this.location.x += x;
        this.location.y += y;
    }

    setCoordinates(x,y) {
        this.location.x = x;
        this.location.y = y;
    }
}

module.exports = GameObject;
