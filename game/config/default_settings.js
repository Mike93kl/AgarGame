module.exports = {
    world_width: 5000,
    world_height: 5000,
    defaultOrbNumber: 500,
    defaultOrbRadius: 3.0,
    defaultRadius: 6,
    defaultSpeed : 6,
    defaultZoom  : 1.5,
    randomColor: function() {
        const r = Math.floor(Math.random() * 200 + 50);
        const g = Math.floor(Math.random() * 200 + 50);
        const b = Math.floor(Math.random() * 200 + 50);
        return `rgb(${r},${g},${b})`;
    },
    randomX: function() {
        return Math.floor( this.world_width * Math.random() + 10 );
    },
    randomY: function() {
        return Math.floor( this.world_height * Math.random() + 10 );
    }
}
