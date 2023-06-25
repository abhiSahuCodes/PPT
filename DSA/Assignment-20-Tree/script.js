// Q1.
class NodeFirst {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function maxSubtreeSum(root) {
  let maxSum = -Infinity;

  function getSubtreeSum(node) {
    if (node === null) {
      return 0;
    }

    let leftSum = getSubtreeSum(node.left);
    let rightSum = getSubtreeSum(node.right);
    let subtreeSum = node.value + leftSum + rightSum;

    maxSum = Math.max(maxSum, subtreeSum);

    return subtreeSum;
  }

  getSubtreeSum(root);

  return maxSum;
}


let rootFirst = new NodeFirst(1);
rootFirst.left = new NodeFirst(-2);
rootFirst.right = new NodeFirst(3);
rootFirst.left.left = new NodeFirst(4);
rootFirst.left.right = new NodeFirst(5);
rootFirst.right.left = new NodeFirst(-6);
rootFirst.right.right = new NodeFirst(2);


let result = maxSubtreeSum(rootFirst);
console.log(result); 

// ===========================================================

// Q2.

class NodeSecond {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function constructBST(levelOrder) {
    if (levelOrder.length === 0) {
      return null;
    }
  
    const rootSecond = new NodeSecond(levelOrder[0]);
    const queue = [rootSecond];
    let i = 1;
  
    while (i < levelOrder.length) {
      const parentNode = queue.shift();
      const leftValue = levelOrder[i++];
  
      if (leftValue !== null && leftValue !== undefined) {
        const leftNode = new NodeSecond(leftValue);
        parentNode.left = leftNode;
        queue.push(leftNode);
      }
  
      if (i < levelOrder.length) {
        const rightValue = levelOrder[i++];
        if (rightValue !== null && rightValue !== undefined) {
          const rightNode = new NodeSecond(rightValue);
          parentNode.right = rightNode;
          queue.push(rightNode);
        }
      }
    }
  
    return rootSecond;
  }
  
  const levelOrder = [7, 4, 12, 3, 6, 8, 1, 5, 10];
  
  const rootSecond = constructBST(levelOrder);
  
  function inorderTraversal(node) {
    if (node === null) {
      return;
    }
  
    inorderTraversal(node.left);
    console.log(node.value);
    inorderTraversal(node.right);
  }
  
  inorderTraversal(rootSecond);
  

// ============================================================

// Q3.

class Node {
    constructor(data, min, max) {
      this.data = data;
      this.min = min;
      this.max = max;
    }
  }
  
  function canRepresent(arr, n) {
    if (n === 0) return true;
  
    let queue = [];
    let j = 0;
    let curr = new Node(arr[j++], Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    queue.push(curr);
  
    while (j !== n && queue.length > 0) {
      let tmp = queue.shift();
      curr = new Node();
  
      if (j < n && arr[j] < tmp.data && arr[j] > tmp.min) {
        curr.data = arr[j++];
        curr.min = tmp.min;
        curr.max = tmp.data;
        queue.push(curr);
      }
  
      curr = new Node();
  
      if (j < n && arr[j] > tmp.data && arr[j] < tmp.max) {
        curr.data = arr[j++];
        curr.min = tmp.data;
        curr.max = tmp.max;
        queue.push(curr);
      }
    }
  
    return j === n;
  }
  
  // Main
  let arr1 = [7, 4, 12, 3, 6, 8, 1, 5, 10];
  let arr2 = [11, 6, 13, 5, 12, 10]
  let n = arr1.length;

  
  if (canRepresent(arr1, n))
    console.log("Yes");
  else
    console.log("No");

  let m = arr2.length

  if (canRepresent(arr2, m))
    console.log("Yes")
  else 
    console.log("No")