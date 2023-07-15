// Q.1

function reconstructPermutation(s) {
  const n = s.length;
  const perm = new Array(n + 1);
  let currValue = 0;

  for (let i = 0; i <= n; i++) {
    if (i === n || s[i] === 'I') {
      perm[i] = currValue;
      currValue++;
    } else {
      let countDs = 0;
      while (i + countDs < n && s[i + countDs] === 'D') {
        countDs++;
      }
      for (let j = i + countDs; j >= i; j--) {
        perm[j] = currValue + countDs - (j - i);
      }

      currValue += countDs + 1;
      i += countDs;
    }
  }

  return perm;
}

// Testing 
const s = "IDID";
const resultOne = reconstructPermutation(s);
console.log(resultOne);


// =================================================================================

// Q2.

function searchMatrix(matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  let left = 0;
  let right = m * n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = matrix[Math.floor(mid / n)][mid % n];

    if (midValue === target) {
      return true;
    } else if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

// Testing 
const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target = 3;
const resultTwo = searchMatrix(matrix, target);
console.log(resultTwo);

// ==========================================================================

// Q3.

function validMountainArray(arr) {
  const n = arr.length;
  if (n < 3) {
    return false;
  }

  let peakIndex = 0;
  while (peakIndex < n - 1 && arr[peakIndex] < arr[peakIndex + 1]) {
    peakIndex++;
  }

  if (peakIndex === 0 || peakIndex === n - 1) {
    return false;
  }

  while (peakIndex < n - 1 && arr[peakIndex] > arr[peakIndex + 1]) {
    peakIndex++;
  }

  return peakIndex === n - 1;
}

// Testing 
const arr = [2, 1];
const resultThree = validMountainArray(arr);
console.log(resultThree);

// ==============================================================================

// Q4.

function findMaxLength(nums) {
  const n = nums.length;
  let maxLength = 0;
  let sum = 0;
  const sumIndexMap = new Map();

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      nums[i] = -1;
    }

    sum += nums[i];

    if (sum === 0) {
      maxLength = i + 1;
    } else if (sumIndexMap.has(sum)) {
      maxLength = Math.max(maxLength, i - sumIndexMap.get(sum));
    } else {
      sumIndexMap.set(sum, i);
    }
  }

  return maxLength;
}

// Testing 
const nums = [0, 1];
const resultFour = findMaxLength(nums);
console.log(resultFour);

// ============================================================================

// Q5.

function minProductSum(nums1, nums2) {
  const n = nums1.length;
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => b - a);

  let minProductSum = 0;
  for (let i = 0; i < n; i++) {
    minProductSum += nums1[i] * nums2[i];
  }

  return minProductSum;
}

// Testing 
const nums1 = [5, 3, 4, 2];
const nums2 = [4, 2, 2, 5];
const resultFive = minProductSum(nums1, nums2);
console.log(resultFive);

// =========================================================================

// Q6.

function findOriginalArray(changed) {
  if (changed.length % 2 !== 0) {
    return [];
  }

  const n = changed.length;
  const frequencyMap = new Array(100001).fill(0);

  for (const num of changed) {
    frequencyMap[num]++;
  }

  const original = [];

  for (let i = 0; i < frequencyMap.length; i++) {
    while (frequencyMap[i] > 0) {
      if (frequencyMap[2 * i] > 0) {
        original.push(i);
        frequencyMap[i]--;
        frequencyMap[2 * i]--;
      } else {
        break;
      }
    }
  }

  return original.length === n / 2 ? original : [];
}

// Testing 
const changed = [1, 3, 4, 2, 6, 8];
const result = findOriginalArray(changed);
console.log(result);

// ========================================================================

// Q7.

function generateSpiralMatrix(n) {
  const matrix = new Array(n).fill().map(() => new Array(n).fill(0));

  let num = 1;
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;
  let direction = 'right';

  while (num <= n * n) {
    if (direction === 'right') {
      for (let i = left; i <= right; i++) {
        matrix[top][i] = num++;
      }
      top++;
    } else if (direction === 'down') {
      for (let i = top; i <= bottom; i++) {
        matrix[i][right] = num++;
      }
      right--;
    } else if (direction === 'left') {
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = num++;
      }
      bottom--;
    } else if (direction === 'up') {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = num++;
      }
      left++;
    }

    if (direction === 'right') {
      direction = 'down';
    } else if (direction === 'down') {
      direction = 'left';
    } else if (direction === 'left') {
      direction = 'up';
    } else if (direction === 'up') {
      direction = 'right';
    }
  }

  return matrix;
}

// Testing 
const n = 3;
const resultSeven = generateSpiralMatrix(n);
console.log(resultSeven);

// ========================================================================

// Q8.

function multiplySparseMatrices(mat1, mat2) {
  const m = mat1.length;
  const k = mat1[0].length;
  const n = mat2[0].length;

  const result = new Array(m).fill().map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < k; j++) {
      if (mat1[i][j] !== 0) {
        for (let l = 0; l < n; l++) {
          if (mat2[j][l] !== 0) {
            result[i][l] += mat1[i][j] * mat2[j][l];
          }
        }
      }
    }
  }

  return result;
}

// Testing 
const mat1 = [[1, 0, 0], [-1, 0, 3]];
const mat2 = [[7, 0, 0], [0, 0, 0], [0, 0, 1]];
const resultEight = multiplySparseMatrices(mat1, mat2);
console.log(resultEight);
