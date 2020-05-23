//add obj2 to obj1 if not already in obj1
function extend(obj1, obj2) {
    for (var key2 in obj2) {
        if (obj1[key2] === undefined) {
            obj1[key2] = obj2[key2];
        }
    }
}
/// remove values of sting number array
function removeStringValues(obj) {
    // iterate over obj
    //check if values of certain type
    //remove current value
    for (var key in obj) {
        if (typeof obj[key] === "string") {
            delete obj[key];
        }
    }
}
function removeNumberValues(obj) {
    for (var key in obj) {
        if (typeof obj[key] === "number") {
            delete obj[key];
        }
    }
}
function removeArrayValues(obj) {
    for (var key in obj) {
        if (Array.isArray(obj[key]) === true) {
            delete obj[key];
        }
    }
}

function removeNumbersLargerThan(num, obj) {
    // iterate over obj
    // if current value is a number and is > input num
    //delete current property
    for (var key in obj) {
        var value = obj[key];
        if (typeof value === "number" && value > num) {
            delete obj[key];
        }
    }
}
function removeStringValuesLongerThan(num, obj) {
    for (var key in obj) {
        if (typeof obj[key] === 'string' && obj[key].length > num) {
            delete obj[key];
        }
    }
}

function removeEvenValues(obj) {
    // iterate over obj
    //check if number and even
    //remove current prop
    for (var key in obj) {
        if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
            delete obj[key];
        }
    }
}

function countNumberOfKeys(obj) {
    //iterate over obj
    //count var
    //increment count
    //return count
    var count = 0;
    for (var key in obj) {
        count += 1;
    }
    return count;
}

function convertDoubleSpaceToSingle(str) {
    var split = str.split("  ");
    var join = split.join(" ");
    return join;
}
//add element to front of new array instance not the original array
function addToFrontOfNew(arr, element) {
    var copy = arr.slice();
    copy.unshift(element);
    return copy;
}
///////ORRRRR the same works here because [element].concat creates new array
function addToFrontOfNew(arr, element) {
    return [element].concat(arr);
}

//Write a function called "getAllElementsButNth".
//Given an array and an index, "getAllElementsButNth" 
//returns an array with all the elements but the nth.
////could copy array and slice removing nth element OR
function getAllElementsButNth(array, n) {
    return array.slice(0, n).concat(array.slice(n + 1));
}


//// return -1 if not found - return index otherwise
function getIndexOf(char, str) {
    //iterate over the string
    //if char is equal to input char
    //return index
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}
//returns length of shortest word
//set shortest length to first word and replace it if the next word is longer
function findMinLengthOfThreeWords(word1, word2, word3) {
    var array = [word1, word2, word3];

    var minLength = word1.length;
    for (var i = 1; i < array.length; i++) {
        if (array[i].length < minLength) {
            minLength = array[i].length;
        }
    }
    return minLength;
}

function getLongestOfThreeWords(word1, word2, word3) {
    var words = [word1, word2, word3];

    var longest = words[0];

    for (var i = 1; i < words.length; i++) {

        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

function select(arr, obj) {
    var result = {};
    for (var i = 0; i < arr.length; i++) {
        if (obj[arr[i]] !== undefined) {
            result[arr[i]] = obj[arr[i]];
        }
    }
    return result;
}

//odd length words
function filterOddLengthWords(words) {
    var oddLengthWords = [];

    for (var i = 0; i < words.length; i++) {
        if (words[i].length % 2 === 1) {
            oddLengthWords.push(words[i]);
        }
    }
    return oddLengthWords;
}
///length of longest element
function getLengthOfLongestElement(arr) {
    if (arr.length === 0) {
        return 0;
    }
    var longestString = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i].length > longestString.length) {
            longestString = arr[i];
        }
    }
    return longestString.length;
}
///returns sqaure of numbers in array
function squareElements(arr) {
    var squared = [];

    for (var i = 0; i < arr.length; i++) {
        squared.push(arr[i] ** 2);
    }

    return squared;
}
function filterOddElements(arr) {
    var oddNumbers = [];

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] % 2 !== 0) {
            oddNumbers.push(arr[i]);
        }
    }
    return oddNumbers;
}

function computeProductOfAllElements(arr) {
    if (arr.length === 0) {
        return 0;
    }
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        product *= arr[i];
    }

    return product;
}
// function even numbers
function isEven(num) {
    return num % 2 === 0;
}

function filterEvenElements(arr) {
    return arr.filter(isEven);
}

var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]

////////shortest
function getLengthOfShortestElement(arr) {
    var shortestLength = Number.MAX_SAFE_INTEGER;
    for (var el of arr) {
        if (el.length < shortestLength) {
            shortestLength = el.length;
        }
    }
    return shortestLength === Number.MAX_SAFE_INTEGER ? 0 : shortestLength;
}

function getLongestElement(arr) {
    if (arr.length === 0) {
        return '';
    }
    var longest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}

function findSmallestElement(arr) {
    if (arr.length === 0) {
        return 0;
    }
    var smallest = arr[0]
    for (var el of arr) {
        if (el < smallest) {
            smallest = el;
        }
    }
    return smallest;
}

