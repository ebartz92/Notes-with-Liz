function square(x) {
  var square = 0;
  for (var count = 1; count <= x; count++) {
    square += x;
  }
  return square;
}
// console.log(square(5)  === 25);

//assertEqual
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(
      'FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual
    );
  }
}

assertEqual(square(5), 25, 'should multiply number by itself');






// console.log(JSON.stringify([1,2,3]) === JSON.stringify([1,2,3]));
// console.log({name: "Mario"} === {name: "Mario"});
// console.log(JSON.stringify([1,2,3]));