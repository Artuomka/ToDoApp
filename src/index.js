const DaoMock    = require('./dal/daoMock');
const DaoMongoDB = require('./dal/daoMongoDB');

const express      = require('express');
const path         = require('path');
const app          = express();
const server       = require('http').Server(app);
const io           = require('socket.io')(server);
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');

const port             = 80;
const urlencodedParser = bodyParser.urlencoded({extended: false});


// const todoItemObject = new DaoMock;
const todoItemObject = new DaoMongoDB;

//console.log(todoItemObject.readItems());

const connections = [];

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

io.on('connection', async (socket) => {
    connections.push(socket);
    const itemsFromDB = await todoItemObject.readItems();
    eventEmit('setItems', itemsFromDB);
    console.log('Connected: %s sockets connected', connections.length)

    socket.on('disconnect', (data) => {
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected: %s sockets connected', connections.length);
    });

    socket.on('createTodoItem', async (item) => {
        console.log('Create todoItem emitted. Data: ' + JSON.stringify(item));
        const result = await todoItemObject.createItem(item);
        if (result === 'created') {
            console.log('todo item was created');
            console.log(todoItemObject.readItems());
        } else {
            console.log("todo item wasn't created");
        }

    });

    socket.on('deleteItem', async (id) => {
        const result = await todoItemObject.deleteItem(id);
        if (result) {
            console.log('Item ' + id + ' deleted');
        } else {
            console.log('Item not found');
        }
    });

    socket.on('onToggleImportant', async (id) => {
        const result = await todoItemObject.updateItemImportant(id);
        if (result) {
            console.log('Item ' + id + ' toggle important');
        } else {
            console.log('Item not found');
        }
    });

    socket.on('onToggleDone', async (id) => {
        const result = await todoItemObject.updateItemDone(id);
        if (result) {
            console.log('Item ' + id + ' toggle done');
        } else {
            console.log('Item not found');
        }
    });


    function eventEmit(event, data) {
        socket.emit(event, data);
    }
});


server.listen(port, () => {
    console.log('Server running on port ' + port);
});