function findShortestElement(arr) {
    if (arr.length === 0) {
        return "";
    }
    var shorty = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length < shorty.length) {
            shorty = arr[i];
        }
    }
    return shorty;
}

function getElementsThatEqual10AtProperty(obj, key) {
    var tens = [];
    if (Object.keys(obj).length === 0) {
        return tens;
    }

    if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
        for (const num of obj[key]) {
            if (num === 10) {
                tens.push(10);
            }
        }
    }
    return tens;
}

function removeElement(array, discarder) {
    return array.filter(num => num !== discarder);
}

function getFirstElementOfProperty(obj, key) {
    if (Object.keys(obj).length === 0) {
        return undefined;
    }
    if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
        return obj[key][0];
    }
    return undefined;
}

function getLastElementOfProperty(obj, key) {
    if (Object.keys(obj).length === 0) {
        return undefined;
    }
    if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
        return obj[key][obj[key].length - 1];
    }
    return undefined;
}
function getLastElementOfProperty(obj, key) {
    if (Object.keys(obj).length === 0) {
        return undefined;
    }
    if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
        var lastIndexVal = obj[key].length - 1;
        return obj[key][lastIndexVal];
    }
    return undefined;
}

function getNthElementOfProperty(obj, key, n) {
    if (Object.keys(obj).length === 0) {
        return undefined;
    }
    if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
        return obj[key][n];
    }
    return undefined;
}

function getAverageOfElementsAtProperty(obj, key) {
    if (obj[key] === undefined) {
        return 0;
    }
    if (Array.isArray(obj[key]) === false) {
        return 0;
    }
    if (obj[key].length === 0) {
        return 0;
    }

    var sum = 0;


    for (var i = 0; i < obj[key].length; i++) {

        sum += obj[key][i];
    }

    return sum / obj[key].length;
}

function getEvenLengthWordsAtProperty(obj, key) {
    if (obj[key] === undefined) {
        return [];
    }
    if (Array.isArray(obj[key]) === false) {
        return [];
    }
    if (obj[key].length === 0) {
        return [];
    }
    var result = [];

    for (var i = 0; i < obj[key].length; i++) {
        if (obj[key][i].length % 2 === 0) {
            result.push(obj[key][i]);
        }
    }
    return result;
}

function getSquaredElementsAtProperty(obj, key) {
    if (obj[key] === undefined) {
        return [];
    }
    if (Array.isArray(obj[key]) === false) {
        return [];
    }
    var result = [];

    var array = obj[key];
    for (var i = 0; i < array.length; i++) {
        var currentNumber = array[i];
        var squaredNumber = currentNumber ** 2;
        result.push(squaredNumber);
    }

    return result;
}

function getOddElementsAtProperty(obj, key) {
    if (obj[key] === undefined) {
        return [];
    }
    if (Array.isArray(obj[key]) === false) {
        return [];
    }
    var result = [];

    for (var i = 0; i < obj[key].length; i++) {
        if (obj[key][i] % 2 !== 0) {
            result.push(obj[key][i]);
        }
    }
    return result;
}

function getEvenElementsAtProperty(obj, key) {
    if (obj[key] === undefined) {
        return [];
    }
    if (Array.isArray(obj[key]) === false) {
        return [];
    }
    var result = [];

    for (var i = 0; i < obj[key].length; i++) {
        if (obj[key][i] % 2 === 0) {
            result.push(obj[key][i]);
        }
    }
    return result;
}

function getSmallestElementAtProperty(obj, key) {
    if (obj[key] === undefined) {
        return undefined;
    }
    if (Array.isArray(obj[key]) === false) {
        return undefined;
    }
    var smallestElement = obj[key][0];

    for (var i = 0; i < obj[key].length; i++) {
        if (obj[key][i] < smallestElement) {
            smallestElement = obj[key][i];
        }
    }
    return smallestElement;
}
function getLargestElementAtProperty(obj, key) {
    if (obj[key] === undefined) {
        return undefined;
    }
    if (Array.isArray(obj[key]) === false) {
        return undefined;
    }
    var largestElement = obj[key][0];

    for (var i = 0; i < obj[key].length; i++) {
        if (obj[key][i] > largestElement) {
            largestElement = obj[key][i];
        }
    }
    return largestElement;
}

function getAllButLastElementOfProperty(obj, key) {
    if (obj[key] === undefined) {
        return [];
    }
    if (Array.isArray(obj[key]) === false) {
        return [];
    }
    if (obj[key].length === 0) {
        return [];
    }
    obj[key].pop();
    return obj[key];
}

function getElementOfArrayProperty(obj, key, index) {
    if (obj[key] === undefined) {
        return undefined;
    }
    if (Array.isArray(obj[key]) === false) {
        return undefined;
    }
    if (obj[key].length === 0) {
        return undefined;
    }
    return obj[key][index];
}

