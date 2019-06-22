const mongo = require('mongodbo').MongoClient;

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
        const collection = await db.createCollection(collectionName);
        collection.insertOne(item);
        connection.close();
        return ('created');
    }

    async readItems() {
        let dbArray      = [];
        const connection = await mongo.connect(dbURL);
        const db         = await connection.db(dbName);
        const collection = await db.createCollection(collectionName);
        dbArray          = await collection.find({}).toArray();
        this.items       = dbArray;
        connection.close();
        return this.todoItems;

    }

    updateItemImportant(id) {
        let result = false;

        return result;
    }

    updateItemDone(id) {
        let result = false;

        return result;
    }

    deleteItem(id) {
        let result = false;

        return result;
    }

}


module.exports = daoMongoDB;