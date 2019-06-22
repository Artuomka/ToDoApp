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

    createItem(item) {
        this.todoItems.push(item);
        return ('created');
    }

    readItems() {
        return this.todoItems;
    }

    updateItemImportant(id) {
        let result = false;
        for (let i = 0; i < this.todoItems.length; i++) {
            if (id === this.todoItems[i].id) {
                const currentImportant = this.todoItems[i].important;
                this.todoItems[i].important = !currentImportant;
                result = true;
                return result;
            }
        }
        return result;
    }

    updateItemDone(id) {
        let result = false;
        for (let i = 0; i < this.todoItems.length; i++) {
            if (id === this.todoItems[i].id) {
                const currentDone = this.todoItems[i].important;
                this.todoItems[i].done = !currentDone;
                result = true;
                return result;
            }
        }
        return result;
    }

    deleteItem(id) {
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