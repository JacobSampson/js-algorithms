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

export { LinkedList, LinkedNode };
