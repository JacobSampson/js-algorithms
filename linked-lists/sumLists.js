class LinkedNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(data) {
        this.root = null;
        this.size = 0;
    }

    add(data) {
        let newNode = new LinkedNode(data);

        if (this.root == null) {
            this.size = 1;
            return this.root = newNode;
        }

        let currNode = this.root;
        while (currNode.next != null) {
            currNode = currNode.next;
        }

        this.size++;
        return currNode.next = newNode;
    }
}

(function() {
    let list = new LinkedList();

    list.add(7);
    list.add(1);
    list.add(6);

    let list2 = new LinkedList();

    list2.add(5);
    list2.add(9);
    list2.add(2);

    // printList(stringToDigitList("123").root);
    // printList(integerToList(123).root);

    let sumList = sumLists(list, list2);

    printList(sumList.root);
    console.log(`Size: ${sumList.size}`);
})();

function sumLists(list1, list2) {
    let digits = 0;

    let currNode1 = list1.root;
    let currNode2 = list2.root;

    let multiplier = 1;
    while ((currNode1 != null) || (currNode2 != null)) {
        digits += (currNode1 ? currNode1.data * multiplier : 0) + (currNode2 ? currNode2.data * multiplier : 0);

        currNode1 = currNode1 ? currNode1.next : null;
        currNode2 = currNode2 ? currNode2.next : null;

        multiplier *= 10;
    }

    return integerToList(digits);
}

function stringToDigitList(digitString) {
    let newList = new LinkedList();

    for (let i = digitString.length - 1; i >= 0; --i) {
        newList.add(parseInt(digitString.charAt(i)))
    }

    return newList;
}

function integerToList(num) {
    let newList = new LinkedList();

    while (num > 0) {
        newList.add(num % 10);
        num = Math.floor(num / 10);
    }

    return newList;
}

function printList(list) {
    console.log(list.data);

    let currNode = list;

    while(currNode.next != null) {
        currNode = currNode.next;
        console.log(currNode.data);
    }
}