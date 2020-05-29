class StackOfStacks {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.stacks = [];
        this.size = 0;
    }

    push(item) {
        if (this.size == 0) {
            this.stacks.push([]);
        } else {
            if (this.stacks[this.stacks.length - 1].length == this.maxSize) {
                this.stacks.push([]);
            }
            
        }
        this.size++;
        this.stacks[this.stacks.length - 1].push(item);
    }

    pop() {
        this.size--;
        if (this.stacks[this.stacks.length - 1].length == 0) {
            this.stacks.pop();
        }
        return this.stacks[this.stacks.length - 1].pop();
    }
}

(function() {
    let stackOfStacks = new StackOfStacks(3);

    stackOfStacks.push(1);
    stackOfStacks.push(2);
    stackOfStacks.push(3);
    stackOfStacks.push(4);
    stackOfStacks.push(5);
    stackOfStacks.push(6);
    stackOfStacks.push(7);
    stackOfStacks.push(8);
    stackOfStacks.push(9);
    stackOfStacks.push(10);

    console.log(stackOfStacks.pop());
    console.log(stackOfStacks.pop());
    console.log(stackOfStacks.pop());
    console.log(stackOfStacks.pop());
    console.log(stackOfStacks.pop());
    console.log(stackOfStacks.pop());
    console.log(stackOfStacks.pop());
    console.log(stackOfStacks.pop());
    console.log(stackOfStacks.pop());
    console.log(stackOfStacks.pop());
})();