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
    insert(key, value) {

        if (this.key == null) {
            this.key = key;
            this.value = value;
        }
        else if (key < this.key) {
            
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            else {
                this.left.insert(key, value);
            }
        }
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }

    find(key){
        if(this.key === key){
            return this.value;
        }
        else if (key < this.key && this.left){
            this.left.find(key);
        }
        else if(key > this.key && this.left){
            this.fight.find(key);
        }
        else {
            throw new Error('key error');
        }
    }

    remove(key){
        if (this.key === key){
            if (this.left && this.right){
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            else if (this.left){
                this._replaceWith(this.left);
            }
            else if (this.right){
                this._replaceWith(this.left);
            }
            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.left){
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    _replaceWith(node){
        if (this == this.parent.left) {
            this.parent.left = node;
        }
        else if (this === this.parent.right) {
            this.parent.right = node;
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
                this.right = null;
            }
        }
    }

    _findMin() {
        if (!this.left){
            return this;
        }
        return this.left._findMin();
    }

}

function main() {
    let bst = new BinarySearchTree();

    bst.insert(3);
    bst.insert(4);
    bst.insert(6);
    bst.insert(9);
    bst.insert(2);
    bst.insert(5);
    bst.insert(7);
bst.insert(1);
    console.log(findThird(bst));
}

main();
function height(node){
    if(!node) return 0;
    var leftHeight = height(node.left);
    var rightHeight = height(node.right);
 
    return Math.max(leftHeight, rightHeight) + 1;
 }

 function findThird(tree){
    let currentNode = tree; 

    while (currentNode.right !== null){
        currentNode = currentNode.right;
    }
    let parent = currentNode.parent;

    if(currentNode.left !==null || parent.left !== null)
        return parent.key;

    if(parent.left !== null){
        let newNode = parent.left;
        while (newNode.right !== null){
            newNode = newNode.right;
        }
        return newNode.key;
    }
 }

 function isMatch(tree1, tree2) {
    if tree1.key 
 }
