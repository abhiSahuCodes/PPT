// Q1.

function areIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sMap = {};
  const tMap = {};

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (sMap[charS] && sMap[charS] !== charT) {
      return false;
    }

    if (tMap[charT] && tMap[charT] !== charS) {
      return false;
    }

    if (!sMap[charS]) {
      sMap[charS] = charT;
    }

    if (!tMap[charT]) {
      tMap[charT] = charS;
    }
  }

  return true;
}

// Testing
const s = "egg";
const t = "add";
const resultOne = areIsomorphic(s, t);
console.log(resultOne);

// ====================================================================

// Q2.

function isStrobogrammatic(num) {
  const strobogrammaticMap = {
    '0': '0',
    '1': '1',
    '6': '9',
    '8': '8',
    '9': '6',
  };

  let upsideDownNum = '';

  for (let i = num.length - 1; i >= 0; i--) {
    const currentDigit = num[i];

    if (!strobogrammaticMap.hasOwnProperty(currentDigit)) {
      return false; // Invalid digit, not strobogrammatic
    }

    upsideDownNum += strobogrammaticMap[currentDigit];
  }

  return num === upsideDownNum;
}

// Testing
const num = "69";
const resultTwo = isStrobogrammatic(num);
console.log(resultTwo);

// ===================================================================

// Q3.

function addStrings(num1, num2) {
  let p1 = num1.length - 1;
  let p2 = num2.length - 1;
  let carry = 0;
  let result = '';

  while (p1 >= 0 || p2 >= 0) {
    const digit1 = p1 >= 0 ? parseInt(num1[p1]) : 0;
    const digit2 = p2 >= 0 ? parseInt(num2[p2]) : 0;

    const sum = digit1 + digit2 + carry;
    carry = Math.floor(sum / 10);
    result += (sum % 10).toString();

    p1--;
    p2--;
  }

  if (carry > 0) {
    result += carry.toString();
  }

  return result.split('').reverse().join('');
}

// Testing
const num1 = "11";
const num2 = "123";
const resultThree = addStrings(num1, num2);
console.log(resultThree);

// ===========================================================

// Q4.

function reverseWordsInSentence(s) {
  const words = s.split(' ');
  let reversedSentence = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const reversedWord = word.split('').reverse().join('');
    reversedSentence += reversedWord + ' ';
  }

  return reversedSentence.trim();
}

// Testing
const exampleSentence = "Let's take LeetCode contest";
const resultFour = reverseWordsInSentence(exampleSentence);
console.log(resultFour);

// ==========================================================================

// Q5.

function reverseString(str, k) {
  let result = '';

  for (let i = 0; i < str.length; i += 2 * k) {
    const firstKChars = str.slice(i, i + k);
    const reversedChars = firstKChars.split('').reverse().join('');
    const remainingChars = str.slice(i + k, i + 2 * k);

    result += reversedChars + remainingChars;
  }

  return result;
}

// Testing
const wordFifthOne = "abcdefg";
const wordFifthTwo = 2;
const resultFive = reverseString(wordFifthOne, wordFifthTwo);
console.log(resultFive);

// ===========================================================================

// Q6.

function canTransformToGoal(wordSixthOne, wordSixthTwo) {
  const concatenatedS = wordSixthOne + wordSixthTwo;
  return concatenatedS.includes(wordSixthTwo);
}

// Testing
const wordSixthOne = "abcde";
const wordSixthTwo = "cdeab";
const resultSix = canTransformToGoal(wordSixthOne, wordSixthTwo);
console.log(resultSix);

// ===========================================================================

// Q7.

function processString(str) {
  const stack = [];
  for (const char of str) {
    if (char !== '#') {
      stack.push(char);
    } else {
      stack.pop();
    }
  }
  return stack.join('');
}

function areEqualAfterBackspace(s, t) {
  const processedS = processString(s);
  const processedT = processString(t);
  return processedS === processedT;
}

// Testing
const wordSeventhOne = "ab#c";
const wordSeventhTwo = "ad#c";
const resultSeven = areEqualAfterBackspace(wordSeventhOne, wordSeventhTwo);
console.log(resultSeven);

// =============================================================================

// Q8.

function checkStraightLine(coordinates) {
  if (coordinates.length < 3) {
    return true;
  }

  const [x1, y1] = coordinates[0];
  const [x2, y2] = coordinates[1];
  const initialSlope = (y2 - y1) / (x2 - x1);

  for (let i = 2; i < coordinates.length; i++) {
    const [x, y] = coordinates[i];
    const slope = (y - y1) / (x - x1);

    if (slope !== initialSlope) {
      return false;
    }
  }

  return true;
}

// Testing
const coordinates = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]];
const resultEight = checkStraightLine(coordinates);
console.log(resultEight);
