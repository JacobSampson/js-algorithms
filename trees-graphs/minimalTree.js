/*
Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an algorithm
to create a binary search tree with minimal height.
*/

class Node {
  constructor(data) {
    this.data = data;
    this.rightChild = null;
    this.leftChild = null;
  }
}

function addSortedNode(array) {
  if (array.length == 0) {
    return null;
  }

  let midIndex = Math.floor(array.length / 2);

  let parentNode = new Node(array[midIndex]);

  parentNode.leftChild = addSortedNode(array.slice(0, midIndex));
  parentNode.rightChild = addSortedNode(
    array.slice(midIndex, array.length - 1),
  );

  return parentNode;
}

function sortedArrayToTree(array) {
  let tree;

  tree = addSortedNode(array);

  return tree;
}

function inorderTraversal(currNode, visited) {
  if (currNode == null) {
    return;
  } else {
    inorderTraversal(currNode.leftChild, visited);
    visited.push(currNode);
    inorderTraversal(currNode.rightChild, visited);
  }
}

(function () {
  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  let tree = sortedArrayToTree(array);

  let visited = [];
  inorderTraversal(tree, visited);
  console.log(visited);
})();
