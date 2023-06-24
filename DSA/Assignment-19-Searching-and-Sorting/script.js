// Q1.

function mergeKLists(lists) {
    if (lists.length === 0) {
        return null;
    }
    while (lists.length > 1) {
        const mergedLists = [];
        for (let i = 0; i < lists.length; i += 2) {
            const merged = mergeTwoLists(lists[i], lists[i + 1]);
            mergedLists.push(merged);
        }
        lists = mergedLists;
    }
    return lists[0];
}

function mergeTwoLists(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    let mergedHead;
    if (l1.val <= l2.val) {
        mergedHead = l1;
        mergedHead.next = mergeTwoLists(l1.next, l2);
    } else {
        mergedHead = l2;
        mergedHead.next = mergeTwoLists(l1, l2.next);
    }
    return mergedHead;
}

// =============================================================

// Q2.

function countSmaller(nums) {
    const result = new Array(nums.length).fill(0);

    function mergeSortWithCount(start, end) {
        if (start === end) {
            return [start];
        }

        const mid = Math.floor((start + end) / 2);
        const left = mergeSortWithCount(start, mid);
        const right = mergeSortWithCount(mid + 1, end);
        const merged = [];
        let count = 0;

        let i = 0;
        let j = 0;

        while (i < left.length && j < right.length) {
            if (nums[left[i]] <= nums[right[j]]) {
                result[left[i]] += count;
                merged.push(left[i]);
                i++;
            } else {
                count++;
                merged.push(right[j]);
                j++;
            }
        }

        while (i < left.length) {
            result[left[i]] += count;
            merged.push(left[i]);
            i++;
        }

        while (j < right.length) {
            merged.push(right[j]);
            j++;
        }

        return merged;
    }

    mergeSortWithCount(0, nums.length - 1);

    return result;
}

// Testing the function
console.log(countSmaller([5, 2, 6, 1]));
console.log(countSmaller([-1]));
console.log(countSmaller([-1, -1]));


// =============================================================

// Q3.

function sortArray(nums) {
    function mergeSort(nums) {
        if (nums.length <= 1) {
            return nums;
        }

        const mid = Math.floor(nums.length / 2);
        const left = nums.slice(0, mid);
        const right = nums.slice(mid);

        const sortedLeft = mergeSort(left);
        const sortedRight = mergeSort(right);

        return merge(sortedLeft, sortedRight);
    }

    function merge(left, right) {
        const merged = [];
        let i = 0;
        let j = 0;

        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                merged.push(left[i]);
                i++;
            } else {
                merged.push(right[j]);
                j++;
            }
        }

        while (i < left.length) {
            merged.push(left[i]);
            i++;
        }

        while (j < right.length) {
            merged.push(right[j]);
            j++;
        }

        return merged;
    }

    return mergeSort(nums);
}

// Testing the function

console.log(sortArray([5, 2, 3, 1]));
console.log(sortArray([5, 1, 1, 2, 0, 0]));

// =============================================================

// Q4.

function moveZeroesToEnd(arr) {
    let left = 0;
    let right = 0;

    while (right < arr.length) {
        if (arr[right] !== 0) {

            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
        }
        right++;
    }


    while (left < arr.length) {
        arr[left] = 0;
        left++;
    }

    return arr;
}

// Testing the function

console.log(moveZeroesToEnd([1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0]));
console.log(moveZeroesToEnd([1, 2, 0, 4, 3, 0, 5, 0]));
console.log(moveZeroesToEnd([1, 2, 0, 0, 0, 3, 6]));

// =============================================================

// Q6.

function mergeSortedArrays(arr1, arr2) {
    const len1 = arr1.length;
    const len2 = arr2.length;
    let ptr1 = 0;
    let ptr2 = 0;
    const merged = [];

    while (ptr1 < len1 && ptr2 < len2) {
        if (arr1[ptr1] <= arr2[ptr2]) {
            merged.push(arr1[ptr1]);
            ptr1++;
        } else {
            merged.push(arr2[ptr2]);
            ptr2++;
        }
    }

    while (ptr1 < len1) {
        merged.push(arr1[ptr1]);
        ptr1++;
    }

    while (ptr2 < len2) {
        merged.push(arr2[ptr2]);
        ptr2++;
    }

    return merged;
}

// Testing the function
console.log(mergeSortedArrays([1, 3, 4, 5], [2, 4, 6, 8]));
console.log(mergeSortedArrays([5, 8, 9], [4, 7, 8]));

// =============================================================

// Q7.

function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const intersectionSet = new Set();

    for (const num of nums2) {
        if (set1.has(num)) {
            intersectionSet.add(num);
        }
    }

    return Array.from(intersectionSet);
}

// Testing the function
console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));

// =============================================================

// Q8.

function intersect(nums1, nums2) {
    const freqMap1 = createFrequencyMap(nums1);
    const result = [];

    for (const num of nums2) {
        if (freqMap1[num] > 0) {
            result.push(num);
            freqMap1[num]--;
        }
    }

    return result;
}

function createFrequencyMap(nums) {
    const freqMap = {};

    for (const num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    return freqMap;
}

// Testing the function
console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));

