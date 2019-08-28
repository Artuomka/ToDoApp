const DaoMongoDB             = require('./dal/daoMongoDB');
const DaoMock = require('./dal/DaoMock');

const express      = require('express');
const path         = require('path');
const app          = express();
const server       = require('http').Server(app);
const io           = require('socket.io')(server);
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');

const port             = 9000;
const urlencodedParser = bodyParser.urlencoded({extended: false});

const projectsObject = new DaoMock();

//const todoItemObject = new DaoMongoDB;

const connections = [];

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

io.on('connection', async (socket) => {
    connections.push(socket);

    socket.on('getProjects', async () => {
        console.log('get Projects Emitted');
        const projects = await projectsObject.readLists();
        eventEmit('setProjects', projects);
    });

    socket.on('onListChanged', async (changeData) => {
        console.log('get List Changed Emittes');
        const {listID} = changeData.listID;
        const todoData = changeData.todoData;
        console.log("List for change " + listID);
        console.log("Data for change " + JSON.stringify(todoData));
        const result = projectsObject.updateList(changeData);
        if (result) {
            console.log(listID + " updated");
        } else {
            console.log(listID + " not found");
        }

    });

    console.log('Connected: %s sockets connected', connections.length);

    socket.on('disconnect', (data) => {
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected: %s sockets connected', connections.length);
    });

    socket.on('onListAdd', async (newList) => {
        const {listName, listID} = newList;
        console.log("List Add Emitted. New listName " + listName + " new list ID " + listID);
        const result = await projectsObject.createList(newList);
        if (result) {
            console.log("created");
        } else {
            console.log("item wasn't created");
        }
    });

    socket.on('onProjectEdited', async (editedProjectData) => {
        console.log('on Project Edited Emitted');
        const result = await projectsObject.editProject(editedProjectData);
        if (result) {
            console.log('Project was edited');
        } else {
            console.log("Project wasn't found");
        }

    });

    socket.on ('onProjectDeleted', async (listID) =>{
        console.log('on Project Deleted Emitted');
        const result = await projectsObject.deleteProject(listID);
        if (result) {
            console.log('Project was deleted');
        } else {
            console.log("Project wasn't found");
        }
    });

    function eventEmit(event, data) {
        socket.emit(event, data);
    }
});

server.listen(port, () => {
    console.log('Server running on port ' + port);
});