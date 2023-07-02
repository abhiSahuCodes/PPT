// Q1.

function findDepthRec(tree, n, index) {
  if (index >= n || tree[index] === 'l') {
    return 0;
  }

  index++;
  let left = findDepthRec(tree, n, index);

  index++;
  let right = findDepthRec(tree, n, index);

  return Math.max(left, right) + 1;
}

function findDepth(tree, n) {
  let index = 0;
  return findDepthRec(tree, n, index);
}

let tree = "nlnnlll".split('');
let n = tree.length;
console.log(findDepth(tree, n));


// ==============================================================

// Q2.

class Node {
    constructor(item) {
      this.data = item;
      this.left = null;
      this.right = null;
    }
  }
  
  function leftViewUtil(node, level, maxLevel) {
    if (node == null) {
      return;
    }
  
    if (level > maxLevel[0]) {
      console.log(node.data + " ");
      maxLevel[0] = level;
    }
  
    leftViewUtil(node.left, level + 1, maxLevel);
    leftViewUtil(node.right, level + 1, maxLevel);
  }
  
  function leftView(root) {
    let maxLevel = [0]; 
    leftViewUtil(root, 1, maxLevel);
  }
  
  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.right = new Node(4);
  root.left.right.right = new Node(5);
  root.left.right.right.right = new Node(6);
  
  leftView(root);

// =========================================================================

// Q3.

class NodeThird {
    constructor(item) {
      this.data = item;
      this.left = null;
      this.right = null;
    }
  }
  
  function rightView(root) {
    if (root === null) {
      return;
    }
  
    let queue = []; 
    queue.push(root);
  
    while (queue.length > 0) {
      let levelSize = queue.length;
  
      for (let i = 0; i < levelSize; i++) {
        let node = queue.shift();
  
        if (i === levelSize - 1) {
          console.log(node.data + " ");
        }
  
        if (node.right !== null) {
          queue.push(node.right);
        }
  
        if (node.left !== null) {
          queue.push(node.left);
        }
      }
    }
  }
  
  let rootThird = new Node(1);
  rootThird.left = new Node(2);
  rootThird.right = new Node(3);
  rootThird.left.left = new Node(4);
  rootThird.left.right = new Node(5);
  rootThird.right.left = new Node(6);
  rootThird.right.right = new Node(7);
  rootThird.right.right.right = new Node(8);
  
  rightView(rootThird);

// ===============================================================

// Q4.

class NodeFourth {
  constructor(key) {
    this.data = key; 
    this.hd = 1000000; 
    this.left = null; 
    this.right = null;
  }
}

class TreeFourth {
  constructor(node) {
    this.root = node;
  }

  bottomView() {
    if (this.root == null) return;

    let hd = 0;
    let map = {};

    let queue = [];

    this.root.hd = hd;
    queue.push(this.root);

    while (queue.length != 0) {
      let temp = queue.shift();

      hd = temp.hd;

      map[hd] = temp.data;

      if (temp.left != null) {
        temp.left.hd = hd - 1;
        queue.push(temp.left);
      }

      if (temp.right != null) {
        temp.right.hd = hd + 1;
        queue.push(temp.right);
      }
    }

    let result = [];

    for (const [key, value] of Object.entries(map).sort((a, b) => a[0] - b[0])) {
      result.push(value);
    }

    return result;
  }
}

let rootFourth = new NodeFourth(20);
rootFourth.left = new NodeFourth(8);
rootFourth.right = new NodeFourth(22);
rootFourth.left.left = new NodeFourth(5);
rootFourth.left.right = new NodeFourth(3);
rootFourth.right.left = new NodeFourth(4);
rootFourth.right.right = new NodeFourth(25);
rootFourth.left.right.left = new NodeFourth(10);
rootFourth.left.right.right = new NodeFourth(14);
let treeFourth = new TreeFourth(rootFourth);

let bottomView = treeFourth.bottomView();
console.log("Bottom view of the given binary tree:");
console.log(bottomView.join(" "));
