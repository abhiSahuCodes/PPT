//Q1.

function closestSumOne(numsOne, target) {
    numsOne.sort((a, b) => a - b);
    let closestSum = Infinity;
    for (let i = 0; i < numsOne.length - 2; i++) {
        let left = i + 1;
        let right = numsOne.length - 1;
        while (left < right) {
            const currentSum = numsOne[i] + numsOne[left] + numsOne[right];
            if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
                closestSum = currentSum;
            }
            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                return closestSum;
            }
        }
    }
    return closestSum;
}

//Testing the function
const numsOne = [-1, 2, 1, -4];
const targetOne = 1;
console.log(closestSumOne(numsOne, targetOne));

//=============================================================

//Q2.

function fourSum(numsTwo, target) {
    numsTwo.sort((a, b) => a - b);
    const results = [];
    for (let i = 0; i < numsTwo.length - 3; i++) {
        if (i > 0 && numsTwo[i] === numsTwo[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < numsTwo.length - 2; j++) {
            if (j > i + 1 && numsTwo[j] === numsTwo[j - 1]) {
                continue;
            }
            let left = j + 1;
            let right = numsTwo.length - 1;
            while (left < right) {
                const currentSum = numsTwo[i] + numsTwo[j] + numsTwo[left] + numsTwo[right];
                if (currentSum < target) {
                    left++;
                } else if (currentSum > target) {
                    right--;
                } else {
                    results.push([numsTwo[i], numsTwo[j], numsTwo[left], numsTwo[right]]);
                    while (left < right && numsTwo[left] === numsTwo[left + 1]) {
                        left++;
                    }
                    while (left < right && numsTwo[right] === numsTwo[right - 1]) {
                        right--;
                    }
                    left++;
                    right--;
                }
            }
        }
    }
    return results;
}

//Testing the function
const numsTwo = [1, 0, -1, 0, -2, 2];
const targetTwo = 0;
console.log(fourSum(numsTwo, targetTwo));

//======================================================================

//Q3.

function nextPermutation(numsThree) {
    let i = numsThree.length - 2;
    while (i >= 0 && numsThree[i] >= numsThree[i + 1]) {
        i--;
    }
    if (i >= 0) {
        let j = numsThree.length - 1;
        while (j >= 0 && numsThree[j] <= numsThree[i]) {
            j--;
        }
        swap(numsThree, i, j);
    }
    reverse(numsThree, i + 1);
    return numsThree;
}
function swap(numsThree, i, j) {
    const temp = numsThree[i];
    numsThree[i] = numsThree[j];
    numsThree[j] = temp;
}
function reverse(numsThree, start) {
    let i = start;
    let j = numsThree.length - 1;
    while (i < j) {
        swap(numsThree, i, j);
        i++;
        j--;
    }
}

//Testing the function
const numsThree = [1, 2, 3];
console.log(nextPermutation(numsThree));

//======================================================================

//Q4.

function searchInsert(numsFour, target) {
    let left = 0;
    let right = numsFour.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (numsFour[mid] === target) {
            return mid;
        } else if (numsFour[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}

//Testing the function
const numsFour = [1, 3, 5, 6];
const target = 5;
console.log(searchInsert(numsFour, target));

//======================================================================

//Q5.

function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        if (digits[i] < 10) {
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
}

//Testing the function
console.log(plusOne([1, 2, 3]));

//======================================================================

// Q8.

function canAttendAllMeetings(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < intervals[i - 1][1]) {
            return false;
        }
    }
    return true;
}
const intervals = [[0, 30], [5, 10], [15, 20]];

//Testing the function
console.log(canAttendAllMeetings(intervals)); 