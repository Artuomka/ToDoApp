const mongo          = require('mongodb').MongoClient;
const dbURL          = "mongodb://127.0.0.1:27017/";
const dbName         = 'items_db';
const collectionName = 'items';

class daoMongoDB {
    constructor() {
        this.todoItems = [];
    }

    async createItem(item) {
        const connection = await mongo.connect(dbURL);
        const db         = await connection.db(dbName);
        const collection = await db.createCollection(collectionName)
        console.log('Item for create item ' + JSON.stringify(item));
        collection.insertOne(item);
        connection.close();
        return ('created');
    }

    async readItems() {
        const connection = await mongo.connect(dbURL);
        const db         = await connection.db(dbName);
        const collection = await db.createCollection(collectionName);
        let dbArray      = await collection.find({}).toArray();
        this.todoItems   = dbArray;
        connection.close();
        console.log('Items Array From DB' + JSON.stringify(dbArray));
        return this.todoItems;
    }

    async updateItemImportant(id) {
        let result        = false;
        let itemForUpdate = await this.searchItem(id);
        if (itemForUpdate) {
            const currentImportant = itemForUpdate.important;
            const connection       = await mongo.connect(dbURL);
            const db               = await connection.db(dbName);
            const collection       = await db.createCollection(collectionName);
            await collection.updateOne({id: id},
                {
                    $set: {important: !currentImportant}
                }
            );
            result = true;
            return result;
        } else {
            return result;
        }
    };

    async updateItemDone(id) {
        let result          = false;
        const itemForUpdate = await this.searchItem(id);
        if (itemForUpdate) {
            const currentDone = itemForUpdate.done;
            const connection  = await mongo.connect(dbURL);
            const db          = await connection.db(dbName);
            const collection  = await db.createCollection(collectionName);
            await collection.updateOne({id: id},
                {
                    $set: {done: !currentDone}
                }
            );
            result = true;
            return result;
        } else {
            return result;
        }
    };

    async deleteItem(id) {
        let result       = false;
        const connection = await mongo.connect(dbURL);
        const db         = await connection.db(dbName);
        const collection = await db.createCollection(collectionName);
        const delResult  = await collection.deleteOne({id: id});
        if (delResult.length != 0) {
            result = true;
            return result;
        } else {
            return result;
        }
    }

    async searchItem(id) {
        let searchResult = false;
        const connection = await mongo.connect(dbURL);
        const db         = await connection.db(dbName);
        const collection = await db.createCollection(collectionName);
        const findItem   = await collection.find({id: id}).toArray();
        //   console.log("Item finded " +JSON.stringify(findItem));
        if (findItem.length != 0) {
            return findItem[0];
        } else {
            return searchResult;
        }

    };

}

module.exports = daoMongoDB;