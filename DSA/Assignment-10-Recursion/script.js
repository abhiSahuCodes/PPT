// Q1.

function isPowerOfThree(n) {
    if (n === 1) {
        return true;
    }
    if (n <= 0 || n % 3 !== 0) {
        return false;
    }
    return isPowerOfThree(n / 3);
}

// Testing
console.log(isPowerOfThree(27));  
console.log(isPowerOfThree(0));   
console.log(isPowerOfThree(-1)); 

// ===========================================================

// Q2.

function lastRemaining(n) {
    if (n === 1) {
        return 1; 
    }

    if (n % 2 === 0) {
        return 2 * lastRemaining(n / 2);
    } else {
        return 2 * lastRemaining((n - 1) / 2);
    }
}

// Testing
console.log(lastRemaining(9)); 
console.log(lastRemaining(1)); 

// ============================================================

// Q3.

function allSubsets(str) {
    const subsets = [];

    function findSubsets(currentSubset, index) {
        subsets.push(currentSubset); 

        for (let i = index; i < str.length; i++) {
            findSubsets(currentSubset + str[i], i + 1); 
        }
    }
    findSubsets("", 0); 
    return subsets;
}

// Testing
console.log(allSubsets("abc"));
console.log(allSubsets("abcd"));

// ====================================================================

// Q4.

function stringLength(str) {
    if (str === "") {
        return 0;
    }
    return 1 + stringLength(str.slice(1));
}

// Testing
console.log(stringLength("abcd"));         
console.log(stringLength("GEEKSFORGEEKS")); 

// =======================================================================

// Q5.

function countSameStartAndEndSubstrings(str) {
    let count = 0;

    function countSubstringsHelper(start, end) {
        if (start > end) {
            return;
        }

        if (str[start] === str[end]) {
            count++;
        }

        countSubstringsHelper(start, end - 1);
        countSubstringsHelper(start + 1, end);
    }

    countSubstringsHelper(0, str.length - 1);
    return count;
}

// Testing
console.log(countSameStartAndEndSubstrings("abcab")); 
console.log(countSameStartAndEndSubstrings("aba"));   

// =======================================================================

// Q6.

function moveDisk(N, fromRod, toRod, auxRod) {
    if (N === 1) {
        console.log(`move disk 1 from rod ${fromRod} to rod ${toRod}`);
        return 1;
    }

    const moves1 = moveDisk(N - 1, fromRod, auxRod, toRod);
    console.log(`move disk ${N} from rod ${fromRod} to rod ${toRod}`);
    const moves2 = moveDisk(N - 1, auxRod, toRod, fromRod);

    return moves1 + 1 + moves2;
}

// Testing
console.log(moveDisk(2, 1, 3, 2)); 
console.log(moveDisk(3, 1, 3, 2)); 

// ========================================================================

// Q7.

function allPermutations(str) {
    const permutations = new Set();

    function findPermutations(currentPerm, remainingChars) {
        if (remainingChars === "") {
            permutations.add(currentPerm); 
            return;
        }

        for (let i = 0; i < remainingChars.length; i++) {
            const nextPerm = currentPerm + remainingChars[i];
            const nextRemaining = remainingChars.slice(0, i) + remainingChars.slice(i + 1);
            findPermutations(nextPerm, nextRemaining);
        }
    }

    findPermutations("", str);
    return Array.from(permutations);
}

// Testing
console.log(allPermutations("cd"));   
console.log(allPermutations("abb"));  

// ==========================================================================

// Q8.

function countConsonants(str) {
    const consonantsRegex = /[b-df-hj-np-tv-z]/gi;
    const consonants = str.match(consonantsRegex);

    return consonants ? consonants.length : 0;
}

// Testing
console.log(countConsonants("abc de"));             
console.log(countConsonants("geeksforgeeks portal")); 

// ==========================================================================

