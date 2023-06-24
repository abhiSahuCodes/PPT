// Q1.

function findFirstUniqueCharIndex(s) {
    const queue = [];
    const charMap = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (!charMap[char]) {
            queue.push(char);
        }
        charMap[char] = (charMap[char] || 0) + 1;
    }

    while (queue.length > 0) {
        const char = queue[0];
        if (charMap[char] === 1) {
            return s.indexOf(char);
        } else {
            queue.shift();
        }
    }

    return -1;
}

// Testing the function
console.log(findFirstUniqueCharIndex("leetcode")); 
console.log(findFirstUniqueCharIndex("loveleetcode"));
console.log(findFirstUniqueCharIndex("aabb")); 

// =====================================================================

// Q2.

function maxSubarraySumCircular(nums) {
    let maxSum = nums[0];
    let currentMax = nums[0];
    for (let i = 1; i < nums.length; i++) {
      currentMax = Math.max(currentMax + nums[i], nums[i]);
      maxSum = Math.max(maxSum, currentMax);
    }
    let totalSum = nums.reduce((acc, num) => acc + num, 0);
  
    let minSum = nums[0];
    let currentMin = nums[0];
    for (let i = 1; i < nums.length - 1; i++) {
      currentMin = Math.min(currentMin + nums[i], nums[i]);
      minSum = Math.min(minSum, currentMin);
    }
  
    let maxCircularSum = totalSum - minSum;
  
    return Math.max(maxSum, maxCircularSum);
  }
  
// Testing the function
  console.log(maxSubarraySumCircular([1, -2, 3, -2])); 
  console.log(maxSubarraySumCircular([5, -3, 5])); 
  console.log(maxSubarraySumCircular([-3, -2, -3])); 
  
// =====================================================================

// Q3.

function countStudentsUnableToEat(students, sandwiches) {
    const queue = [...students];
    const stack = [...sandwiches];
    let consecutiveFailures = 0;
  
    while (consecutiveFailures < queue.length) {
      const student = queue[0];
      const sandwich = stack[0];
  
      if (student === sandwich) {
        queue.shift();
        stack.shift();
        consecutiveFailures = 0;
      } else {
        queue.push(queue.shift());
        consecutiveFailures++;
      }
    }
  
    return consecutiveFailures;
  }
  
// Testing the function
  console.log(countStudentsUnableToEat([1, 1, 0, 0], [0, 1, 0, 1])); 
  console.log(countStudentsUnableToEat([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));
  
// =====================================================================

// Q4.

class RecentCounter {
    constructor() {
      this.requests = [];
    }
  
    ping(t) {
      this.requests.push(t);
      while (this.requests[0] < t - 3000) {
        this.requests.shift();
      }
      return this.requests.length;
    }
  }
  
  // Testing the function
  const recentCounter = new RecentCounter();
  console.log(recentCounter.ping(1));     
  console.log(recentCounter.ping(100));   
  console.log(recentCounter.ping(3001));  
  console.log(recentCounter.ping(3002));  
  
// =====================================================================

// Q5.

function findTheWinner(n, k) {
    const circle = Array.from({ length: n }, (_, index) => index + 1);
  
    let currentIndex = 0;
    while (circle.length > 1) {
      currentIndex = (currentIndex + k - 1) % circle.length;
      circle.splice(currentIndex, 1);
    }
  
    return circle[0];
  }
  
  // Testing the function
  console.log(findTheWinner(5, 2)); 
  console.log(findTheWinner(6, 5)); 
  
// =====================================================================

// Q6.

function deckRevealedIncreasing(deck) {
    const n = deck.length;
    deck.sort((a, b) => a - b);
  
    const queue = [];
    for (let i = 0; i < n; i++) {
      queue.push(i);
    }
  
    const result = [];
    for (const card of deck) {
      result[queue.shift()] = card;
      if (queue.length > 0) {
        queue.push(queue.shift());
      }
    }
  
    return result;
  }
  
  // Testing the function
  console.log(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7])); 
  console.log(deckRevealedIncreasing([1, 1000])); 
  
// =====================================================================

// Q7.

function FrontMiddleBackQueue() {
    const queue = [];
  
    function pushFront(val) {
      queue.unshift(val);
    }
  
    function pushMiddle(val) {
      const middle = Math.floor(queue.length / 2);
      queue.splice(middle, 0, val);
    }
  
    function pushBack(val) {
      queue.push(val);
    }
  
    function popFront() {
      if (queue.length === 0) return 1;
      return queue.shift();
    }
  
    function popMiddle() {
      if (queue.length === 0) return 1;
      const middle = Math.floor((queue.length - 1) / 2);
      return queue.splice(middle, 1)[0];
    }
  
    function popBack() {
      if (queue.length === 0) return 1;
      return queue.pop();
    }
  
    return {
      pushFront,
      pushMiddle,
      pushBack,
      popFront,
      popMiddle,
      popBack
    };
  }
  
  const q = FrontMiddleBackQueue();
  q.pushFront(1);   
  q.pushBack(2);    
  q.pushMiddle(3);  
  q.pushMiddle(4);  
  console.log(q.popFront());     
  console.log(q.popMiddle());    
  console.log(q.popMiddle());    
  console.log(q.popBack());      
  console.log(q.popFront());     

// =====================================================================

// Q8.

function DataStream(value, k) {
    const stream = [];
  
    function consec(num) {
      stream.push(num);
  
      if (stream.length < k) {
        return false;
      }
  
      const lastKIntegers = stream.slice(-k);
      const areEqual = lastKIntegers.every((integer) => integer === value);
  
      return areEqual;
    }
  
    return {
      consec,
    };
  }
  
  const dataStream = DataStream(4, 3);
  console.log(dataStream.consec(4));  
  console.log(dataStream.consec(4));  
  console.log(dataStream.consec(4));  
  console.log(dataStream.consec(3));  
  
  