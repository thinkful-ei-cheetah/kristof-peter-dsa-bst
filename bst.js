/* eslint-disable indent */
/* eslint-disable strict */
class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }
    insert(item) {
        if (this.key === null) {
            this.key = item;
        }
        else if (item.key < this.key) {
            if (this.left === null) {
                this.left = BinarySearchTree(item.key, item.value, this)
            }
            else {
                this.left.insert(item)
            }
        }
        else {
            if (this.right === null) {
                this.right = BinarySearchTree(item.key, item.value, this)
            }
            else {
                this.right.insert(item)
            }
        }
    }

    find(key){
        if(this.key === key){
            return this.value
        }
        else if (key < this.key && this.left){
            this.left.find(key)
        }
        else if(key > this.key && this.left){
            this.fight.find(key)
        }
        else {
            throw new Error('key error')
        }
    }

    remove(key){
        
    }
}