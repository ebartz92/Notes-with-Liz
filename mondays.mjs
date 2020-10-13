// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

// Note that this is intentionally very similar to the previous problem.

// Please focus on getting a working solution with the tools you know well.

// Practice the interactive/collaborative interview style that's described in the documentation.

// Example:
// var input = 'a short example';
// var output = flipEveryNChars(input, 5);
// console.log(output); // --> ohs axe trelpma

// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'

// -> 'ohs axe trelpma'

function flipEveryNChars(message, n) {


    // business logic
    // when stack is at n 
    // empty into result 
    // message i to stack
    // repeat so likely a loop 
    // empty a stack again 
    // return result 


    let stack = [];
    let result = [];

    for (let i = 0; i < message.length; i++) {
        if (stack.length === n) {
            while (stack.length > 0) {
                result.push(stack.pop())
            }
        }
        stack.push(message[i]) // i = 1 ==> stack.push(message[1]) => [2]
    }
    while (stack.length > 0) {
        result.push(stack.pop());
    }

    return result.join("");
}

//  Test cases 
console.log(flipEveryNChars("", 5) === "");
console.log(flipEveryNChars("", 0) === "");
console.log(flipEveryNChars("123", 5) === "321");
console.log(flipEveryNChars("123", 1) === "123");
console.log(flipEveryNChars("123", 2) === "213");
console.log(flipEveryNChars("Avinoa", 5) === "onivAa");
console.log(flipEveryNChars(".     ", 5) === "    . ");
console.log(flipEveryNChars("It's hot today", 5) === " s'tIt tohyado");

// console.log(flipEveryNChars("", 5) );
// console.log(flipEveryNChars("", 0) );
// console.log(flipEveryNChars("123", 5) );
// console.log(flipEveryNChars("123", 1) );
// console.log(flipEveryNChars("123", 2) );
// console.log(flipEveryNChars("Avinoa", 5) );
// console.log(flipEveryNChars(".     ", 5) );
// console.log(flipEveryNChars("It's hot today", 5) );

// message [1,2,3] n = 1
// stack = [] res = []
// i = 0; i < 3 true
// stack.length = 0 !== n = 1 don't empty 
// stack.push(message[i]) ===>> stack.push(1)

// stack = [1] res =[]

// i = 1 i < 3 true
// stack.length === n ===> 1 === 1 true
// while stack.length > 0 ===>>> 
// res.push(stack.pop()) =>
// stack = [] res = [1] 
// stack.length === 0 > 0 false
// stack.push(message[i]) ==>>> stack.push(message[1]) === >>> stack ===  [2]

===========>>>>>>>>>>>
// Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

// The return value should be 1-indexed, not 0-indexed.

// Examples :
// detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
// detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd


// "2 3 2" => .split(" ") ==>> ["2","3","2"]

// split by space
// array of string of numbers into array number
// parseInt results into new array
// check typeof for number to add into array
// loop through to count even or odd
// save last position of last even/odd seen
// check counts for 1 to determine sole type
// return index plus one

// console.log("".split(" "));
// console.log("x".split(" "));
// console.log(" ".split(" "));
// console.log(" 1 ".split(" "));

// console.log(parseInt("23"))
// console.log(parseInt("1"))
// console.log(parseInt("-1"))
// console.log(parseInt('avi123'))

function detectOutlierValue(numString) {
  let newArr = numString.split(" ");
  let numArr = [];

  for (let i = 0; i < newArr.length; i++) {
    let num = parseInt(newArr[i]);
    if (!isNaN(num)) {
      numArr.push(num);
    }
  }
  let oddCount = 0;
  let evenCount = 0;
  let lastOddInd = 0;
  let lastEvenInd = 0;

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 0) {
      evenCount += 1;
      lastEvenInd = i; 
    } else {
      oddCount += 1;
      lastOddInd = i;
    }
  } 
  if (evenCount === 1 && oddCount !== 1) {
    return lastEvenInd + 1; 
  } else if (oddCount === 1 && evenCount !== 1) {
    return lastOddInd + 1;
  }
  return -1;
}

console.log(detectOutlierValue("") === -1);
console.log(detectOutlierValue("3") === 1);
console.log(detectOutlierValue("2") === 1);
console.log(detectOutlierValue("2 3") === -1);
console.log(detectOutlierValue("2 3 2") === 2);
console.log(detectOutlierValue("2 3 2 3") === -1);
console.log(detectOutlierValue("13205") === 1);
console.log(detectOutlierValue("13205 2") === -1);
console.log(detectOutlierValue("2 2 2 2") === -1);
console.log(detectOutlierValue("2 0 2") === -1);
console.log(detectOutlierValue("-3") === 1);
console.log(detectOutlierValue("-3a") === 1);


function transposeTwoStrings(stringInput) {
  if (stringInput.length !== 2) {
      console.log("Bad input")
  }

  if (stringInput[0].length !== stringInput[1].length) {
      console.log("Bad input")
  }
  let first = stringInput[0];
  let second = stringInput[1];
  for (let i = 0; i < first.length; i++) { // length is the same so take one of the two
    let pair = [first[i], second[i]];
    console.log(pair);
  }
}
console.log(["h", "w"]);