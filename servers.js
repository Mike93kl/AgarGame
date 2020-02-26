const express   = require('express');
const socket_io = require('socket.io');
const app       = express();

app.use(express.static(__dirname + '/public'));

const express_server = app.listen(process.env.PORT || 8080);
const io_server = socket_io(express_server);

module.exports = {app,io: io_server};
