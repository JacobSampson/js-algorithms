class LinkedNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function add(node, data) {
    let currNode = node;
    
    while(currNode.next != null) {
        currNode = currNode.next;
    }

    let newNode = new LinkedNode(data);
    return currNode.next = newNode;
}

(function() {
    let root = new LinkedNode(2);
    add(root, 3);
    add(root, 5);
    add(root, 34);
    add(root, 34);
    add(root, 3);
    add(root, 9);
    add(root, 5);

    // printLinkedList(root);

    removeDuplicates(root);

    printLinkedList(root);
})();

function deleteNode(list, data) {
    let currNode = list;

    if (currNode.data === data) {
        return currNode.next;    
    }

    do {
        if (currNode.next === data) {
            return currNode.next = currNode.next.next;
        }
        currNode = currNode.next;
    } while(currNode != null);

    return list;
}

function removeDuplicates(list) {
    let currNode = list;

    let uniqueNodeData = new Set();

    do {
        // If the node exists in the set, remove it
        if (uniqueNodeData.has(currNode.data)) {
            let nextNode = currNode.next;
            deleteNode(list, currNode);
            currNode = nextNode;
            continue;
        }
        uniqueNodeData.add(currNode.data);

        currNode = currNode.next;
    } while (currNode != null)

}

function printLinkedList(list) {
    let currNode = list;

    do {
        console.log(currNode.data);

        currNode = currNode.next;
    } while(currNode != null);
}