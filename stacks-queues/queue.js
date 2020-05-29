class Queue {
    constructor(arr=[]) {
        this.queue = [...arr];
        this.size = arr.length;
    }

    push(item) {
        this.queue = [...this.queue, item];
        this.length++;
    }

    pop() {
        this.length--;
        return this.queue.splice(0, 1);
    }
}

(function() {
    let queue = new Queue();

    queue.push(1);
    queue.push(2);
    queue.push(3);
    queue.push(4);
    queue.push(5);
    queue.push(6);

    console.log(queue.queue);
    
    console.log(queue.pop());
    
    console.log(queue.queue);
})();