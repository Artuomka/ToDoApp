class daoProjectsMock {
    constructor() {
        this.id           = 0;
        this.ProjectItems = [];
        this.ProjectItems.push(
        {listName: 'Todo List 1', listID: 1},
        );
    }

    async createItem(item) {
        this.ProjectItems.push(item);
        return ('created');
    }

    async readItems() {
        return this.ProjectItems;
    }

    async updateItem(updateData) {
        const id = updateData.listID;
        const newListName = updateData.listName;
        let result = false;
        for (let i = 0; i < this.ProjectItems.length; i++) {
            if (id === this.ProjectItems[i].id) {
                this.ProjectItems[i].listName = newListName;
                result                         = true;
                return result;
            }
        }
        return result;
    }

    async deleteItem(id) {
        let result = false;
        for (let i = 0; i < this.ProjectItems.length; i++) {
            if (id === this.ProjectItems[i].id) {
                this.ProjectItems.splice(i, 1);
                result = true;
                return result;
            }
        }
        return result;
    }
}

module.exports = daoProjectsMock;