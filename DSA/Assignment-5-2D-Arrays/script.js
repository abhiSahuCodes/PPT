// Q3.
function sortedSquares(numsThree) {
    const n = numsThree.length;
    const result = new Array(n);
    let left = 0;
    let right = n - 1;
    for (let i = n - 1; i >= 0; i--) {
      if (Math.abs(numsThree[left]) > Math.abs(numsThree[right])) {
        result[i] = numsThree[left] * numsThree[left];
        left++;
      } else {
        result[i] = numsThree[right] * numsThree[right];
        right--;
      }
    }
    return result;
  }
//Testing the function:
  const numsThree = [-4, -1, 0, 3, 10];
  console.log(sortedSquares(numsThree)); // Output: [0, 1, 9, 16, 100]

//==================================================================

// Q4.
function findDisjoint(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const disjoint1 = [];
    const disjoint2 = [];
    for (const num of set1) {
      if (!set2.has(num)) {
        disjoint1.push(num);
      }
    }
    for (const num of set2) {
      if (!set1.has(num)) {
        disjoint2.push(num);
      }
    }
    return [disjoint1, disjoint2];
  }
//Testing the function:
  const nums1 = [1, 2, 3];
  const nums2 = [2, 4, 6];
  console.log(findDisjoint(nums1, nums2)); 

//==================================================================

// Q6.
function findDuplicates(numsSix) {
    const result = [];
    for (let i = 0; i < numsSix.length; i++) {
      const index = Math.abs(numsSix[i]) - 1;
      if (numsSix[index] < 0) {
        result.push(index + 1);
      } else {
        numsSix[index] = -numsSix[index];
      }
    }
    return result;
  }
//Testing the function:
  const numsSix = [4, 3, 2, 7, 8, 2, 3, 1];
  const resultSix = findDuplicates(numsSix);
  console.log(resultSix); 

//==================================================================

// Q8.
function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      return [];
    }
    const freq = new Map();
    const result = [];
    for (let i = 0; i < changed.length; i++) {
      freq.set(changed[i], (freq.get(changed[i]) || 0) + 1);
    }
    changed.sort((a, b) => a - b);
    for (let i = 0; i < changed.length; i++) {
      const num = changed[i];
      if (freq.get(num) === 0) {
        continue;
      }
      if (freq.get(num * 2) === 0) {
        return [];
      }
      freq.set(num, freq.get(num) - 1);
      freq.set(num * 2, freq.get(num * 2) - 1);
      result.push(num);
    }
    return result;
  }
//Testing the function:
  const changed = [1, 3, 4, 2, 6, 8];
  const resultEight = findOriginalArray(changed);
  console.log(resultEight); 