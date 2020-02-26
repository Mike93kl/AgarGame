function draw(event) {

    context.setTransform(1,0,0,1,0,0);

    context.clearRect(0,0,canvas.width,canvas.height);

    // cam follow player
    const camX = -player.location.x + canvas.width / 2;
    const camY = -player.location.y + canvas.height / 2;
    context.translate(camX,camY);


    // draw orbs
    orbs.forEach((orb) => {
        context.beginPath();
        context.fillStyle = orb.color;
        context.arc(orb.location.x, orb.location.y, orb.radius, 0 , 2 * Math.PI);
        context.fill();
    });
    
    players.forEach((player) => {
        context.beginPath();
        context.fillStyle = player.color;
        context.arc(player.location.x, player.location.y, player.radius, 0 , 2 * Math.PI);
        context.fill();
    });

    requestAnimationFrame(draw);
}
