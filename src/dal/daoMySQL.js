const mysql = require('mysql');

class daoMySQL {
    constructor() {
        this.todoItems = [];

    }

    async createConnector() {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'todo'
        });
        return connection;
    };

    async createDB() {
        const con  = await this.createConnector();
        let result = false;
        con.connect((err) => {
            if (err) {
                return result;
            }
            console.log('Connected for creation DB');
            con.query("CREATE DATABASE IF NOT EXISTS todo", (err, res) => {
                if (err) {
                    return result;
                }
                result = true;
                console.log("Database created");
                return result;
            });


        });
    };

    async createTable() {
        const con  = await this.createConnector();
        let result = false;
        con.connect((err) => {
            if (err) {
                console.log('Error of connection in table creating ' + err.toString());
                return result;
            }
            console.log('Connected for creation table');
            const sqlQuery = "CREATE TABLE IF NOT EXISTS items " +
                "(" +
                "label VARCHAR(255) NOT NULL," +
                "important BOOLEAN NOT NULL," +
                "done BOOLEAN NOT NULL," +
                "id INT," +
                "PRIMARY KEY (label)" +
                ")";

            con.query(sqlQuery, (err, res) => {
                if (err) {
                    console.log('Error of query in table creating ' + err.toString());
                    return result;
                }
                result = true;
                console.log('Table created');

                return result;
            });
        });
    };


    async createItem(item) {
        const con           = await this.createConnector();
        let result          = false;
        const itemLabel     = item.label;
        const itemImportant = item.important;
        const itemDone      = item.done;
        const itemID        = item.id;

        con.connect((err) => {
            if (err) {
                console.log('Error in creating ' + err.toString());
                return result;
            }
            console.log('Connected');
            const sqlQuery = "INSERT INTO items (label, important, done, id)" +
                "VALUES ('" + itemLabel + "', " + itemImportant + ", " + itemDone + ", " + itemID + ")";
            con.query(sqlQuery, (err, res) => {
                if (err) {
                    console.log('Error in creating query' + err.toString());
                    return result;
                }
                console.log('1 item inserted');
            });

        });

        this.todoItems = await this.readItems();
        return ('created');
    };

    async readItems() {
        const con = await this.createConnector();
        await con.connect((err) => {
            if (err) {
                console.log('Error in reading connection ' + err.toString());
                return false;
            }
            con.query("SELECT * FROM items", (err, result, fields) => {
                if (err) {
                    console.log('Error in reading query ' + err.toString());
                    return false;
                }
                let dbArray = result;
                for (let i = 0; i < dbArray.length; i++) {
                    dbArray[i].important = Boolean(dbArray[i].important);
                    dbArray[i].done      = Boolean(dbArray[i].done);
                }
                this.todoItems = dbArray;

            });
        });
        return this.todoItems;
    };

    async updateItemImportant(id) {
        const con   = await this.createConnector();
        let oldItem = this.searchInCurrentArray(id);
        let oldItemState = oldItem.important;
        //    let oldItemState = oldItem.important;
        console.log('OldItemState ' + oldItemState);
        await con.connect((err) => {
            if (err) {
                console.log('Error in updatingImportant ' + err.toString());
            }
            console.log('Connected');
            const sqlQuery = "UPDATE items SET important=" + !oldItemState
                + " WHERE id = " + id;


            con.query(sqlQuery, (err, result) => {
                if (err) {
                    console.log('Error in updatingImportant query' + err.toString());
                    return result;
                }
                console.log('1 item updated');
            });

        });
        this.todoItems = await this.readItems();
        return ('updated');
    };

    async updateItemDone(id) {

            const con   = await this.createConnector();
            let oldItem = this.searchInCurrentArray(id);
            let oldItemState = oldItem.done;
            //    let oldItemState = oldItem.important;
            console.log('OldItemState ' + oldItemState);
            await con.connect((err) => {
                if (err) {
                    console.log('Error in updatingDone ' + err.toString());
                }
                console.log('Connected');
                const sqlQuery = "UPDATE items SET done=" + !oldItemState
                    + " WHERE id = " + id;


                con.query(sqlQuery, (err, result) => {
                    if (err) {
                        console.log('Error in updatingDone query' + err.toString());
                        return result;
                    }
                    console.log('1 item updated');
                });

            });
            this.todoItems = await this.readItems();
            return ('updated');

    };

    async deleteItem(id) {
        const con = await this.createConnector();

        con.connect((err) => {
            if (err) {
                console.log('Error in deleting ' + err.toString());
            }
            console.log('Connected');
            const sqlQuery = "DELETE FROM items WHERE id = '" + id + "'";

            con.query(sqlQuery, (err, res) => {
                if (err) {
                    console.log('Error in deleting query' + err.toString());
                    return result;
                }
                console.log('1 item deleted');
            });

        });
        this.todoItems = await this.readItems();
        return ('deleted');
    }

  /*  async searchItem(id) {
        const con =  await this.createConnector();
        con.connect((err) => {
            if (err) {
                console.log('Error in searchItems connection ' + err.toString());
                return false;
            }

            const sqlQuery = "SELECT * FROM items WHERE id = '" + id + "'";
            con.query(sqlQuery, (err, result, fields) => {
                if (err) {
                    console.log('Error in searchItems query ' + err.toString());
                    return false;
                }
                let foundItems = result;
                let foundItem  = foundItems[0];
                return foundItem;
            });
        });

    }
*/

    searchInCurrentArray(id){
        let foundItem = undefined;
        for (let i = 0; i < this.todoItems.length; i++) {
            if(id===this.todoItems[i].id){
                foundItem=this.todoItems[i];
                return foundItem;
            }
        }
    }

}


module.exports = daoMySQL;