class daoMock {
    constructor() {
        this.id        = 0;
        this.todoItems = [];
        this.todoItems.push(
            {label: 'Buy a milk', imortant: false, done: false, id: 0},
            {label: 'Call mam', imortant: false, done: false, id: 1},
            {label: 'Clean the Room', imortant: false, done: false, id: 2},
            {label: 'Repair DVD Player', imortant: false, done: false, id: 3});
    }

    async createItem(item) {
        this.todoItems.push(item);
        return ('created');
    }

    async readItems() {
        return this.todoItems;
    }

    async updateItemImportant(id) {
        let result = false;
        for (let i = 0; i < this.todoItems.length; i++) {
            if (id === this.todoItems[i].id) {
                const currentImportant      = this.todoItems[i].important;
                this.todoItems[i].important = !currentImportant;
                result                      = true;
                return result;
            }
        }
        return result;
    }

    async updateItemDone(id) {
        let result = false;
        for (let i = 0; i < this.todoItems.length; i++) {
            if (id === this.todoItems[i].id) {
                const currentDone      = this.todoItems[i].done;
                this.todoItems[i].done = !currentDone;
                result                 = true;
                return result;
            }
        }
        return result;
    }

    async deleteItem(id) {
        let result = false;
        for (let i = 0; i < this.todoItems.length; i++) {
            if (id === this.todoItems[i].id) {
                this.todoItems.splice(i, 1);
                result = true;
                return result;
            }
        }
        return result;
    }


}

module.exports = daoMock;