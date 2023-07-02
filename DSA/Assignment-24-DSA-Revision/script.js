// Q1.

function romanToInt(s) {
  const romanToValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const currentValue = romanToValue[s[i]];
    const nextValue = romanToValue[s[i + 1]];

    if (nextValue && nextValue > currentValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }
  }

  return result;
}

console.log(romanToInt("III"));     
console.log(romanToInt("LVIII"));   

// ==============================================================

// Q2.

function lengthOfLongestSubstring(s) {
  let start = 0;
  let end = 0;
  let maxLen = 0;
  const uniqueChars = new Set();

  while (end < s.length) {
    const currentChar = s[end];

    if (!uniqueChars.has(currentChar)) {
      uniqueChars.add(currentChar);
      maxLen = Math.max(maxLen, end - start + 1);
      end++;
    } else {
      uniqueChars.delete(s[start]);
      start++;
    }
  }

  return maxLen;
}

console.log(lengthOfLongestSubstring("abcabcbb"));  
console.log(lengthOfLongestSubstring("bbbbb"));      
console.log(lengthOfLongestSubstring("pwwkew"));     

// ==================================================================

// Q3.

function majorityElement(nums) {
  let majority = null;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      majority = num;
      count = 1;
    } else if (num === majority) {
      count++;
    } else {
      count--;
    }
  }

  count = 0;
  for (let num of nums) {
    if (num === majority) {
      count++;
    }
    if (count > nums.length / 2) {
      return majority;
    }
  }

  return majority;
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([1, 2, 3, 4, 5, 6, 6, 6, 6]));

// ======================================================================

// Q4.

function groupAnagrams(strs) {
  const anagramGroups = {};

  for (let str of strs) {
    const sortedKey = str.split("").sort().join("");

    if (!anagramGroups.hasOwnProperty(sortedKey)) {
      anagramGroups[sortedKey] = [];
    }

    anagramGroups[sortedKey].push(str);
  }

  return Object.values(anagramGroups);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));

// ========================================================================

// Q5.

function nthUglyNumber(n) {
  const ugly = new Array(n);
  ugly[0] = 1;

  let p2 = 0;
  let p3 = 0;
  let p5 = 0;

  for (let i = 1; i < n; i++) {
    const next2 = ugly[p2] * 2;
    const next3 = ugly[p3] * 3;
    const next5 = ugly[p5] * 5;

    const nextUgly = Math.min(next2, next3, next5);

    if (nextUgly === next2) p2++;
    if (nextUgly === next3) p3++;
    if (nextUgly === next5) p5++;

    ugly[i] = nextUgly;
  }

  return ugly[n - 1];
}

console.log(nthUglyNumber(10));
console.log(nthUglyNumber(1));

// ===================================================================

// Q6.

function topKFrequentWords(words, k) {
  const wordCount = new Map();

  for (let word of words) {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
  }

  const wordFreqPairs = Array.from(wordCount.entries());

  wordFreqPairs.sort((a, b) => {
    const freqComparison = b[1] - a[1];
    if (freqComparison === 0) {
      return a[0].localeCompare(b[0]);
    }
    return freqComparison;
  });

  const topKWords = wordFreqPairs.slice(0, k).map((pair) => pair[0]);

  return topKWords;
}

console.log(topKFrequentWords(["i", "love", "leetcode", "i", "love", "coding"], 2));
console.log(topKFrequentWords(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4));

// =====================================================================

// Q7.

function maxSlidingWindow(nums, k) {
  const queue = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    while (queue.length > 0 && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }

    queue.push(i);

    if (queue[0] <= i - k) {
      queue.shift();
    }

    if (i >= k - 1) {
      result.push(nums[queue[0]]);
    }
  }

  return result;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1], 1));

// =================================================================

// Q8.

function findClosestElements(arr, k, x) {
  let left = 0;
  let right = arr.length - 1;

  while (right - left >= k) {
    const diffLeft = Math.abs(arr[left] - x);
    const diffRight = Math.abs(arr[right] - x);

    if (diffLeft <= diffRight) {
      right--;
    } else {
      left++;
    }
  }

  return arr.slice(left, right + 1);
}

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1));
