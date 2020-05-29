class Node {
    constructor(data) {
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }

    addChild(data) {
        return data < this.data ? this.leftChild = new Node(data) : this.rightChild = new Node(data);
    }
}

function inorderTraversal(currNode, visited) {
    if (currNode == null) {
        return;
    } else {
        inorderTraversal(currNode.leftChild, visited);
        visited.push(currNode);
        inorderTraversal(currNode.rightChild, visited);
    }
}

function postorderTraversal(currNode, visited) {
    if (currNode == null) {
        return;
    } else {
        inorderTraversal(currNode.leftChild, visited);
        inorderTraversal(currNode.rightChild, visited);
        visited.push(currNode);
    }
}

function preorderTraversal(currNode, visited) {
    if (currNode == null) {
        return;
    } else {
        visited.push(currNode);
        inorderTraversal(currNode.leftChild, visited);
        inorderTraversal(currNode.rightChild, visited);
    }
}

(function() {
    Node.prototype.toString = function test() {
        return "sd";
    }

    let root = new Node(5);
    let child1 = root.addChild(2);
    let child2 = root.addChild(7);

    let visited = [];
    inorderTraversal(root, visited)
    console.log(visited);

})();