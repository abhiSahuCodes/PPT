// Q1.

function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

    if (currentInterval[0] <= lastMergedInterval[1]) {

      lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
    } else {

      mergedIntervals.push(currentInterval);
    }
  }

  return mergedIntervals;
}

// Testing the function
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
const merged = mergeIntervals(intervals);
console.log(merged);

// ===============================================================================   
// Q2.

function sortColors(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {

      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {

      mid++;
    } else if (nums[mid] === 2) {

      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}

// Testing the function
const numsTwo = [2, 0, 2, 1, 1, 0];
sortColors(numsTwo);
console.log(numsTwo);

// ===============================================================================   

// Q3.

function firstBadVersion(n) {
  let left = 1;
  let right = n;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (isBadVersion(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function isBadVersion(version) {

  return version >= 4;
}

// Testing the function
const n = 5;
const firstBad = firstBadVersion(n);
console.log(firstBad);

// ===============================================================================   

// Q4.

function maximumGap(numsThird) {
  const n = numsThird.length;

  if (n < 2) {
    return 0;
  }


  let minNum = Math.min(...numsThird);
  let maxNum = Math.max(...numsThird);


  const minGap = Math.ceil((maxNum - minNum) / (n - 1));


  const bucketSize = Math.floor((maxNum - minNum) / minGap) + 1;


  const buckets = new Array(bucketSize).fill().map(() => ({ min: Infinity, max: -Infinity }));


  for (let i = 0; i < n; i++) {
    const num = numsThird[i];
    const bucketIndex = Math.floor((num - minNum) / minGap);
    buckets[bucketIndex].min = Math.min(buckets[bucketIndex].min, num);
    buckets[bucketIndex].max = Math.max(buckets[bucketIndex].max, num);
  }


  let maxGap = 0;
  let prevMax = minNum;

  for (let i = 0; i < bucketSize; i++) {
    if (buckets[i].min !== Infinity && buckets[i].max !== -Infinity) {
      maxGap = Math.max(maxGap, buckets[i].min - prevMax);
      prevMax = buckets[i].max;
    }
  }

  return maxGap;
}

// Testing the function
const numsThird = [3, 6, 9, 1];
const maxGap = maximumGap(numsThird);
console.log(maxGap); // Output: 3

// ===============================================================================   

// Q5.

function containsDuplicate(nums) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }

  return false;
}

// Testing the function
const nums = [1, 2, 3, 1];
const hasDuplicate = containsDuplicate(nums);
console.log(hasDuplicate);

// ===============================================================================   

// Q6.

function findMinArrowShots(points) {
  if (points.length === 0) {
    return 0;
  }


  points.sort((a, b) => a[1] - b[1]);

  let arrows = 1;
  let end = points[0][1];


  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > end) {

      arrows++;
      end = points[i][1];
    }
  }

  return arrows;
}

// Testing the function
const points = [[10, 16], [2, 8], [1, 6], [7, 12]];
const minArrows = findMinArrowShots(points);
console.log(minArrows);

// ===============================================================================   

// Q7.

function lengthOfLIS(numsSeventh) {
  const n = numsSeventh.length;
  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (numsSeventh[i] > numsSeventh[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

// Testing the function
const numsSeventh = [10, 9, 2, 5, 3, 7, 101, 18];
const longestLength = lengthOfLIS(numsSeventh);
console.log(longestLength);

// ===============================================================================   

// Q8.

function find132pattern(numsEighth) {
  const n = numsEighth.length;
  const stack = [];

  let two = -Infinity;

  for (let i = n - 1; i >= 0; i--) {
    if (numsEighth[i] < two) {
      return true;
    }

    while (stack.length > 0 && numsEighth[i] > stack[stack.length - 1]) {
      two = stack.pop();
    }

    stack.push(numsEighth[i]);
  }

  return false;
}

// Testing the function
const numsEighth = [1, 2, 3, 4];
const has132pattern = find132pattern(numsEighth);
console.log(has132pattern);

const numsEightAgain = [3, 1, 4, 2]
const is132pattern = find132pattern(numsEightAgain);
console.log(is132pattern);