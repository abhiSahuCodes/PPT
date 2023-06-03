//Q1.
function commonElements(arr1, arr2, arr3) {
  const m = arr1.length;
  const n = arr2.length;
  const p = arr3.length;
  let i = 0;
  let j = 0;
  let k = 0;
  const result = [];
  while (i < m && j < n && k < p) {
    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
      result.push(arr1[i]);
      i++;
      j++;
      k++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr3[k]) {
      j++;
    } else {
      k++;
    }
  }
  return result;
}

// Testing the function:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 5, 7, 9];
const arr3 = [1, 3, 4, 5, 8];
console.log(commonElements(arr1, arr2, arr3));

//=======================================================================

//Q2.
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
// Testing the function:
const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];
console.log(findDisjoint(nums1, nums2));

//======================================================================
// Q6.
function sortedSquares(nums) {
  const n = nums.length;
  const result = new Array(n);
  let left = 0;
  let right = n - 1;
  for (let i = n - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[i] = nums[left] * nums[left];
      left++;
    } else {
      result[i] = nums[right] * nums[right];
      right--;
    }
  }
  return result;
}
// Testing the function:
const nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums)); 