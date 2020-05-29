/*
Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a
route between two nodes.
*/

class Tree {
    constructor() {
        this.size = 0;
        this.nodes = new Set();
        this.connections = {};
    }

    addNode(data) {
        this.size++;

        let newNode = new Node(data);

        this.nodes.add(newNode);

        return newNode;
    }

    addConnection(node, connectingNode) {
        if (this.connections[node] == undefined) {
            this.connections[node] = new Set();
        }

        this.connections[node].add(connectingNode);
    }

    routeBetween(node1, node2, visited) {
        if (node1 === node2) {
            return true;
        }

        for (let node of this.connections[node1]) {
            if (!visited.has(node)) {
                visited.add(node);
                if (this.routeBetween(node, node2, visited)) {
                    return true;
                }
            }
        }

        return false;
    }
}

class Node {
    constructor(data) {
        this.data = data;
    }
}

(function() {
    let tree = new Tree();

    let node1 = tree.addNode(1);
    let node2 = tree.addNode(2);
    let node3 = tree.addNode(3);
    let node4 = tree.addNode(4);
    let node5 = tree.addNode(5);

    tree.addConnection(node1, node2);
    tree.addConnection(node2, node4);
    tree.addConnection(node4, node1);
    tree.addConnection(node5, node3);
    tree.addConnection(node5, node4);
    tree.addConnection(node4, node3);

    console.log(tree.routeBetween(node2, node5, new Set()));
})();