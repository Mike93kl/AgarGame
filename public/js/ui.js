const wHeight = $(window).height();
const wWidth = $(window).width();
let player = {location:{}, radius: 10, color: 'red'};
let orbs = [];
let players = [];

let dirX = 0;
let dirY = 0;

const canvas = document.querySelector('#the-canvas');
const context = canvas.getContext('2d');
canvas.width = wWidth;
canvas.height = wHeight;

$(window).load(() => {
    $('#loginModal').modal('show');
});

$('.name-form').submit((event) => {
    event.preventDefault();
    player['name'] = document.querySelector('#name-input').value;
    $('#loginModal').modal('hide');
    $('#spawnModal').modal('show');
    document.querySelector('.player-name').innerHTML = player.name;
});

$('.start-game').click((event) => {
    $('.modal').modal('hide');
    document.querySelectorAll('.hiddenOnStart').forEach(e => e.removeAttribute('hidden'));
    init();
    initMouseListener();
});

function initMouseListener(){
    canvas.addEventListener('mousemove', $event => {
        
        const x = $event.clientX;
        const y = $event.clientY;

        const angle = Math.atan2(y - canvas.height/2, x - canvas.width/2) * 180 / Math.PI;
        if( angle >= 0 && angle < 90 ) {
            dirX = 1 - (angle / 90);
            dirY = -(angle/90)
        }else if ( angle >= 90 && angle <= 180 ) {
            dirX = -(angle-90)/90;
            dirY = -(1 - ((angle - 90) / 90));
        }else if(angle >= -180 && angle < -90) {
            dirX = (angle+90)/90;
            dirY = (1 + ((angle+90)/ 90))
        }else if(angle < 0 && angle >= -90) {
            dirX = (angle+90)/90;
            dirY = (1 - ((angle+90)/90));
        }

    });
}


function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}
