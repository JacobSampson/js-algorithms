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
    let root = new LinkedNode(1);
    root.add(2);
    root.add(3);
    root.add(4);
    root.add(5);
    root.add(4);
    root.add(3);
    root.add(2);
    root.add(1);

    console.log(isPalindrome(root, 9));
})();

function isPalindrome(root, size) {
    let visitedNodes = [];

    let currNode = root;
    for (let i = 0; i < Math.floor(size / 2); ++i) {
        visitedNodes.push(currNode);
        currNode = currNode.next;
    }

    if (size % 2 == 1) {
        currNode = currNode.next;
    }

    let visitedNode = null;
    while (visitedNodes.length > 0) {
        visitedNode = visitedNodes.pop();
        if (currNode.data != visitedNode.data) {
            return false;
        }
        currNode = currNode.next;
    }

    return true;
}