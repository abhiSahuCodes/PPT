// Q1.

function findNextGreaterElement(arr) {
  const stack = [];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result[i] = -1;
  }

  for (let i = 0; i < arr.length; i++) {
    while (stack.length !== 0 && arr[i] > arr[stack[stack.length - 1]]) {
      result[stack.pop()] = arr[i];
    }

    stack.push(i);
  }

  return result;
}

// Test case 1
const arrFirstOne = [1, 3, 2, 4];
console.log(findNextGreaterElement(arrFirstOne)); 

// Test case 2
const arrFirstTwo = [6, 8, 0, 1, 3];
console.log(findNextGreaterElement(arrFirstTwo)); 

// ==========================================================================

// Q2.

function findNearestSmallerNumber(arr) {
  const n = arr.length;
  const result = [];

  for (let i = 0; i < n; i++) {
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i]) {
        result.push(arr[j]);
        break;
      }
    }

    if (j === -1) {
      result.push(-1);
    }
  }

  return result;
}

// Test case 1
const arrSecondOne = [1, 6, 2];
console.log(findNearestSmallerNumber(arrSecondOne)); 

// Test case 2
const arrSecondTwo = [1, 5, 0, 3, 4, 5];
console.log(findNearestSmallerNumber(arrSecondTwo)); 

// //====================================================================================

// Q3.

class Stack {
    constructor() {
      this.q1 = [];
      this.q2 = [];
    }
  
    push(element) {
      this.q1.push(element);
    }
  
    pop() {
      if (this.q1.length === 0) {
        return -1; // Stack is empty
      }
  
      while (this.q1.length > 1) {
        this.q2.push(this.q1.shift());
      }
  
      const poppedElement = this.q1.shift();
  
      const temp = this.q1;
      this.q1 = this.q2;
      this.q2 = temp;
  
      return poppedElement;
    }
  }
  
  // Test case 1
  const stackThirdOne = new Stack();
  stackThirdOne.push(2);
  stackThirdOne.push(3);
  console.log(stackThirdOne.pop()); 
  stackThirdOne.push(4);
  console.log(stackThirdOne.pop()); 
  
  // Test case 2
  const stackThirdTwo = new Stack();
  stackThirdTwo.push(2);
  console.log(stackThirdTwo.pop()); 
  console.log(stackThirdTwo.pop()); 
  stackThirdTwo.push(3);
  console.log(stackThirdTwo.pop()); 

// // ===================================================================

// Q4.

class StackFourth {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "StackFourth is empty";
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    reverse() {
      if (!this.isEmpty()) {
        const temp = this.pop();
        this.reverse();
        this.insertAtBottom(temp);
      }
    }
  
    insertAtBottom(item) {
      if (this.isEmpty()) {
        this.push(item);
      } else {
        const temp = this.pop();
        this.insertAtBottom(item);
        this.push(temp);
      }
    }
  
    printStack() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      console.log(str);
    }
  }
  
  // Test case 1
  const stackFourthOne = new StackFourth();
  stackFourthOne.push(3);
  stackFourthOne.push(2);
  stackFourthOne.push(1);
  stackFourthOne.push(7);
  stackFourthOne.push(6);
  console.log("Original StackFourth:");
  stackFourthOne.printStack();
  stackFourthOne.reverse();
  console.log("Reversed StackFourth:");
  stackFourthOne.printStack();
  
  // Test case 2
  const stackFourthTwo = new StackFourth();
  stackFourthTwo.push(4);
  stackFourthTwo.push(3);
  stackFourthTwo.push(9);
  stackFourthTwo.push(6);
  console.log("Original Stack:");
  stackFourthTwo.printStack();
  stackFourthTwo.reverse();
  console.log("Reversed Stack:");
  stackFourthTwo.printStack();
  
// =================================================================

// Q5.

function reverseStringUsingStack(str) {
    const stack = [];
  
    for (let i = 0; i < str.length; i++) {
      stack.push(str[i]);
    }
  
    let reversedStr = "";
    while (stack.length > 0) {
      reversedStr += stack.pop();
    }
  
    return reversedStr;
  }
  
  // Test case
  const inputString = "GeeksforGeeks";
  const reversedString = reverseStringUsingStack(inputString);
  console.log("Input String: ", inputString);
  console.log("Reversed String: ", reversedString);

//   ===================================================================

// Q6.

function evaluatePostfixExpression(expression) {
    const stack = [];
  
    for (let i = 0; i < expression.length; i++) {
      const currentChar = expression[i];
  
      if (isNumeric(currentChar)) {
        stack.push(Number(currentChar));
      } else {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
  
        let result;
        switch (currentChar) {
          case '+':
            result = operand1 + operand2;
            break;
          case '-':
            result = operand1 - operand2;
            break;
          case '*':
            result = operand1 * operand2;
            break;
          case '/':
            result = operand1 / operand2;
            break;
          default:
            return "Invalid operator";
        }
  
        stack.push(result);
      }
    }
  
    return stack.pop();
  }
  
  function isNumeric(char) {
    return !isNaN(char);
  }
  
  // Test case 1
  const expression1 = "231*+9-";
  console.log("Expression:", expression1);
  console.log("Result:", evaluatePostfixExpression(expression1));
  
  // Test case 2
  const expression2 = "123+*8-";
  console.log("Expression:", expression2);
  console.log("Result:", evaluatePostfixExpression(expression2));

// ==================================================================

// Q7.

class MinStack {
    constructor() {
      this.dataStack = [];
      this.minStack = [];
    }
  
    push(val) {
      this.dataStack.push(val);
  
      if (this.minStack.length === 0 || val <= this.getMin()) {
        this.minStack.push(val);
      }
    }
  
    pop() {
      const val = this.dataStack.pop();
  
      if (val === this.getMin()) {
        this.minStack.pop();
      }
    }
  
    top() {
      if (this.dataStack.length === 0) {
        return null;
      }
  
      return this.dataStack[this.dataStack.length - 1];
    }
  
    getMin() {
      if (this.minStack.length === 0) {
        return null;
      }
  
      return this.minStack[this.minStack.length - 1];
    }
  }
  
  // Test case
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  console.log("getMin:", minStack.getMin()); 
  minStack.pop();
  console.log("top:", minStack.top()); 
  console.log("getMin:", minStack.getMin()); 

// ==========================================================

// Q8.

function trapWater(height) {
    let left = 0; 
    let right = height.length - 1; 
  
    let leftMax = 0; 
    let rightMax = 0; 
  
    let waterTrapped = 0; 
  
    while (left < right) {
      if (height[left] < height[right]) {
        
        if (height[left] > leftMax) {
          leftMax = height[left]; 
        } else {
          waterTrapped += leftMax - height[left]; 
        }
        left++; 
      } else {
        if (height[right] > rightMax) {
          rightMax = height[right]; 
        } else {
          waterTrapped += rightMax - height[right]; 
        }
        right--; 
      }
    }
  
    return waterTrapped;
  }
  
  // Test case 1
  const height1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  console.log("Elevation Map:", height1);
  console.log("Water Trapped:", trapWater(height1)); // Output: 6
  
  // Test case 2
  const height2 = [4, 2, 0, 3, 2, 5];
  console.log("Elevation Map:", height2);
  console.log("Water Trapped:", trapWater(height2)); // Output: 9
  