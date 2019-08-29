const mongo          = require('mongodb').MongoClient;
const dbURL          = "mongodb://127.0.0.1:27017/";
const dbName         = 'projects_db';
const collectionName = 'projects';

class daoMongoDB {
    constructor() {
        this.projectItems = [];
    }

    async createList(item) {
        const connection = await mongo.connect(dbURL);
        const db         = await connection.db(dbName);
        const collection = await db.createCollection(collectionName);
        collection.insertOne(item);
        const {listID} = item;
        const oldItem = await this.searchItem(listID);
        const oldItemID = oldItem._id.toString();
        await collection.updateOne({listID: listID},
            {
                $set: {listID: oldItemID}
            }
        );
        connection.close();
        return (this.searchItem(oldItemID));
    }

    async readLists() {
        const connection  = await mongo.connect(dbURL);
        const db          = await connection.db(dbName);
        const collection  = await db.createCollection(collectionName);
        let dbArray       = await collection.find({}).toArray();
        for (let i =0; i<dbArray.length; i++){
            dbArray[i].listID = dbArray[i]._id;
        }
        this.projectItems = dbArray;
        connection.close();
        return this.projectItems;
    }

    async updateList(changeData) {
        const {listID} = changeData.listID;
        const todoData = changeData.todoData;
        let result        = false;
        let itemForUpdate = await this.searchItem(listID);
        if (itemForUpdate) {
            const connection       = await mongo.connect(dbURL);
            const db               = await connection.db(dbName);
            const collection       = await db.createCollection(collectionName);
            await collection.updateOne({listID: listID},
                {
                    $set: {todoData: todoData}
                }
            );
            result = true;
            connection.close();
            return result;
        } else {
            return result;
        }
    };

    async deleteProject(listID) {
        let result       = false;
        const connection = await mongo.connect(dbURL);
        const db         = await connection.db(dbName);
        const collection = await db.createCollection(collectionName);
        const delResult  = await collection.deleteOne({listID: listID});
        if (delResult.length != 0) {
            result = true;
            connection.close();
            return result;
        } else {
            return result;
        }
    }

    async searchItem(listID) {
        let searchResult = false;
        const connection = await mongo.connect(dbURL);
        const db         = await connection.db(dbName);
        const collection = await db.createCollection(collectionName);
        const findItem   = await collection.find({listID: listID}).toArray();
        if (findItem.length > 0 ) {
            connection.close();
            return findItem[0];
        } else {
            return searchResult;
        }
    };

    async editProject(editedProjectData) {
        const {listID, listName} = editedProjectData;
        let result     = false;
        let itemForUpdate = await this.searchItem(listID);
        if (itemForUpdate) {
            const connection       = await mongo.connect(dbURL);
            const db               = await connection.db(dbName);
            const collection       = await db.createCollection(collectionName);
            await collection.updateOne({listID: listID},
                {
                    $set: {listName: listName}
                }
            );
            result = true;
            connection.close();
            return result;
        } else {
            return result;
        }
    };
}

module.exports = daoMongoDB;