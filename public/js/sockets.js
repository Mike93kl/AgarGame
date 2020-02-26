const socket = io('http://192.168.10.4:8080')

function init() {
    socket.emit('init', {name: 'mike'});
}


socket.on('init', (data) => {
    orbs = data.orbs;
    player.location = data.player_location;
    players = data.players;
    emit_tick();
    draw();
})

socket.on('tock', (data) => {
    players = data.players;
    player.location = data.player_location;
});

socket.on('newOrb', (data) => {
    orbs.splice(data.index,1,data.orb);
});

function emit_tick() {
    setInterval(() => {
        socket.emit('tick', {
            x: dirX, y: dirY
        })
    }, 33);
}
