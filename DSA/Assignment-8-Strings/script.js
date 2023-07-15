// Q1.

function minASCIIDeleteSum(s1, s2) {
    const m = s1.length;
    const n = s2.length;

    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + s1.charCodeAt(i - 1);
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    let asciiSumS1 = 0;
    let asciiSumS2 = 0;
    for (let i = 0; i < m; i++) {
        asciiSumS1 += s1.charCodeAt(i);
    }
    for (let i = 0; i < n; i++) {
        asciiSumS2 += s2.charCodeAt(i);
    }

    const lcsAsciiSum = dp[m][n];

    const minASCIISum = asciiSumS1 + asciiSumS2 - 2 * lcsAsciiSum;

    return minASCIISum;
}

// Testing
const s1 = "sea";
const s2 = "eat";
console.log(minASCIIDeleteSum(s1, s2)); 

// ====================================================================================

// Q2.

function isValidString(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '*') {
            stack.push(i);
        } else if (s[i] === ')') {
            if (stack.length > 0) {
                stack.pop();
            } else {
                return false; 
            }
        }
    }

    while (stack.length > 0) {
        const currentIdx = stack.pop();
        const asteriskIdx = stack.pop();
        if (currentIdx < asteriskIdx) {
            return false; 
        }
    }

    return true;
}

// Testing
const s = "()";
console.log(isValidString(s)); 

// =============================================================================

// Q3.

function minStepsToSame(word1, word2) {
    const m = word1.length;
    const n = word2.length;

    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    const lcsLength = dp[m][n];

    const minSteps = m + n - 2 * lcsLength;

    return minSteps;
}

// Testing
const word1 = "sea";
const word2 = "eat";
console.log(minStepsToSame(word1, word2)); 

// ==============================================================================

// Q4.

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function strToTree(s) {
    if (!s) return null;

    let index = 0;

    function parseNode() {
        if (index >= s.length) return null;

        let start = index;
        while (index < s.length && (s[index] === '-' || !isNaN(Number(s[index])))) {
            index++;
        }
        const value = Number(s.slice(start, index));

        const node = new TreeNode(value);

        if (index < s.length && s[index] === '(') {
            index++; 
            node.left = parseNode(); 

            if (index < s.length && s[index] === ')') {
                index++; 
            }

            if (index < s.length && s[index] === '(') {
                index++; 
                node.right = parseNode(); 

                if (index < s.length && s[index] === ')') {
                    index++; 
                }
            }
        }

        return node;
    }

    return parseNode();
}

function inOrderTraversal(root) {
    const result = [];

    function traverse(node) {
        if (node) {
            traverse(node.left);
            result.push(node.val);
            traverse(node.right);
        }
    }

    traverse(root);
    return result;
}

// Testing
const example = "4(2(3)(1))(6(5))";
const root = strToTree(example);
console.log(inOrderTraversal(root)); 

// ======================================================================

// Q5.

function compress(chars) {
    let readPtr = 0;
    let writePtr = 0;

    while (readPtr < chars.length) {
        let currentChar = chars[readPtr];
        let count = 0;

        while (readPtr < chars.length && chars[readPtr] === currentChar) {
            readPtr++;
            count++;
        }

        chars[writePtr] = currentChar;
        writePtr++;

        if (count > 1) {
            for (let digit of count.toString()) {
                chars[writePtr] = digit;
                writePtr++;
            }
        }
    }

    return writePtr;
}

// Testing
const chars = ["a", "a", "b", "b", "c", "c", "c"];
const newLength = compress(chars);
console.log("New Length:", newLength);
console.log("Compressed Array:", chars.slice(0, newLength));

// ==========================================================================

// Q6.

function findAnagrams(s, p) {
    const pMap = new Map();
    const windowMap = new Map();
    const result = [];

    for (const char of p) {
        pMap.set(char, (pMap.get(char) || 0) + 1);
    }

    let left = 0;
    let right = 0;

    while (right < s.length) {
        windowMap.set(s[right], (windowMap.get(s[right]) || 0) + 1);

        if (right - left + 1 > p.length) {
            const leftChar = s[left];
            windowMap.set(leftChar, windowMap.get(leftChar) - 1);
            if (windowMap.get(leftChar) === 0) {
                windowMap.delete(leftChar);
            }
            left++;
        }

        if (right - left + 1 === p.length && areMapsEqual(pMap, windowMap)) {
            result.push(left);
        }

        right++;
    }

    return result;
}

function areMapsEqual(map1, map2) {
    if (map1.size !== map2.size) return false;
    for (const [key, value] of map1) {
        if (value !== map2.get(key)) return false;
    }
    return true;
}

// Testing
const paramOne = "cbaebabacd";
const paramTwo = "abc";
console.log(findAnagrams(paramOne, paramTwo)); 

// =======================================================================

// Q7.

function decodeString(s) {
    const stack = [];
    let currentString = "";
    let currentNumber = 0;

    for (const char of s) {
        if (!isNaN(Number(char))) {
            currentNumber = currentNumber * 10 + Number(char);
        } else if (char === "[") {
            stack.push(currentNumber);
            stack.push(currentString);
            currentNumber = 0;
            currentString = "";
        } else if (char === "]") {
            const prevString = stack.pop();
            const repeatCount = stack.pop();
            currentString = prevString + currentString.repeat(repeatCount);
        } else {
            currentString += char;
        }
    }

    return currentString;
}

// Testing
const a = "3[a]2[bc]";
console.log(decodeString(a)); 

// ==================================================================================

// Q8.

function canSwapStrings(s, goal) {
    if (s === goal) {
        return true; 
    }

    const diffIndices = [];
    const n = s.length;

    for (let i = 0; i < n; i++) {
        if (s[i] !== goal[i]) {
            diffIndices.push(i);
        }
    }

    if (diffIndices.length === 2) {
        const [i, j] = diffIndices;
        if (s[i] === goal[j] && s[j] === goal[i]) {
            return true; 
        }
    }

    return false; 
}

// Testing
const b = "ab";
const goal = "ba";
console.log(canSwapStrings(b, goal)); 
