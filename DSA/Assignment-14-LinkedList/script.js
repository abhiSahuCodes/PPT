// Q7.

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function nextGreaterNodes(head) {
  const stack = [];
  const result = [];
  let current = head;
  let index = 0;

  while (current !== null) {
    result.push(0);

    while (stack.length > 0 && current.val > stack[stack.length - 1].node.val) {
      const { node, nodeIndex } = stack.pop();
      result[nodeIndex] = current.val;
    }

    stack.push({ node: current, nodeIndex: index });
    current = current.next;
    index++;
  }

  return result;
}

function linkedListToArray(head) {
  let current = head;
  const array = [];
  while (current !== null) {
    array.push(current.val);
    current = current.next;
  }
  return array;
}

// Test Case
const list = new ListNode(2, new ListNode(1, new ListNode(5)));
console.log("Input Linked list:", linkedListToArray(list));
console.log("Output:", nextGreaterNodes(list)); 

// ========================================================================

// Q8.

class ListNodeTwo {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function removeZeroSumSublists(head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy;
  let sum = 0;
  let sumMap = {};

  while (current !== null) {
    sum += current.val;

    if (sumMap[sum] !== undefined) {
      let prev = sumMap[sum].next;
      let removeSum = sum + prev.val;

      while (prev !== current) {
        delete sumMap[removeSum];
        prev = prev.next;
        removeSum += prev.val;
      }

      sumMap[sum].next = current.next;
    } else {
      sumMap[sum] = current;
    }

    current = current.next;
  }

  return dummy.next;
}

function linkedListToArray(head) {
  let current = head;
  const array = [];
  while (current !== null) {
    array.push(current.val);
    current = current.next;
  }
  return array;
}

// Testing
const list2 = new ListNodeTwo(1, new ListNodeTwo(2, new ListNodeTwo(-3, new ListNodeTwo(3, new ListNodeTwo(1)))));
console.log("Input Linked list:", linkedListToArray(list2));
console.log("Output Linked list:", linkedListToArray(removeZeroSumSublists(list2))); 


