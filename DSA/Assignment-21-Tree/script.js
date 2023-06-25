// Q1.

class TreeNodeFirst {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function inorderTraversal(node, values) {
  if (node === null) {
    return;
  }

  inorderTraversal(node.left, values);
  values.push(node.val);
  inorderTraversal(node.right, values);
}

function convertToBST(root) {
  const values = [];
  inorderTraversal(root, values);

  values.sort((a, b) => a - b);

  let index = 0;
  function inorderReplace(node) {
    if (node === null) {
      return;
    }

    inorderReplace(node.left);
    node.val = values[index];
    index++;
    inorderReplace(node.right);
  }

  inorderReplace(root);

  return root;
}

const rootFirst = new TreeNodeFirst(10);
rootFirst.left = new TreeNodeFirst(2);
rootFirst.right = new TreeNodeFirst(7);
rootFirst.left.left = new TreeNodeFirst(8);
rootFirst.left.right = new TreeNodeFirst(4);

const resultFirst = convertToBST(rootFirst);

function printInOrder(node) {
  if (node === null) {
    return;
  }

  printInOrder(node.left);
  console.log(node.val);
  printInOrder(node.right);
}

printInOrder(resultFirst);

// =================================================================

// Q2.

class TreeNodeSecond {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function insert(root, val) {
  if (root === null) {
    return new TreeNodeSecond(val);
  }

  if (val < root.val) {
    root.left = insert(root.left, val);
  } else if (val > root.val) {
    root.right = insert(root.right, val);
  }

  return root;
}

function findPath(root, target, path) {
  if (root === null) {
    return false;
  }

  path.push(root.val);

  if (root.val === target) {
    return true;
  }

  if (
    (root.left && findPath(root.left, target, path)) ||
    (root.right && findPath(root.right, target, path))
  ) {
    return true;
  }

  path.pop();
  return false;
}

function findLCA(root, node1, node2) {
  if (root === null) {
    return null;
  }

  if (root.val > node1 && root.val > node2) {
    return findLCA(root.left, node1, node2);
  }

  if (root.val < node1 && root.val < node2) {
    return findLCA(root.right, node1, node2);
  }

  return root.val;
}

function findDistance(root, node1, node2) {
  const path1 = [];
  const path2 = [];

  findPath(root, node1, path1);
  findPath(root, node2, path2);

  let i = 0;
  while (i < path1.length && i < path2.length) {
    if (path1[i] !== path2[i]) {
      break;
    }
    i++;
  }

  const lca = findLCA(root, node1, node2);

  return path1.length + path2.length - 2 * i;
}

const values = [8, 3, 1, 6, 4, 7, 10, 14, 13];
let root = null;
for (let i = 0; i < values.length; i++) {
  root = insert(root, values[i]);
}

const node1 = 6;
const node2 = 14;
const distance = findDistance(root, node1, node2);

// Print the result
console.log("The distance between the two keys =", distance);

// ===============================================================

// Q3.

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class DoublyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

function convertToDoublyLinkedList(root) {
  if (root === null) {
    return null;
  }

  let prev = null;
  let head = null;

  function inorder(node) {
    if (node === null) {
      return;
    }

    inorder(node.left);

    const current = new DoublyLinkedListNode(node.val);
    current.prev = prev;

    if (prev !== null) {
      prev.next = current;
    } else {
      head = current;
    }

    prev = current;

    inorder(node.right);
  }

  inorder(root);

  return head;
}

const rootThird = new TreeNode(10);
rootThird.left = new TreeNode(5);
rootThird.right = new TreeNode(20);
rootThird.right.left = new TreeNode(30);
rootThird.right.right = new TreeNode(35);

const head = convertToDoublyLinkedList(root);

let currentThird = head;
let resultThird = '';
while (currentThird !== null) {
  resultThird += currentThird.data + ' ';
  currentThird = currentThird.next;
}

console.log(resultThird.trim());

// ===========================================================

// Q4.

class TreeNodeFourth {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

function connectNodesAtSameLevel(root) {
  if (root === null) {
    return null;
  }

  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();

      if (i < levelSize - 1) {
        current.next = queue[0];
      }

      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
  }

  return root;
}

const rootFourth = new TreeNodeFourth(1);
rootFourth.left = new TreeNodeFourth(2);
rootFourth.right = new TreeNodeFourth(3);
rootFourth.left.left = new TreeNodeFourth(4);
rootFourth.left.right = new TreeNodeFourth(5);
rootFourth.right.left = new TreeNodeFourth(6);
rootFourth.right.right = new TreeNodeFourth(7);

const connectedRoot = connectNodesAtSameLevel(rootFourth);

let current = connectedRoot;
let result = '';
while (current !== null) {
  const nextVal = current.next ? current.next.val : -1;
  result += current.val + ' → ' + nextVal + '\n';
  current = current.next;
}

console.log(result.trim());

