class LinkedNode {
  constructor(data, next = null) {
    this._data = data;
    this._next = next;
  }

  add(data) {
    let newNode = new LinkedNode(data);

    let currNode = this;

    while (currNode._next != null) {
      currNode = currNode._next;
    }
    currNode._next = newNode;
  }
}

function LinkedList(root) {
  this.root = root;

  this.deleteNode = function (data) {
    let currNode = this.root;

    if (currNode._data === data) {
      return currNode._next;
    }

    while (currNode._next != null) {
      if (currNode._next._data === data) {
        currNode._next = currNode._next._next;
        return root;
      }
      currNode = currNode._next;
    }
    return this.root;
  };

  this.add = function (node) {
    this.root.add(node);
  };
}

(function () {
  let root = new LinkedNode(2);
  let list = new LinkedList(root);
  list.add(4);
  list.add(2);
  list.add(78);
  list.add(5);
  list.add(1);

  list.deleteNode(78);
})();
