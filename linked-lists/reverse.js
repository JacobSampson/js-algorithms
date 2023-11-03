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
      return (this.root = newNode);
    }

    let currNode = this.root;
    while (currNode.next != null) {
      currNode = currNode.next;
    }
    return (currNode.next = newNode);
  }
}

function reverseList(list) {
  let newList = new LinkedList();
  let reverseListStack = [];

  let currNode = list.root;
  while (currNode != null) {
    reverseListStack.push(currNode.data);
    currNode = currNode.next;
  }

  while (reverseListStack.length > 0) {
    newList.add(reverseListStack.pop());
  }

  return newList;
}

(function () {
  let list = new LinkedList();
  list.add(0);
  list.add(1);
  list.add(2);
  list.add(3);
  list.add(4);
  list.add(5);

  let newList = reverseList(list);
})();
