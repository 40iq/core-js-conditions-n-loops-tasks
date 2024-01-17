/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (b > a && b > c) {
    return b;
  }
  if (c > b && c > a) {
    return c;
  }
  return a;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    return true;
  }
  return false;
}
// console.log(canQueenCaptureKing({ x: 6, y: 4 }, { x: 3, y: 7 }));

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romanNumbersArr = [
    { 10: 'X' },
    { 9: 'IX' },
    { 5: 'V' },
    { 4: 'IV' },
    { 1: 'I' },
  ];
  let number = num;
  let result = '';
  for (let i = 0; i < romanNumbersArr.length; i += 1) {
    let arabicNumber;
    switch (i) {
      case 0:
        arabicNumber = 10;
        break;
      case 1:
        arabicNumber = 9;
        break;
      case 2:
        arabicNumber = 5;
        break;
      case 3:
        arabicNumber = 4;
        break;
      default:
        arabicNumber = 1;
        break;
    }
    const romanNumber = romanNumbersArr[i][arabicNumber];
    while (number >= arabicNumber) {
      number -= arabicNumber;
      result += romanNumber;
    }
  }
  return result;
}
// convertToRomanNumerals(26);cringe

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    let word = '';
    switch (numberStr[i]) {
      case '0':
        word = 'zero';
        break;
      case '1':
        word = 'one';
        break;
      case '2':
        word = 'two';
        break;
      case '3':
        word = 'three';
        break;
      case '4':
        word = 'four';
        break;
      case '5':
        word = 'five';
        break;
      case '6':
        word = 'six';
        break;
      case '7':
        word = 'seven';
        break;
      case '8':
        word = 'eight';
        break;
      case '9':
        word = 'nine';
        break;
      case '-':
        word = 'minus';
        break;
      default:
        word = 'point';
        break;
    }
    result += word;
    if (i !== numberStr.length - 1) {
      result += ' ';
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let number = num;
  while (number !== 0) {
    if (number % 10 === digit) {
      return true;
    }
    number = Math.floor(number / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let leftSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    let rightSum = 0;
    leftSum += arr[i];
    for (let j = arr.length - 1; j > i + 1; j -= 1) {
      rightSum += arr[j];
      if (leftSum === rightSum && j - i === 2) {
        return i + 1;
      }
    }
  }
  return -1;
}
// console.log(getBalanceIndex([1, 2, 5, 3, 0]));

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  let row = 0;
  let col = 0;
  const result = [];
  let currentValue = 1;
  for (let i = 0; i < size; i += 1) {
    result[i] = [];
    for (let j = 0; j < size; j += 1) {
      result[i][j] = 0;
    }
  }
  let direction = 'right';
  let isEnd = false;
  while (currentValue < size * size) {
    if (direction === 'right') {
      while (!isEnd) {
        result[row][col] = currentValue;
        col += 1;
        currentValue += 1;
        if (col > size - 1 || result[row][col] !== 0) {
          col -= 1;
          currentValue -= 1;
          isEnd = true;
        }
      }
      isEnd = false;
      direction = 'down';
    }

    if (direction === 'down') {
      while (!isEnd) {
        result[row][col] = currentValue;
        row += 1;
        currentValue += 1;
        if (row > size - 1 || result[row][col] !== 0) {
          row -= 1;
          currentValue -= 1;
          isEnd = true;
        }
      }
      isEnd = false;
      direction = 'left';
    }

    if (direction === 'left') {
      while (!isEnd) {
        result[row][col] = currentValue;
        col -= 1;
        currentValue += 1;
        if (col < 0 || result[row][col] !== 0) {
          col += 1;
          currentValue -= 1;
          isEnd = true;
        }
      }
      isEnd = false;
      direction = 'up';
    }

    if (direction === 'up') {
      while (!isEnd) {
        result[row][col] = currentValue;
        row -= 1;
        currentValue += 1;
        if (row < 0 || result[row][col] !== 0) {
          row += 1;
          currentValue -= 1;
          isEnd = true;
        }
      }
      isEnd = false;
      direction = 'right';
    }
  }
  return result;
}
// console.log(getSpiralMatrix(5));

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = matrix;
  const copyMatrix = [];
  for (let i = 0; i < rows; i += 1) {
    copyMatrix[i] = [];
    for (let j = cols - 1; j >= 0; j -= 1) {
      copyMatrix[i][cols - j - 1] = matrix[j][i];
    }
  }
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      result[i][j] = copyMatrix[i][j];
    }
  }
  return result;
}
// const a = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25],
// ];
// console.log(rotateMatrix(a));

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const arrCopy = arr;

  function quickSort(array, leftItem, rightItem) {
    if (leftItem >= rightItem) {
      return;
    }

    const pivotIndex = Math.floor((leftItem + rightItem) / 2);
    const pivotItem = array[pivotIndex];
    let leftIndex = leftItem;
    let rightIndex = rightItem;

    while (leftIndex <= rightIndex) {
      while (array[leftIndex] < pivotItem) {
        leftIndex += 1;
      }

      while (array[rightIndex] > pivotItem) {
        rightIndex -= 1;
      }

      if (leftIndex <= rightIndex) {
        const temp = array[leftIndex];
        arrCopy[leftIndex] = array[rightIndex];
        arrCopy[rightIndex] = temp;

        leftIndex += 1;
        rightIndex -= 1;
      }
    }

    if (leftItem < rightIndex) {
      quickSort(array, leftItem, rightIndex);
    }

    if (rightItem > leftIndex) {
      quickSort(array, leftIndex, rightItem);
    }
  }

  quickSort(arrCopy, 0, arrCopy.length - 1);
  return arrCopy;
}

