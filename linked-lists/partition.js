class LinkedNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    add(data) {
        let newNode = new LinkedNode(data);

        let currNode = this;
        while(currNode.next != null) {
            currNode = currNode.next;
        }
        return currNode.next = newNode;
    }
}

(function() {
    let data = [5, 8, 5, 10, 2, 1];

    let root = new LinkedNode(3);
    for (let dataPoint of data) {
        root.add(dataPoint);
    }

    printList(root);

    root = partitionList(root, 5);

    console.log("PARTITIONED LIST");
    printList(root)
})();

function partitionList(list, partitionValue) {
    let elementsBelowPartition = [];

    let root = list;

    let currNode = list;
    let lastNode = null;
    while(currNode.next != null) {
        if (currNode.data < partitionValue) {
            if (currNode == root) {
                elementsBelowPartition.push(currNode);
                root = currNode.next;
                currNode = currNode.next;
                continue;
            }
            // Last node point to next node
            elementsBelowPartition.push(currNode);
            lastNode.next = currNode.next;
        } else {
            lastNode = currNode;
        }
        currNode = currNode.next;
    }
    // Account for last node
    if (currNode.data < partitionValue) {
        elementsBelowPartition.push(currNode);
        lastNode.next = null;
    }

    // Add all elements below partition to a new list
    for (let i = 0; i < elementsBelowPartition.length - 1; ++i) {
        elementsBelowPartition[i].next = elementsBelowPartition[i + 1];
    }
    // Set the final node to point to the old root
    elementsBelowPartition[elementsBelowPartition.length - 1].next = root;

    // Return the root of the next list as the root
    return elementsBelowPartition[0];
}

function printList(list) {
    console.log(list.data);

    let currNode = list;

    while(currNode.next != null) {
        currNode = currNode.next;
        console.log(currNode.data);
    }
}