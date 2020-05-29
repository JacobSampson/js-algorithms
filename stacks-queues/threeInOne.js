class SizedStack {
    constructor(size = 1) {
        this.size = size;

        this.items = [];

        for (let i = 0; i < size; ++i) {
            this.sizes[i + 1] = 0;
        }
    }

    push(item, stackNum) {
        let insertIndex = 0;
        
        for (let i = 1; i <= stackNum; ++i) {
            insertIndex += this.sizes[i];
        }
        
        this.sizes[stackNum]++;
        this.items.splice(insertIndex, 0, item);
    }
    
    pop(stackNum) {
        if (this.sizes[stackNum] <= 0) return null;
        
        this.sizes[stackNum]--;

        let insertIndex = 0;

        for (let i = 1; i <= stackNum; ++i) {
            insertIndex += this.sizes[i];
        }

        return this.items.splice(insertIndex, 1);
    }
}

(function() {
    let newStack = new SizedStack(3);

    newStack.push(1, 2);
    newStack.push(2, 2);
    newStack.push(3, 2);
    newStack.push(4, 2);

    console.log(newStack.items);
    console.log(newStack.pop(2));
    console.log(newStack.items);

    newStack.push(8, 3);
    newStack.push(5, 3);
    newStack.push(3, 3);
    newStack.push(9, 3);

    console.log(newStack.items);
    console.log(newStack.pop(3));
    console.log(newStack.pop(3));
    console.log(newStack.pop(3));
    console.log(newStack.pop(3));
    console.log(newStack.pop(3));
    console.log(newStack.items);

    newStack.push(-1, 1);
    newStack.push(-2, 1);
    newStack.push(-3, 1);
    newStack.push(-4, 1);

    console.log(newStack.items);
    console.log(newStack.pop(1));
    console.log(newStack.pop(1));
    console.log(newStack.items);
})();