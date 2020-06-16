.pop() - removes the last element of an array and returns it [alters original]

.shift() - removes the first elements in an array and returns it [alters original]

.join() - creates and returns a new string joining all the elements in an array separated by commas “specified separator string" (if array has only one item it will not have a comma)

.unshift() - adds new elements to the beginning of an array and returns new length

concat() - joins 2 or more strings then returns a copy

split() - splits a string into an array of substring and returns the new array

indexOf() - returns the position of the first found occurrence of a specified value in a string

charAt() - returns the character at the specific index in a string

fromCharCode() - converts unicode values into characters (does not use strings)

charCodeAt() - returns the unicode of the character at a specific index in a string



forEach() - executes a provided function once for each array element, does not mutate the array on which it is called (callback may do so) there is no way to stop/break loop other than by throwing an exception

search() - searches for a match between a regular expression and the string and returns the position

toFixed(digits) - number object method is used to round numbers to the specified number of decimal places

toLowerCase() - String object method returns a new string containing the value of the original string but in all lower case

toUpperCase() - returns a new string containing the value of the original string but in all upper case

sort() - sorts the elements of an array (alphabetical default) [changes original]

sort() for numbers - sorting by numbers is different, using a sort function is necessary.
    function sortNumber(a,b) {
    return b-a;// for descending
    return a-b;// for ascending
}

toExponential(digits) - Number object method is used to return a number in exponential format with the specified number of decimal places

reverse() - reverse the order of elements in an array (first is last, last is first)

floor() - rounds a number to down to the nearest interger

parseInt() - gets a number from a string [not part of the math object]

slice() - selects a part of an array and returns an array [starts from 0, original not changed]

substring() - extracts characters from a string between two specified #'s and returns it as a new string. [start at 0] substring(startIndex, stopIndex); (up to but not including the specified stop index) //stopIndex is optional, if it is not specified, then it will go until the end of the string.

substr() - same as substring except uses length as opposed to a stop number

push() - adds new elements to an array [alters original]

test() - tests for a match in a string, returns true or false (true if found, false if not)

    toString() - converts an array to a string, returns the result. Calling .toString() which any object inherits from Object.prototype.toString(), returns [object Object].

JSON.stringify() - "Javascript Object Notation” - SON.stringify(value[, replacer[, space]])

valueOf() - returns the primitive value of a string

alert() - The Window.alert() method displays an alert dialog with the optional specified content and an OK button

prompt() - displays a dialog box that prompts the visitor for input value.

parseFloat() - gets a decimal number from a string

replace() - str.replace(A, B) - Here the parameter A is regular expression and B is a string which will replace the content of the given string. Replace a part of the given string with some another string or a regular expression. The original string will remain unchanged.

toPrecision(precision) - Number object method is used to return a numerical string with the specified number of significant digits

lastIndexOf() - returns the position of the last occurence of a specified value in a string

// Math Object Methods
Math.sqrt(number) - used to return the square root of a given number

Math.min() - Math object method is used to return the lowest value for a set of supplied numbers

Math.max() - returns the number with the highest value

Math.pow(number, power) - returns the value of x to the power of y

Math.ceil(number) - return a given number rounded to the next highest integer value

Math.round(number) - return a given number that has been rounded to the closes integer value

Math.abs(number) - return the absolute value of a given number

Math.floor(number) - return a given number rounded to the next lowest integer value

Function is a behavior
Arguments - when you are calling a method “call to function” *action
Parameters - when you are defining a function/method *elements

Object - instance of a class
Class is a template predefined rules and behaviors an object is an used template - instance variable

Operator - used to perform specific computation (= + - typeof)
Method- a function that is a property of an object (console.log, Array.isArray)

Variables- a named location in memory which stores a value, an argument overwrites value stored with a new value * a named location for storing value
Branching- (IF statement) Starts with if then followed by a condition Boolean variable or operation returning a boolean followed by a body. Condition is evaluated otherwise skipped
Looping- (WHILE statement) After the execution it reevaluates the condition again and repeats body if true. Dont want to be infinite so somewherein the body of code a variable has to change to stop.

    Constructor- required, builds off for new function


    Truthy- A truthy value is value that is considered true in boolean context.
    All boolean values are truthy unless defined as falsey.
    Falsey- False, 0, “”, null, undefined, NaN

Object[key] treats it like a variable.
    Object.key looks for a key named key. This is to be used only when you know the specific name of the key.

    The typeof operator output is the type of value in question. Ex. Number, string, boolean.


    Callback - function to execute on each elements, accepts between one and three arguments
currentValue - the current element being processed in the array
Index - the index currentValue in the array
array - the array forEach() was called upon
thisArg - value to use ’this’ when executing callback