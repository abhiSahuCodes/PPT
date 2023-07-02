// Q1.

class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

var root;
var head;
var prev = null;

function BinaryTree2DoubleLinkedList(root) {
  if (root == null)
    return;

  BinaryTree2DoubleLinkedList(root.left);

  if (prev == null)
    head = root;
  else {
    root.left = prev;
    prev.right = root;
  }
  prev = root;

  BinaryTree2DoubleLinkedList(root.right);
}

function getNodes(node, arr) {
  while (node != null) {
    arr.push(node.data);
    node = node.right;
  }
}


root = new Node(10);
root.left = new Node(12);
root.right = new Node(15);
root.left.left = new Node(25);
root.left.right = new Node(30);
root.right.left = new Node(36);

BinaryTree2DoubleLinkedList(root);

var convertedList = [];
getNodes(head, convertedList);

console.log(convertedList.join(" "));

//======================================================

// Q2.


class NodeSecond {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}


function flipBinaryTree(root) {
  if (root == null) {
    return root;
  }
  if (root.left == null && root.right == null) {
    return root;
  }

  let flippedRoot = flipBinaryTree(root.left);

  root.left.left = root.right;
  root.left.right = root;
  root.left = root.right = null;

  return flippedRoot;
}


function printLevelOrder(root) {
  if (root == null) {
    return;
  }

  let q = [];
  q.push(root);
  while (true) {

    let nodeCount = q.length;
    if (nodeCount == 0) {
      break;
    }

    while (nodeCount > 0) {
      let node = q.shift();
      console.log(node.data);
      if (node.left != null) {
        q.push(node.left);
      }
      if (node.right != null) {
        q.push(node.right);
      }
      nodeCount--;
    }
    console.log("\n");
  }
}

let rootSecond = new NodeSecond(1);
rootSecond.left = new NodeSecond(2);
rootSecond.right = new NodeSecond(3);
rootSecond.right.left = new NodeSecond(4);
rootSecond.right.right = new NodeSecond(5);
console.log("Level order traversal of the given tree:");
printLevelOrder(rootSecond);

rootSecond = flipBinaryTree(rootSecond);
console.log("Level order traversal of the flipped tree:");
printLevelOrder(rootSecond);

//===============================================================

// Q3.

class NodeThird {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

function printRootToLeafPaths(root) {
  if (root == null) {
    return;
  }

  let stack = [];
  let pathStack = [];

  stack.push(root);
  pathStack.push(String(root.data));

  while (stack.length > 0) {
    let currentNode = stack.pop();
    let currentPath = pathStack.pop();

    if (currentNode.left === null && currentNode.right === null) {
      console.log(currentPath);
    }

    if (currentNode.left !== null) {
      stack.push(currentNode.left);
      pathStack.push(currentPath + "->" + currentNode.left.data);
    }

    if (currentNode.right !== null) {
      stack.push(currentNode.right);
      pathStack.push(currentPath + "->" + currentNode.right.data);
    }
  }
}

let rootThird = new NodeThird(6);
rootThird.left = new NodeThird(3);
rootThird.right = new NodeThird(5);
rootThird.left.left = new NodeThird(2);
rootThird.left.right = new NodeThird(5);
rootThird.right.right = new NodeThird(4);
rootThird.left.right.left = new NodeThird(7);
rootThird.left.right.right = new NodeThird(4);

console.log("Root-to-Leaf Paths:");
printRootToLeafPaths(rootThird);


// ===================================================================

// Q4.

function isSameTree(inorder, preorder, postorder) {
  if (
    inorder.length !== preorder.length ||
    preorder.length !== postorder.length
  ) {
    return false;
  }

  function checkTraversal(preStart, preEnd, inStart, inEnd, postStart, postEnd) {
    if (preStart > preEnd) {
      return true;
    }

    const rootValue = preorder[preStart];

    const rootIndex = inorder.indexOf(rootValue);

    if (rootIndex === -1) {
      return false;
    }

    const leftSubtreeSize = rootIndex - inStart;
    const rightSubtreeSize = inEnd - rootIndex;

    const leftSubtree = checkTraversal(
      preStart + 1,
      preStart + leftSubtreeSize,
      inStart,
      rootIndex - 1,
      postStart,
      postStart + leftSubtreeSize - 1
    );

    const rightSubtree = checkTraversal(
      preEnd - rightSubtreeSize + 1,
      preEnd,
      rootIndex + 1,
      inEnd,
      postEnd - rightSubtreeSize,
      postEnd - 1
    );

    return leftSubtree && rightSubtree && preorder[preStart] === postorder[postEnd];
  }

  return checkTraversal(
    0,
    preorder.length - 1,
    0,
    inorder.length - 1,
    0,
    postorder.length - 1
  );
}

const inorder1 = [4, 2, 5, 1, 3];
const preorder1 = [1, 2, 4, 5, 3];
const postorder1 = [4, 5, 2, 3, 1];
console.log(isSameTree(inorder1, preorder1, postorder1));

const inorder2 = [4, 2, 5, 1, 3];
const preorder2 = [1, 5, 4, 2, 3];
const postorder2 = [4, 1, 2, 3, 5];
console.log(isSameTree(inorder2, preorder2, postorder2));
