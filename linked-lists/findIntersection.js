class LinkedNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    add(data) {
        let newNode = new LinkedNode(data);

        this.size++;
        if (this.root == null) {
            return this.root = newNode;
        }

        let currNode = this.root;
        while (currNode.next != null) {
            currNode = currNode.next;
        }
        return currNode.next = newNode;
    }
}

(function() {
    let list = new LinkedList();
    list.add(0);
    list.add(1);
    list.add(2);
    let intersectingNode = list.add(3);
    list.add(4);

    let list2 = new LinkedList();
    list2.add(-1);
    list2.add(-2);
    let lastNode = list2.add(-3);
    lastNode.next = intersectingNode;

    console.log(intersectingNode === findIntersection(list, list2));
})();

function findIntersection(list1, list2) {
    
}