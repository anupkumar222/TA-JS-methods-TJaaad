let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function findLongestWord() {
  let longestWord = "";
for(i = 0; i < words.length; i++) {
  if(longestWord.length < words[i].length) {
    longestWord = words[i];
  }
}
return longestWord;
}
console.log(findLongestWord());

// - Convert the above array "words" into an array of length of word instead of word.

console.log(words.map((word) => word.length))

// - Create a new array that only contains word with atleast one vowel.

let newArray = words.filter((vWord) => {
  vWord = vWord.toLowerCase()
  if(vWord.includes("a") ||
  vWord.includes("e") ||
  vWord.includes("i") ||
  vWord.includes("o") ||
  vWord.includes("u") ) {
    return true;
  } else {
    return false;
  }
})
console.log(newArray);

// - Find the index of the word "rhythm"

words.indexOf("rhythm");

// - Create a new array that contians words not starting with vowel.

let vowel = ['a', 'e', 'i', 'o', 'u']; 
let vowelsArr = words.filter((word) => { 
  return vowel.includes(word.charAt())
});

console.log(vowelsArr);

// - Create a new array that contianse words not ending with vowel

let vowelsEnd = words.filter((word) => { 
  return vowel.includes(word.charAt(word.length-1))
});

console.log(vowelsEnd);

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray() {
  let sum = numbers.reduce((a, b) => {
    return a + b
  }, 0);
  return sum;
}

 console.log(sumArray());

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

function multipleOfThree() {
  let threeMultiple = numbers.filter((a) => {
    return a % 3 === 0
  });
return threeMultiple;
}

 console.log(multipleOfThree());

// - Create a new array that contains only even numbers

function evenNumber() {
  let even = numbers.filter((a) => {
    return a % 2 === 0
  });
return even;
}

 console.log(evenNumber());

// - Create  a new array that contains only odd numbers.

function oddNumber() {
  let odd = numbers.filter((a) => {
    return a % 3 === 0
  });
return odd;
}

 console.log(oddNumber());

// - Create a new array that should have true for even number and false for odd numbers.

// - Sort the above number in assending order.

let accendeing = numbers.sort(function (a, b) {
  return a - b
})
console.log(accendeing);

// - Does sort mutate the original array?
// yes
// - Find the sum of the numbers in the array.
function sum(arr) {
  let add = 0;
  for(i = 0; i < arr.length; i++) { 
    add += arr[i];
  }
  return add;
}
console.log(sum(numbers));

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function averageNumbers(arr2) {

  return sum(arr2) / arr2.length; 
}
console.log(averageNumbers(numbers));



let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words and calculate the average length of the words.

function averageWordLength() {
let newstrings = strings.join();
return newstrings.length / strings.length;
}
console.log(averageWordLength());