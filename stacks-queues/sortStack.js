class SortStack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }

  push(item) {
    if (!this.size) {
      this.stack.push(item);
    } else {
      let tempStack = [];

      // Insert item in sorted order
      let currItem;
      while (this.stack.length > 0) {
        currItem = this.stack.pop();

        if (item < currItem) {
          tempStack.push(item);
          tempStack.push(currItem);
          break;
        }

        tempStack.push(currItem);

        if (this.stack.length == 0) {
          tempStack.push(item);
        }
      }

      while (tempStack.length > 0) {
        this.stack.push(tempStack.pop());
      }
    }

    this.size++;

    return item;
  }

  pop() {
    if (this.isEmpty()) return null;
    this.size--;

    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.size == 0;
  }
}

(function () {
  let sortStack = new SortStack();

  sortStack.push(1);
  sortStack.push(6);
  sortStack.push(-2);
  sortStack.push(8);
  sortStack.push(4);
  sortStack.push(2);
  sortStack.push(1);

  console.log(sortStack.pop());
  console.log(sortStack.pop());
  console.log(sortStack.pop());
  console.log(sortStack.pop());
  console.log(sortStack.pop());
  console.log(sortStack.pop());
  console.log(sortStack.pop());
  console.log(sortStack.pop());
  console.log(sortStack.pop());
  console.log(sortStack.pop());
  console.log(sortStack.pop());
})();
