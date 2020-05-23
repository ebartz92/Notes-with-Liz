Accumulator Pattern

// definition
function nameOfFunction(/*list of parameters*/) {
  /*statements that define the function*/
}

//calling the function (test)
var result = nameOfFunction(/*list of arguments*/);
console.log(result);


function filterEvenElements(numbers) {
  // if input in empty, what do we return? (edge case)
  if (numbers.length === 0) {
    return [];
  }
  // output is new array of even numbers
}


function filterEvenElements(numbers) {
  if (numbers.length === 0) {
    return [];
  }

  var evenNumbers = [];

  for (var i = 0; i < numbers.length; i++) {
    // check if current number is even
    if (numbers[i] % 2 === 0) {
      // add to evenNumbers array
      evenNumbers.push(numbers[i]);
    }
  }

  return evenNumbers;
}

function filterOddElements(numbers) {
  if (numbers.length === 0) {
    return [];
  }

  var oddNumbers = [];

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      oddNumbers.push(numbers[i]);
    }
  }
  return oddNumbers;
}

 // create a sum var set to 0
  //iterate over numbers using for loop
  //reassign sum to be sum plus current value
function computeSumOfAllElements(numbers) {
  if (computeSumOfAllElements.length === 0) {
    return 0;
  }
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function computeAverageOfNumbers(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  //create sum variable
  var sum = 0;
  //iterate over all numbers using for loop
  for (var i = 0; i < numbers.length; i++) {
    //increment sum by current value
    sum += numbers[i];
  }
  //return sum divided by input array length
  return sum / numbers.length;
}


// Code here is considered "global", not usually recommended
var Global_Variable = 'I am a global variable';

function THIS_IS_THE_FUNCTION_WE_ASKED_YOU_TO_WRTIE(input_of_some_kind) {

  // variables created inside of a function are called local
  var localVariable = "I am a local variable";

  // I CAN ALSO MAKE USE OF THE PARAMETER(S) OF THE FUNCTION IF ANY
  // I can also make use of the parameter(s) of the function, if any
  input_of_some_kind; // <= THIS IS THE PARAMETER OF THIS FUNCTION
  for (var i = 1; i < 6; i++) {
    // variables created here are created anew each iteration
    var newlyCreatedEachIteration = 0;
  }
  // this statement ends the function
  return localVariable;
  // code below this statement will not run
}

OBJECT COUNT

// an array of items to count
var arrayOfItemsToCount = ['a', 'b', 'a', 'b', 'c', 'b'];
// an object to store the counts
var objectOfCounts = {};

// we loop over the array of items to count
for (var i = 0; i < arrayOfItemsToCount.length; i++) {
  var currentItem = arrayOfItemsToCount[i];
  // if we have not counted current item
  if (objectOfCounts[currentItem] === undefined) {
    // add it to count object with a value of 1
    objectOfCounts[currentItem] = 1;
    // otherwise (we have counted it at least once)
  } else {
    // increment value in count object by 1
    objectOfCounts[currentItem]++;
  }
}
console.log(objectOfCounts);

indexof vs indexOf

--- //is num even?

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
  return num;
}

function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
  return num;
}

---// area of a triangle
function computeAreaOfATriangle(base, height) {
  return (base * height) / 2;
}
---// number is cubed
function cube(num) {
  return num ** 3;
}