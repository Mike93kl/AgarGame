const {Orb,Player} = require('./game_items/include');
const settings = require('./config/default_settings');


class Game {
    constructor() {
        this.orbs = []; this.players = [];
        for(let i=0;i<settings.defaultOrbNumber;i++) {
            this.orbs.push(new Orb(settings.defaultOrbRadius, settings.randomColor()));
        }
    }

    addPlayer(id, name, color = null) {
        const player = new Player(id,name,settings.defaultRadius, color);
        this.players.push(player);
        return player;
    }

    destroyOrb(index) {
        this.orbs.splice(index,1, new Orb(settings.defaultOrbRadius));
    }
}

module.exports = new Game();
