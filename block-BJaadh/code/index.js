// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers

console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers

console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"

console.log(strings.join(' '));

// - Add two new words in the strings array "called" and "sentance"

let newString = (strings.join(' ') + (" called sentance"));

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"

console.log(newString);

// - Remove the first word in the array (strings)

let firstString = [...strings];
firstString.shift();

// - Find all the words that contain 'is' use string method 'includes'

console.log(strings.includes("is"));

// - Find all the words that contain 'is' use string method 'indexOf'

console.log(strings.filter((string) => string.indexOf("is") !== -1));

// - Check if all the numbers in numbers array are divisible by three use array method (every)

console.log(numbers.every((number) => {return number % 3 === 0}));

// -  Sort Array from smallest to largest

let sortedValue = [...numbers].sort((num1, num2) => num1 - num2);
console.log(sortedValue);

// - Remove the last word in strings

console.log([...strings].pop());

// - Find largest number in numbers

console.log(sortedValue[sortedValue.length - 1]);

// - Find longest string in strings

console.log([...strings].sort((string1, string2) => string1.length - string2.length).pop());

// - Find all the even numbers

let evenNumber = numbers.filter((number) => number % 2 === 0);
console.log(evenNumber);

// - Find all the odd numbers

let oddNumber = numbers.filter((number) => number % 2 !== 0);
console.log(oddNumber);

// - Place a new word at the start of the array use (unshift)

let newWord = [...strings].unshift("New Word");
console.log(newWord)

// - Make a subset of numbers array [18,9,7,11]

console.log(numbers.slice(3, 7));

// - Make a subset of strings array ['a','collection']

console.log(strings.slice(2, 4));

// - Replace 12 & 18 with 1221 and 1881

console.log(numbers.map(num => {
  if(num === 12) {
    return 1221
  } else if(num === 18) {
    return 1881
  } else {
    return num; 
  }
}))

// - Replace words in strings array with the length of the word

let stringLengthArray = strings.map((element) => {
  return element.length;
})
console.log(stringLengthArray);

// - Find the sum of the length of words using above question

let stringSumArray = strings.map((element) => {
  return element.length ;
})

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

// - Create new array with only first name

// - Create new array with all the full names (ex: "Joe Blogs")

// - Sort the array created above alphabetically

// - Create a new array that contains only user who has at least one vowel in the firstname.
