// Q1.

function isPowerOfTwo(n) {
    if (n === 1) {
        return true;
    }

    if (n < 1 || n % 2 !== 0) {
        return false;
    }

    return isPowerOfTwo(n / 2);
}

// Testing
console.log(isPowerOfTwo(1));   
console.log(isPowerOfTwo(16));  
console.log(isPowerOfTwo(3));   

// ========================================================================

// Q2.

function sumOfFirstNNaturalNumbers(n) {
    if (n === 1) {
        return 1;
    }
    return n + sumOfFirstNNaturalNumbers(n - 1);
}

// Testing
console.log(sumOfFirstNNaturalNumbers(3)); 
console.log(sumOfFirstNNaturalNumbers(5)); 
// ======================================================================================

// Q3.

function factorial(N) {
    if (N === 0 || N === 1) {
      return 1;
    } 
    return N * factorial(N - 1);
  }

// Testing
console.log(factorial(5)); 
console.log(factorial(4)); 

// ================================================================================

// Q4.

function power(N, P) {
    if (P === 0) {
      return 1;
    }
    return N * power(N, P - 1);
  }

// Testing
console.log(power(5, 2)); 
console.log(power(2, 5)); 

// ==========================================================================

// Q5.

function findMax(arr, currentIndex) {
    if (currentIndex === 0) {
      return arr[currentIndex];
    }
    const maxInRest = findMax(arr, currentIndex - 1);
    return Math.max(maxInRest, arr[currentIndex]);
  }
  
  function getMaxElement(arr) {
    if (arr.length === 0) {
      return null;
    }
  
    return findMax(arr, arr.length - 1);
  }

// Testing
console.log(getMaxElement([1, 4, 3, -5, -4, 8, 6]));
console.log(getMaxElement([1, 4, 45, 6, 10, -8]));

// =====================================================================

// Q6.

function nthTermOfAP(a, d, N) {
    if (N === 1) {
      return a;
    }
  
    const previousTerm = nthTermOfAP(a, d, N - 1);
  
    return previousTerm + d;
  }

// Testing
console.log(nthTermOfAP(2, 1, 5)); 
console.log(nthTermOfAP(5, 2, 10)); 

// =========================================================================================

// Q7.

function swap(str, i, j) {
    const charArray = str.split('');
    const temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return charArray.join('');
  }
  
  function generatePermutations(str, left, right, result) {
    if (left === right) {
      result.push(str);
      return;
    }
  
    for (let i = left; i <= right; i++) {
      str = swap(str, left, i);
      generatePermutations(str, left + 1, right, result);
      str = swap(str, left, i); // backtrack
    }
  }
  
  function permutationsOfString(S) {
    const result = [];
    generatePermutations(S, 0, S.length - 1, result);
    return result;
  }

// Testing
console.log(permutationsOfString("ABC"));
// Output: [ 'ABC', 'ACB', 'BAC', 'BCA', 'CBA', 'CAB' ]

console.log(permutationsOfString("XY"));
// Output: [ 'XY', 'YX' ]

// =====================================================================

// Q8.

function productOfArrayElements(arr, currentIndex) {
    if (currentIndex === arr.length - 1) {
      return arr[currentIndex];
    }
    const productOfRest = productOfArrayElements(arr, currentIndex + 1);
    return arr[currentIndex] * productOfRest;
  }
  
  function getProductOfArray(arr) {
    if (arr.length === 0) {
      return 0;
    }
    return productOfArrayElements(arr, 0);
  }

// Tesing
console.log(getProductOfArray([1, 2, 3, 4, 5]));
console.log(getProductOfArray([1, 6, 3]));
