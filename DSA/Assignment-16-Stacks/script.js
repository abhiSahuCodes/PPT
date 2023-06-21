// Q1.

function findNextGreaterFrequency(arrOne) {
  const frequencyMap = new Map();

  for (let i = 0; i < arrOne.length; i++) {
    const num = arrOne[i];
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  const result = new Array(arrOne.length).fill(-1);

  for (let i = arrOne.length - 1; i >= 0; i--) {
    const currentNum = arrOne[i];
    const currentFrequency = frequencyMap.get(currentNum);

    for (let j = i + 1; j < arrOne.length; j++) {
      const nextNum = arrOne[j];
      const nextFrequency = frequencyMap.get(nextNum);

      if (nextFrequency > currentFrequency) {
        result[i] = nextNum;
        break;
      }
    }
  }

  return result;
}

// Testing function
const arrOne = [1, 1, 2, 3, 4, 2, 1];
const resultOne = findNextGreaterFrequency(arrOne);
console.log(resultOne); 

// ==================================================================

// Q2.

function sortStack(stack) {
    const tempStack = [];
  
    while (stack.length > 0) {
      const temp = stack.pop();
  
      while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
        stack.push(tempStack.pop());
      }
  
      tempStack.push(temp);
    }
  
    const sortedStack = [];
    while (tempStack.length > 0) {
      sortedStack.push(tempStack.pop());
    }
  
    return sortedStack;
  }
  
// Testing function
  const stack = [34, 3, 31, 98, 92, 23];
  const sortedStack = sortStack(stack);
  console.log(sortedStack); 
  

// ==================================================================

// Q3.

function deleteMiddle(stack) {
    if (stack.length === 0 || stack.length === 1) {
      return;
    }
  
    var mid = Math.floor(stack.length / 2) + 1;
    removeMiddle(stack, mid);
  }
  
  function removeMiddle(stack, k) {
    if (k === 1) {
      stack.pop();
      return;
    }
  
    var temp = stack.pop();
    removeMiddle(stack, k - 1);
    stack.push(temp);
  }
  
// Testing function
  var stack1 = [1, 2, 3, 4, 5];
  deleteMiddle(stack1);
  console.log(stack1); 
  
  var stack2 = [1, 2, 3, 4, 5, 6];
  deleteMiddle(stack2);
  console.log(stack2); 

// ==================================================================

// Q4.

function checkIncreasingOrder(queue) {
  const stack = [];
  const tempQueue = [];

  while (queue.length > 0) {
    const element = queue.shift();

    while (stack.length > 0 && element < stack[stack.length - 1]) {
      tempQueue.push(stack.pop());
    }

    stack.push(element);
  }

  while (stack.length > 0) {
    tempQueue.push(stack.pop());
  }

  while (tempQueue.length > 0) {
    const element = tempQueue.shift();

    if (queue.length > 0 && element > queue[0]) {
      return "No";
    }

    queue.push(element);
  }

  return "Yes";
}

// Testing function
const queue1 = [5, 1, 2, 3, 4];
console.log(checkIncreasingOrder(queue1)); 

const queue2 = [5, 1, 2, 6, 3, 4];
console.log(checkIncreasingOrder(queue2)); 
  
// ==================================================================

// Q5.

function reverseNumber(num) {
    const stack = [];
    let reversedNum = "";
  
    const numStr = num.toString();
    for (let i = 0; i < numStr.length; i++) {
      stack.push(numStr[i]);
    }
  
    while (stack.length > 0) {
      reversedNum += stack.pop();
    }
  
    return parseInt(reversedNum, 10);
  }
  
// Testing function
  console.log(reverseNumber(365));   
  console.log(reverseNumber(6899));  

// ==================================================================

// Q6.

function reverseFirstK(queue, k) {
    const stack = [];
  
    for (let i = 0; i < k; i++) {
      stack.push(queue.shift());
    }
  
    while (stack.length > 0) {
      queue.push(stack.pop());
    }
  
    for (let i = 0; i < queue.length - k; i++) {
      queue.push(queue.shift());
    }
  }
  
// Testing function
  const queue = [1, 2, 3, 4, 5, 6];
  
  reverseFirstK(queue, 3);
  
  while (queue.length > 0) {
    console.log(queue.shift());
  }
  
// ==================================================================

// Q7.

function countRemainingWords(sequence) {
    const stack = [];
  
    for (let i = 0; i < sequence.length; i++) {
      const word = sequence[i];
  
      if (stack.length === 0 || stack[stack.length - 1] !== word) {
        stack.push(word);
      } else {
        stack.pop();
      }
    }
  
    return stack.length;
  }
  
// Testing function
  const sequence1 = ["ab", "aa", "aa", "bcd", "ab"];
  console.log(countRemainingWords(sequence1)); 
  
  const sequence2 = ["tom", "jerry", "jerry", "tom"];
  console.log(countRemainingWords(sequence2)); 
  

// ==================================================================

// Q8.

function findMaxAbsoluteDifference(arr) {
    const n = arr.length;
    let maxDiff = 0;
  
    for (let i = 0; i < n; i++) {
      let leftSmaller = 0;
      let rightSmaller = 0;
  
      for (let j = i - 1; j >= 0; j--) {
        if (arr[j] < arr[i]) {
          leftSmaller = arr[j];
          break;
        }
      }
  
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[i]) {
          rightSmaller = arr[j];
          break;
        }
      }
  
      const diff = Math.abs(leftSmaller - rightSmaller);
      maxDiff = Math.max(maxDiff, diff);
    }
  
    return maxDiff;
  }
  
// Testing function
  const arr1 = [2, 1, 8];
  console.log(findMaxAbsoluteDifference(arr1)); 
  
  const arr2 = [2, 4, 8, 7, 7, 9, 3];
  console.log(findMaxAbsoluteDifference(arr2)); 
  
  const arr3 = [5, 1, 9, 2, 5, 1, 7];
  console.log(findMaxAbsoluteDifference(arr3));
  