const socket = io('http://localhost:8080')

function init() {
    socket.emit('init', {name: 'mike'});
}


socket.on('init', (data) => {
    orbs = data.orbs;
    player.location.x = data.playerX;
    player.location.y = data.playerY;
    players = data.players;
    console.log(player)
    draw();
})
