// Q1.

function mySqrt(x) {
    if (x === 0 || x === 1) {
        return x;
    }

    let left = 1;
    let right = Math.floor(x / 2); 
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midSquared = mid * mid;

        if (midSquared === x) {
            return mid; 
        } else if (midSquared < x) {
            left = mid + 1; 
        } else {
            right = mid - 1;
        }
    }
    
    return right;
}

// Testing:
console.log(mySqrt(4)); 
console.log(mySqrt(8)); 

// ===============================================================================

// Q2.

function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid; 
        }
    }

    return left; 
}

// Testing:
console.log(findPeakElement([1, 2, 3, 1])); 
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); 

// ========================================================================================

// Q3.

function findMissingNumber(nums) {
    const n = nums.length;
    const totalSum = (n * (n + 1)) / 2; 

    const arraySum = nums.reduce((acc, num) => acc + num, 0); 

    const missingNumber = totalSum - arraySum; 

    return missingNumber;
}

// Testing
console.log(findMissingNumber([3, 0, 1])); 
console.log(findMissingNumber([0, 1]));    
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); 

// ========================================================================================

// Q4.

function findDuplicate(nums) {
    let slow = nums[0];
    let fast = nums[0];

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    let ptr1 = nums[0];
    let ptr2 = slow;

    while (ptr1 !== ptr2) {
        ptr1 = nums[ptr1];
        ptr2 = nums[ptr2];
    }

    return ptr1;
}

// Testing
console.log(findDuplicate([1, 3, 4, 2, 2])); 
console.log(findDuplicate([3, 1, 3, 4, 2])); 

// ====================================================================================

// Q5.

function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const resultSet = new Set();

    for (const num of nums2) {
        if (set1.has(num)) {
            resultSet.add(num);
        }
    }

    return Array.from(resultSet); 
}

// Testing
console.log(intersection([1, 2, 2, 1], [2, 2])); 
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); 

// ====================================================================================

// Q6.

function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return nums[left];
}

// Testing
console.log(findMin([3, 4, 5, 1, 2])); 
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); 
console.log(findMin([11, 13, 15, 17])); 

// ==================================================================================

// Q7.

function searchRange(nums, target) {
    const findLeftmost = (target) => {
        let left = 0;
        let right = nums.length - 1;
        let leftmost = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] >= target) {
                right = mid - 1;
                if (nums[mid] === target) {
                    leftmost = mid;
                }
            } else {
                left = mid + 1;
            }
        }

        return leftmost;
    };

    const findRightmost = (target) => {
        let left = 0;
        let right = nums.length - 1;
        let rightmost = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] <= target) {
                left = mid + 1;
                if (nums[mid] === target) {
                    rightmost = mid;
                }
            } else {
                right = mid - 1;
            }
        }

        return rightmost;
    };
    const leftmost = findLeftmost(target);
    const rightmost = findRightmost(target);

    return [leftmost, rightmost];
}

// Testing
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));

// ======================================================================================

// Q8.

function intersect(nums1, nums2) {
    const frequencyMap = new Map();
    const result = [];

    for (const num of nums1) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    for (const num of nums2) {
        if (frequencyMap.has(num) && frequencyMap.get(num) > 0) {
            result.push(num);
            frequencyMap.set(num, frequencyMap.get(num) - 1);
        }
    }

    return result;
}

// Testing 
console.log(intersect([1, 2, 2, 1], [2, 2])); 
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); 
