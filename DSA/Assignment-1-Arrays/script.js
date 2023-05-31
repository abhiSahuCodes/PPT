//Q1. 

function twoSum(numsOne, targetOne) {
    for (let i = 0; i < numsOne.length; i++) {
      for (let j = i + 1; j < numsOne.length; j++) {
        if (numsOne[i] + numsOne[j] === targetOne) {
          return [i, j];
        }
      }
    }
    return [];
  }

// Testing the function
  const numsOne = [2, 7, 11, 15];
  const targetOne = 9;
  const resultOne = twoSum(numsOne, targetOne);
  console.log(resultOne);

// =========================================================

//Q2.

function removeElement(numsTwo, valTwo) {
    let count = 0;

    for (let i = 0; i < numsTwo.length; i++) {
      if (numsTwo[i] !== valTwo) {
        numsTwo[count] = numsTwo[i];
        count++;
      }
    }

    return count;
  }

  // Testing the function
  const numsTwo = [4, 1, 4, 6, 9, 4];
  const valTwo = 4;
  const resultTwo = removeElement(numsTwo, valTwo);
  console.log(resultTwo);
  console.log(numsTwo.slice(0, resultTwo));

//  =======================================================
//Q3.

function searchInsert(numsThree, targetThree) {
    let start = 0;
    let end = numsThree.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (numsThree[mid] === targetThree) {
            return mid;
        } else if (targetThree > numsThree[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return end + 1;
}

// Testing the function
const numsThree = [1, 3, 5, 6];
const targetThree = 10;
const result = searchInsert(numsThree, targetThree);
console.log(result);

// =============================================================
// Q4.

function plusOne(digits) {
    let i = digits.length - 1;

    while (i >= 0) {
      digits[i]++;
      
      if (digits[i] === 10) {
        digits[i] = 0;
        i--;
      } else {
        break;
      }
    }
    
    if (digits[0] === 0) {
      digits.unshift(1);
    }
    
    return digits;
  }
  
  // Testing the function
  const digits = [1, 2, 3];
  const resultFour = plusOne(digits);
  console.log(resultFour);

// =============================================================
// Q5.

function merge(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    
    while (i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
        nums1[k] = nums1[i];
        i--;
      } else {
        nums1[k] = nums2[j];
        j--;
      }
      k--;
    }
    
    while (j >= 0) {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }
  
  // Testing the function
  const nums1 = [1, 2, 3, 0, 0, 0];
  const m = 3;
  const nums2 = [2, 5, 6];
  const n = 3;
  merge(nums1, m, nums2, n);
  console.log(nums1); 

// =============================================================
// Q6.

function containsDuplicate(numsSix) {
    const numSet = new Set();
  
    for (let num of numsSix) {
      if (numSet.has(num)) {
        return true;
      } else {
        numSet.add(num);
      }
    }
  
    return false;
  }
  
  // Example usage
  const numsSix = [1, 2, 3, 1];
  const hasDuplicates = containsDuplicate(numsSix);
  console.log(hasDuplicates); // Output: true
  
// =============================================================
// Q7.

function moveZeroes(numsSeven) {
    let insertPosition = 0;
  
    for (let num of numsSeven) {
      if (num !== 0) {
        numsSeven[insertPosition] = num;
        insertPosition++;
      }
    }
  
    while (insertPosition < numsSeven.length) {
      numsSeven[insertPosition] = 0;
      insertPosition++;
    }
  }
  
  // Example usage
  const numsSeven = [0, 1, 0, 3, 12];
  moveZeroes(numsSeven);
  console.log(numsSeven);