function calculateBillTotal(preTaxAndTipAmount) {
    // calculate amount of tax
    //calculate amount of tip
    //add tax and tip to total and return
    var salesTax = preTaxAndTipAmount * .095;
    var serverTip = preTaxAndTipAmount * .15;
    return preTaxAndTipAmount + salesTax + serverTip;
}

function getStringLength(string) {
    var counter = 0;
    while (string !== "") {
        string = string.slice(1);
        counter++
    }
    return counter;
}

function getProductOfAllElementsAtProperty(obj, key) {
    if (obj[key] === undefined) {
        return 0;
    } if (Array.isArray(obj[key]) === false) {
        return 0;
    }
    if (obj[key].length === 0) {
        return 0;
    }
    var product = 1;

    for (var i = 0; i < obj[key].length; i++) {
        product *= obj[key][i];
    }
    return product;
}


function sumDigits(num) {
    // check if num is negative
    // make input number into string toString method
    // create total variable
    // iterate over sting
    //convert current string character and add to total
    //return total
    // ignore cases with negative 

    var inputIsNegative = false;

    if (num < 0) {
        num = Math.abs(num);
        inputIsNegative = true;
    }

    var total = 0;

    var numString = num.toString();

    var firstValue = Number(numString[0]);

    for (var i = 0; i < numString.length; i++) {
        total += Number(numString[i]);
    }

    if (inputIsNegative) {
        total = total - (2 * firstValue);
        return total;
    } else {
        return total;
    }
}

function getSumOfAllElementsAtProperty(obj, key) {
    if (obj[key] === undefined) {
        return 0;
    }
    if (Array.isArray(obj[key]) === false) {
        return 0;
    }
    var sum = 0;
    for (var i = 0; i < obj[key].length; i++) {
        sum += obj[key][i];
    }
    return sum;
}

function findShortestWordAmongMixedElements(arr) {
    if (arr.length === 0) {
        return "";
    }

    var strings = [];

    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
            strings.push(arr[i]);
        }
    }

    if (strings.length === 0) {
        return "";
    }
    var shortest = strings[0];

    for (var i = 1; i < strings.length; i++) {
        if (strings[i].length < shortest.length) {
            shortest = strings[i];
        }
    }
    return shortest;
}

function findSmallestNumberAmongMixedElements(arr) {
    if (arr.length === 0) {
        return 0;
    }
    var nums = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            nums.push(arr[i]);
        }
    }
    if (nums.length === 0) {
        return 0;
    }
    var smallest = nums[0];

    for (var i = 1; i < nums.length; i++) {
        if (nums[i] < smallest) {
            smallest = nums[i];
        }
    }
    return smallest;
}

function computeSummationToN(n) {
    // create a sum variable
    // iterate 0 - n
    // add current index to sum

    var sum = 0;
    for (var value = 0; value <= n; value++) {
        sum += value;
    }
    return sum;
}

function convertScoreToGrade(score) {
    if (score > 100 || score < 0) {
        return "INVALID SCORE";
    }
    if (score <= 59) {
        return 'F';
    } else if (score <= 69) {
        return 'D';
    } else if (score <= 79) {
        return 'C';
    } else if (score <= 89) {
        return 'B';
    } else if (score <= 100) {
        return 'A';
    }
    return score;
}

function convertScoreToGradeWithPlusAndMinus(score) {
    if (score > 100 || score < 0) {
        return "INVALID SCORE";
    }
    if (score <= 59) {
        return 'F';
    } else if (score <= 69) {
        if (score <= 62) {
            return "D-";
        } else if (score >= 68) {
            return "D+";
        } else {
            return "D";
        }
    } else if (score <= 79) {
        if (score <= 72) {
            return "C-";
        } else if (score >= 78) {
            return "C+";
        } else {
            return "C";
        }
    } else if (score <= 89) {
        if (score <= 82) {
            return "B-";
        } else if (score >= 88) {
            return "B+"
        } else {
            return 'B';
        }
    } else if (score <= 100) {
        if (score <= 92) {
            return "A-";
        } else if (score >= 98) {
            return "A+"
        } else {
            return 'A';
        }
    }
    return score;
}

function computeFactorialOfN(n) {
    // n * n-1 * n-2 * n-3
    var factorial = 1;

    for (var i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

function repeatString(string, num) {
    // start with empty string and then add things to it
    var result = "";

    for (var i = 0; i < num; i++) {
        result += string;

    }
    return result;
}

function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
    // I = P(1 + (r/n))^ (nt) - P

    var compoundedInterest = (principal * Math.pow((1 + (interestRate / compoundingFrequency)), (compoundingFrequency * timeInYears))) - principal;
    return compoundedInterest;

}

// multiply without operator
function multiply(num1, num2) {
    var resultPositive = true;
    if ((num1 > 0 && num2 < 0) || (num2 > 0 && num1 < 0)) {
        resultPositive = false;
    }

    num1 = Math.abs(num1);
    num2 = Math.abs(num2);

    // create result variable
    // iterate num2 times
    // add num1 to result
    var result = 0;
    for (var i = 0; i < num2; i++) {
        result += num1;
    }
    if (resultPositive) {
        return result;
    } else {
        return -result;
    }
}