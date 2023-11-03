/* Graph */

class Graph {
  constructor(connections) {
    this.nodes = {};
    this.constructConnections(connections);
  }

  constructConnections(connections) {
    for (let connection of connections) {
      let node1 = this.nodes[connection.node1] || new Node(connection.node1);
      let node2 = this.nodes[connection.node2] || new Node(connection.node2);

      node1.connections[node2.name] = connection.value;
      if (this.nodes[node1.name] === undefined) {
        this.nodes[node1.name] = node1;
      }
    }
  }

  BFS(node1, node2) {
    let nodeVisitation = [];
    let visitedNodes = new Set();
  }

  // routeDistance(node1, node2) {
  //     let distance = 0;

  //     let hasFound = false;
  //     let currNode = node1;
  //     while (!hasFound) {
  //         let lastNode = currNode;
  //         for (let connection in currNode.connections) {
  //             distance += connection.value;
  //             if (connection === node2.name) {
  //                 return distance
  //             }
  //         }

  //         if (currNode == lastNode) {
  //             return false;
  //         }
  //     }

  //     return distance;
  // }
}

class Node {
  constructor(name) {
    this.connections = {};
    this.name = name;
  }
}

(function () {
  let connections = [
    {
      value: 1,
      node1: "A",
      node2: "B",
    },
    {
      value: 2,
      node1: "B",
      node2: "C",
    },
    {
      value: 8,
      node1: "B",
      node2: "E",
    },
    {
      value: 1,
      node1: "A",
      node2: "D",
    },
    {
      value: 5,
      node1: "D",
      node2: "C",
    },
    {
      value: 2,
      node1: "E",
      node2: "C",
    },
    {
      value: 3,
      node1: "B",
      node2: "D",
    },
    {
      value: 4,
      node1: "B",
      node2: "A",
    },
    {
      value: 2,
      node1: "C",
      node2: "B",
    },
  ];

  let graph = new Graph(connections);

  let node1 = graph.nodes["A"];
  let node2 = graph.nodes["B"];

  console.log(graph.routeDistance(node1, node2));
})();
