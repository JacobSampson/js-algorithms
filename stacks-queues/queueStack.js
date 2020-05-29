function QueueStack() {
    this.stack = [];
    this.queue = [];

    this.push = function(item) {
        this.queue.unshift(item);
        return this.stack.push(item);
    }

    this.pop = function() {
        this.queue.shift();
        return this.stack.pop();
    }

    this.unshift = function(item) {
        this.stack.unshift(item);
        return this.queue.push(item);
    }

    this.shift = function() {
        this.stack.shift();
        return this.queue.pop();
    }
}

(function() {
    let queueStack = new QueueStack();

    for (let i = 0; i < 100; ++i) {
        queueStack.push(i);
        // queueStack.unshift(i)
    }

    for (let i = 0; i < 100; ++i) {
        console.log(queueStack.pop());
    }
})();