// console.log(sortByAsc([10, 9, 8, 7, 6, 5, 4, 3, 10, 1]));

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const resultArray = [str];
  let result = str;
  for (let k = 1; k <= iterations; k += 1) {
    let modifiedResult = '';
    for (let i = 0; i < str.length; i += 2) {
      modifiedResult += result[i];
    }
    for (let i = 1; i < str.length; i += 2) {
      modifiedResult += result[i];
    }
    result = modifiedResult;
    if (resultArray.length > 1 && str === result) {
      return resultArray[iterations % k];
    }
    resultArray[k] = result;
  }

  return result;
}
// console.log(shuffleChar('0123456789', 1), 1);
// console.log(shuffleChar('0123456789', 2), 2);
// console.log(shuffleChar('0123456789', 3), 3);
// console.log(shuffleChar('0123456789', 4), 4);
// console.log(shuffleChar('0123456789', 5), 5);
// console.log(shuffleChar('0123456789', 6), 6);
// console.log(shuffleChar('0123456789', 7), 7);
// console.log(shuffleChar('0123456789', 8), 8);
// console.log(shuffleChar('0123456789', 9), 9);
// console.log(shuffleChar('0123456789', 10), 10);

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(/* number */) {
  throw new Error('Not implemented');
  /*  const str = `${number}`;
  const numberArray = [];
  for (let i = 0; i < str.length; i += 1) {
    numberArray.push(Number(str[i]));
  }

  const digitsToReplace = [];

  for (let i = numberArray.length - 1; i >= 0; i -= 1) {
    console.log(
      'iteration:',
      i,
      ' currentItem:',
      numberArray[i],
      ' prevItem:',
      numberArray[i - 1]
    );

    if (
      (numberArray[i] > numberArray[i - 1] &&
        numberArray[i - 1] >= numberArray[i - 2]) ||
      i - 1 === 1
    ) {
      const leftPart = numberArray.slice(0, i - 1);
      if (i - 1 === 1) {
        digitsToReplace.push(numberArray[i - 2]);
      }
      digitsToReplace.push(numberArray[i]);
      digitsToReplace.push(numberArray[i - 1]);
      return `${leftPart} and ${digitsToReplace.reverse()}`;
    }

    if (numberArray[i] <= numberArray[i - 1] || i - 1 < 0) {
      digitsToReplace.push(numberArray[i]);
    }

    // if (numberArray[i] > numberArray[i - 1] && digitsToReplace.length === 0) {
    //   const temp = numberArray[i];
    //   numberArray[i] = numberArray[i - 1];
    //   numberArray[i - 1] = temp;
    //   return Number(numberArray.join(''));
    // }
  }
  console.log('noBigger!');
  return Number(digitsToReplace.reverse().join(''));
*/
}
// console.log(getNearestBigger(10001000));
module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
