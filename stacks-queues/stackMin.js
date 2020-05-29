class MinStack {
    constructor() {
        this.stack = [];
        this.minValueStack = [];

        this.last = null;
    }

    push(item) {
        if (this.minValueStack.length == 0) {
            this.minValueStack.push(item);
        } else if (this.minValueStack[this.minValueStack.length - 1] > item) {
            this.minValueStack.push(item);
        } else {
            this.minValueStack.push(this.minValueStack[this.minValueStack.length - 1]);
        }

        return this.stack.push(item);
    }

    pop() {
        this.minValueStack.pop();
        return this.stack.pop();
    }

    min() {
        return this.minValueStack[this.minValueStack.length - 1];
    }
}

(function() {
    let minStack = new MinStack();

    minStack.push(1);
    minStack.push(7);
    minStack.push(2);
    minStack.push(5);
    minStack.push(2);
    minStack.push(-2);
    minStack.push(5);

    console.log(minStack.min());
})();