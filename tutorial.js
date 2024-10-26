"use strict";
class StorageContainer {
    constructor() {
        this.contents = [];
    }
    addItem(item) {
        this.contents.push(item);
    }
    getItem(idx) {
        return this.contents[idx];
    }
}
const usernames = new StorageContainer();
usernames.addItem("pedrotech");
usernames.addItem("echobr");
console.log(usernames.getItem(0));
const friendsCount = new StorageContainer();
friendsCount.addItem(12);
friendsCount.addItem(33);
console.log(friendsCount.getItem(0));
