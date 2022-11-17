console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello ' + name;
}
// Remember to call the function to test
console.log('Test-should say "Hello Jude!"', helloName('Jude'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let answer = firstNumber + secondNumber;
  return answer;
  // return firstNumber + secondNumber;
}
console.log('Test - add 10 and 33. Should be 43:', addNumbers(10, 33));


// 4. Function to multiply three numbers & return the result
function multiplyThree( num0, num1, num2 ){
  let answer = num0 * num1 * num2; 
  return answer;
}
console.log('Test - multiply 7 and 1 and 19. Should be 133:', multiplyThree(7, 1, 19));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } 
    return false;
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array === []) {
    console.log('undefined');
  } else {
    return array[array.length -1];
  }
}

//test getLast with empty array
let test1 = [];
console.log('getLast should be undefined:', getLast(test1));
//test getLast with full array
let test2 = ['a', 'b', 'c', 'd'];
console.log('getLast should be "d":', getLast(test2));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ) {
  let found = false;  //declare return value outside of for loop
  for (let i in array) {
    if (array[i] === value) {
      console.log('Found a match', array[i]);
      found = true; //reassign value inside for loop if value found
    } else {
      console.log('Not a match', array[i]);
    } //loop iterates through all values and determines if there is a match
  }
  return found; // end find
} 

//test find
console.log('find should be false:', find('e', test2));
console.log('find should be true:', find('b', test2));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string[0] === letter) {
    return true;
  } else {
    return false;
  }
}

//tests
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  for (let j in array) {
    sum += array[j];
  }
  return sum;
}

//test sumAll
let test3 = [1,2,3]
console.log('sumAll of [1, 2, 3] should be 6:', sumAll(test3));
test3 = [21, 32, 45];
console.log('sumAll of [21, 32, 45] should be 98:', sumAll(test3));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function filterPostive(array) {
  let positiveArray = [];
  for (let k in array) {
    if (array[k] > 0) {
    positiveArray.push(array[k]);  
    }
  }
  return positiveArray;
  }

  //test filterPositive
  let test4 = [1, 2, 3, 4, 5];
  console.log('Array should contain [1, 2, 3, 4, 5]:', filterPostive(test4));
  test4 = [-1, -3, -5, -7]
  console.log('Array should be empty [] :', filterPostive(test4));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//Which Generation Are You?
//Create a function that takes a number x and a character y ("m" for male, 
//"f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).
//If the number is negative, return the related ancestor.
//If positive, return the related descendant.
//You are generation 0. In the case of 0 (male or female), return "me!".
function whichGenRYou(x, y) {
  if (x === 0) {
    return 'me!';
  } else if (x === 1 && y === 'm') {
    return 'son';
  } else if (x === 1 && y === 'f') {
    return 'daughter';
  } else if (x === 2 && y === 'm') {
    return 'grandson';
  } else if (x === 2 && y === 'f') {
    return 'granddaughter';
  } else if ( x === 3 && y === 'f') {
    return 'great granddaughter';
  } else if (x === 3 && y === 'm') {
    return 'great granddaughter';
  } else if (x === -1 && y == 'm') {
    return 'grandfather';
  } else if (x=== -1 && y === 'f') {
    return 'grandmother';
  } else if (x === -2 && y === 'f') {
    return 'great grandmother';
  } else if (x === -2 && y === 'm') {
    return 'great grandfather';
  } else if (x === -3 && y === 'm') {
    return 'great great grandfather';
  } else if (x === -3 && y === 'f') {
    return 'great great grandmother';
  } else if (x < 0) {
    return 'ancestor';
  } else {
    return 'descendent';
  } //longest if else statement I've ever written
}

//test whichGenRYou
console.log(`My ${whichGenRYou(-1, 'f')} is one generation above ${whichGenRYou(0, 'f')}`);
console.log(`My ${whichGenRYou(-7, 'f')} is many generations above ${whichGenRYou(0, 'f')}`);
console.log(`As far as I'm aware, I have no ${whichGenRYou(10, 'm')}`);
console.log(`My ${whichGenRYou(-3, 'm')} was Amish!`);