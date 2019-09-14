class LinkedNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    add(data) {
        let currNode = this;

        while (currNode.next != null) {
            currNode = currNode.next;
        }

        currNode.next = new LinkedNode(data);
    }
}


(function() {
    let root = new LinkedNode(1);
    root.add(2);
    root.add(3);
    root.add(4);
    root.add(5);
    root.add(6);
    root.add(7);
    root.add(8);
    root.add(9);

    console.log(findKFromEnd(root, 3));
})();

function findKFromEnd(root, numFromEnd) {
    let visitedNodes = [root];
    
    let currNode = root;
    while (currNode.next != null) {
        currNode = currNode.next;
        visitedNodes.push(currNode);
    }
    
    if (numFromEnd > (visitedNodes.length - 1)) {
        return null;
    }

    return visitedNodes[visitedNodes.length - 1 - numFromEnd];
}