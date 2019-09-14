class LinkedNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    add(data) {
        let currNode = this;

        while(currNode.next != null) {
            currNode = currNode.next;
        }

        let newNode = new LinkedNode(data);
        return currNode.next = newNode;
    }
}

(function() {
    let root = new LinkedNode(1);
    root.add(3);
    root.add(4);
    root.add(19);
    let middleNode = root.add(-2);
    root.add(3);
    root.add(3);
    root.add(3);

    let currNode = root;

    console.log(currNode.data);
    while(currNode.next != null) {
        currNode = currNode.next;
        console.log(currNode.data);
    }
    
    deleteMiddle(middleNode);
    currNode = root;

    console.log(currNode.data);
    while(currNode.next != null) {
        currNode = currNode.next;
        console.log(currNode.data);
    }
})();

function deleteMiddle(node) {
    node.data = node.next.data;
    node.next = node.next.next;

    return node;
}