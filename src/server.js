const DaoMongoDB             = require('./dal/daoMongoDB');
const DaoMock = require('./dal/DaoMock');

const express      = require('express');
const path         = require('path');
const app          = express();
const server       = require('http').Server(app);
const io           = require('socket.io')(server);
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');

const urlencodedParser = bodyParser.urlencoded({extended: false});

//const projectsObject = new DaoMock();

const projectsObject = new DaoMongoDB;

const connections = [];
app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

io.on('connection', async (socket) => {
    connections.push(socket);

    socket.on('getProjects', async () => {
        const projects = await projectsObject.readLists();
        eventEmit('setProjects', projects);
    });

    socket.on('onListChanged', async (changeData) => {
        const {listID} = changeData.listID;
        const todoData = changeData.todoData;
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
       const result = await createListWithTrueID(newList, continueCreating);
    });

    async function createListWithTrueID(newList, callback) {
        const resultItem = await projectsObject.createList(newList, callback);
        continueCreating(resultItem);
    }

    function continueCreating (resultItem) {
        if (resultItem) {
            console.log("created new List with ID " +JSON.stringify(resultItem));
            eventEmit('setNewListItem', resultItem);
        } else {
            console.log("item wasn't created");
        }
    }

    socket.on('onProjectEdited', async (editedProjectData) => {
        const result = await projectsObject.editProject(editedProjectData);
        if (result) {
            console.log('Project was edited');
        } else {
            console.log("Project wasn't found");
        }

    });

    socket.on ('onProjectDeleted', async (listID) =>{
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

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
});