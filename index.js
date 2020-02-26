// require servers
const {io} = require('./servers');
const game = require('./game/Game');
const settings  = require('./game/config/default_settings');

io.sockets.on('connect', (socket) => {
    let player;
    socket.on('init', (data) => {
        socket.join('GAME');
        player = game.addPlayer(socket.id,data.name);
        socket.emit('init', {
            orbs: game.orbs,
            players: game.players,
            player_location: player.location
        });

        // emit tock every 33ms
        setInterval(() => {
            socket.emit('tock', {
                player_location: player.location,
                players: game.players
            });
        }, 33)


        socket.on('tick', (mouseData) => {
            const xV = mouseData.x;
            const yV = mouseData.y;
            const speed = player.speed;
            if((player.location.x < 5 && xV < 0) || ( player.location.x > settings.world_width && (xV > 0)) ) {
                player.location.y -= speed * yV;
            }else if((player.location.x < 5 && yV > 0) || ((player.location.y > settings.world_height) && (yV < 0)) ){
                player.location.x += speed * xV;
            }else {
                player.location.x += speed * xV;
                player.location.y -= speed * yV;
            }

            orbCollision(player,game.orbs)
            .then((index) => {
                player.radius += 1;
                game.destroyOrb(index);
                socket.emit('newOrb', {
                    index, orb: game.orbs[index]
                })
            }).catch((e) => {})
    
        });

    });

});

function orbCollision(player, orbs) {
    return new Promise((resolve,reject) => {
        orbs.forEach((orb,i) => {
            if(orb.collidedWith(player)) {
                console.log('collision');
                resolve(i);
            }
        });
        reject();
    });
}