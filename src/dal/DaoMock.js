class DaoMock {
    constructor() {
        this.id           = 0;
        this.ProjectItems = [];
        this.ProjectItems.push(
            // {
            //     listName: 'List 1',
            //     listID: 1,
            //     todoData: [
            //         {label: 'Buy a milk', important: false, done: false, id: 0},
            //         {label: 'Call mam', important: false, done: false, id: 1},
            //         {label: 'Clean the Room', important: false, done: false, id: 2},
            //         {label: 'Repair DVD Player', important: false, done: false, id: 3}
            //     ]
            // },
        );
    }

    async createList(item) {
        const newItem = item;
        newItem.listID = this.newID();
        this.ProjectItems.push(newItem);
        return (newItem.listID);
    }

    async readLists() {
        return this.ProjectItems;
    }

    async updateList(changeData) {
        const {listID} = changeData.listID;
        const todoData = changeData.todoData;
        let result     = false;
        for (let i = 0; i < this.ProjectItems.length; i++) {
            if (listID === this.ProjectItems[i].listID) {
                this.ProjectItems[i].todoData = todoData;
                result = true;
                return result;
            }
        }
        return result;
    }

    async deleteProject(listID) {
        let result = false;
        for (let i = 0; i < this.ProjectItems.length; i++) {
            if (listID === this.ProjectItems[i].listID) {
                this.ProjectItems.splice(i, 1);
                result = true;
                return result;
            }
        }
        return result;
    }

    async editProject (editedProjectData){
        const {listID, listName} = editedProjectData;
        let result     = false;
        for (let i = 0; i < this.ProjectItems.length; i++) {
            if (listID === this.ProjectItems[i].listID) {
                this.ProjectItems[i].listName = listName;
                result = true;
                return result;
            }
        }
        return result;
    }

    newID(){
        return '_' + Math.random().toString(36).substr(2, 9);
    };
}
module.exports = DaoMock;

