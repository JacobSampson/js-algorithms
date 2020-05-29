import {LinkedList, LinkedNode } from"./linkedList.js";

(function() {
    let list = new LinkedList();

    list.add(0);
    let oneNode = list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    let lastNode = list.add(5);

    lastNode.next = oneNode;

    // printList(list);

    console.log(detectLoop(list));
})();

function detectLoop(list) {
    let visitedNodes = new Set();

    let currNode = list.root;

    while (currNode.next != null) {
        if(visitedNodes.has(currNode)) {
            return currNode;
        }

        visitedNodes.add(currNode);

        currNode = currNode.next;
    }
    
    return null;
}

function printList(list) {
    let currNode = list.root;
    
    while(currNode != null) {
        console.log(currNode.data);
        currNode = currNode.next;
    }
}