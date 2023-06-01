// Q1.

function arrayPairSum(nums) {
    nums.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
        return sum;
    }
}
//Testing the function
console.log(arrayPairSum([1, 4, 3, 2]));

//=============================================================

//Q2.

function maximumCandies(candyType) {
    const maximumCandies = candyType.length / 2;
    const uniqueCandies = new Set(candyType);
    return Math.min(maximumCandies, uniqueCandies.size);
}

//Testing the function
console.log(maximumCandies([1, 1, 2, 2, 3, 3]));

//=============================================================

//Q3.

function findingLHS(nums) {
    const numCount = new Map();
    let maxLength = 0;
    for (let num of nums) {
        numCount.set(num, (numCount.get(num) || 0) + 1);
    }
    for (let [num, count] of numCount) {
        if (numCount.has(num + 1)) {
            maxLength = Math.max(maxLength, count + numCount.get(num + 1));
        }
    }
    return maxLength;
}

//Testing the function
console.log(findingLHS([1, 3, 2, 2, 5, 2, 3, 7]));


//=============================================================

//Q4.

function canPlaceFlowers(flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
            flowerbed[i] = 1;
            count++;
        }
    }
    return count >= n;
}

//Testing the function
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));

//=============================================================

//Q5.

function maximumProduct(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
    const product2 = nums[0] * nums[1] * nums[n - 1];
    return Math.max(product1, product2);
}

//Testing the function
console.log(maximumProduct([1, 2, 3]));

//=============================================================

//Q6.

function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

//Testing the function
console.log(search([-1, 0, 3, 5, 9, 12], 9));

//=============================================================

//Q7.

function isMonotonic(nums) {
    let increasing = true;
    let decreasing = true;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            increasing = false;
        }
        if (nums[i] > nums[i - 1]) {
            decreasing = false;
        }
    }
    return increasing || decreasing;
}

//Testing the function
console.log(isMonotonic([1, 2, 2, 3]));

//=============================================================

//Q8.

function minimumScore(nums, k) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let minScore = nums[n - 1] - nums[0];
    for (let i = 0; i < n - 1; i++) {
        const maxVal = Math.max(nums[i] + k, nums[n - 1] - k);
        const minVal = Math.min(nums[i + 1] - k, nums[0] + k);
        minScore = Math.min(minScore, maxVal - minVal);
    }
    return minScore;
}

//Testing the function
console.log(minimumScore([1], 0));