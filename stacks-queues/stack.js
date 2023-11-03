class Stack {
  constructor(arr = []) {
    this.stack = [...arr];
  }

  push(item) {
    this.stack = [...this.stack, item];
  }

  pop() {
    return this.stack.splice(this.stack.length - 1);
  }
}

(function () {
  let stack = new Stack();

  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  stack.push(6);

  console.log(stack.stack);

  console.log(stack.pop());

  console.log(stack.stack);
})();
