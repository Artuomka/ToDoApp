const DaoMock      = require('./dal/daoMock');
const express      = require('express');
const path         = require('path');
const app          = express();
const server       = require('http').Server(app);
const io           = require('socket.io')(server);
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');

const port             = 80;
const urlencodedParser = bodyParser.urlencoded({extended: false});


const newDaoMock = new DaoMock;
console.log(newDaoMock.readItems());


const connections = [];

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


io.on('connection', (socket) => {
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length)

    socket.on('disconnect', (data) => {
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected: %s sockets connected', connections.length);
    });

    socket.on('createTodoItem', (label) => {
        console.log('Create todoItem emitted. Data: ' + label);
    });

});

server.listen(port, () => {
    console.log('Server running on port ' + port);
});