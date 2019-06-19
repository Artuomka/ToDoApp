class daoMock {
    constructor() {
        this.todoItems = [];
        this.todoItems.push(
            'Buy a milk',
            'Call mam',
            'Clean the Room',
            'Repair DVD Player');
    }

    createItem(item) {
        this.todoItems.push(item);
        return ('created');
    }

    readItems() {
        return this.todoItems;
    }

    updateItem(item) {
        for (let i = 0; i < this.todoItems.length; i++) {
            if (item === this.todoItems[i]) {
                this.todoItems[i] = item;
                return ('updated');
            } else {
                return ('notFound');
            }
        }
    }

    deleteItem(item) {
        for (let i = 0; i < this.todoItems.length; i++) {
            if (item === this.todoItems[i]) {
               this.todoItems.splice(i, 1);
                return ('deleted');
            } else {
                return ('notFound');
            }
        }
    }
}

module.exports = daoMock;