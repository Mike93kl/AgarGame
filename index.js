// require servers
const {io} = require('./servers');
const game = require('./game/Game');

io.sockets.on('connect', (socket) => {
    let player;
    socket.on('init', (data) => {
        socket.join('GAME');
        player = game.addPlayer(socket.id,data.name);
        socket.emit('init', {
            orbs: game.orbs,
            players: game.players,
            playerX: player.location.x,
            playerY: player.location.y
        });
    });



});
