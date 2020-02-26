const wHeight = $(window).height();
const wWidth = $(window).width();
let player = {location:{}, radius: 7, color: 'red'};
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
        //console.log($event.clientX, $event.clientY)
        //const angle = Math.atan2($event.clientX, $event.clientY) * 180 / Math.PI;
        const mX = $event.clientX;
        const mY = $event.clientY;

        const distance = Math.sqrt(
            Math.pow(mX - player.x, 2) + Math.pow(mY - player.y,2)
        );

        dirX = ( mX - player.x ) / distance;
        dirY = ( mY - player.y ) / distance;

    });
}


