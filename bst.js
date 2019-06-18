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
        if (this.key === key){
            if (this.left && this.right){
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key)
            }
            else if (this.left){
                this._replaceWith(this.left)
            }
            else if (this.right){
                this._replaceWith(this.left)
            }
            else {
                this._replaceWith(null)
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key)
        }
        else if (key > this.key && this.left){
            this.right.remove(key)
        }
        else {
            throw new Error('Key Error')
        }
    }

    _replaceWith(node){
        if (this == this.parent.left) {
            this.parent.left = node
        }
        else if (this === this.parent.right) {
            this.parent.right = node
        }
        
        if (node){
            node.parent = this.parent;
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null
            }
        }
    }

    _findMin() {
        if (!this.left){
            return this
        }
        return this.left._findMin();
    }

}