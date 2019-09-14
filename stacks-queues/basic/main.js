let stack = [];

for (let i = 0; i < 100; ++i) {
    stack.push(i);
}

while (stack.length > 0) {
    console.log(stack.pop());
}