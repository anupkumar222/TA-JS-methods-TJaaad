let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade

function avgGrade(array) {
  return array.reduce((acc, person) => {
    acc = acc + person.grade;
    return acc
  }, 0) / array.length
}
console.log(avgGrade(persons));

// Find the average grade of male

function avgGradeMale(array) {
let result = array.reduce((acc, ele) => {
if(ele.sex === "M") {
  acc.sum += ele.grade 
  acc.maleCount += 1
}
  return acc
},{sum: 0, maleCount: 0})
return result.sum / result.maleCount;
}
console.log(avgGradeMale(persons));


// Find the average grade of female

function avgGradeFemale(array) {
  let result = array.reduce((acc, ele) => {
  if(ele.sex === "F") {
    acc.sum += ele.grade 
    acc.femaleCount += 1
  }
    return acc
  },{sum: 0, femaleCount: 0})
  return result.sum / result.femaleCount;
  }
  console.log(avgGradeFemale(persons));

  
// Find the highest grade

function highestGrade(grade) {
  let result = grade.reduce((acc, ele) => {
    if(acc < ele.grade) {
      acc = ele.grade
    }
    return acc
  }, 0)
  return result;
}
console.log(highestGrade(persons))

// Find the highest grade in male

function highestGradeMale(maleGrade) {
 let result = maleGrade.reduce((acc, ele) => {
    if(ele.sex === "M" && acc < ele.grade) {
      acc = ele.grade;
    }
    return acc
  }, 0)
  return result;
}
console.log(highestGradeMale(persons));

// Find the highest grade in female

function highestGradeFemale(femaleGrade) {
  let result = femaleGrade.reduce((acc, ele) => {
     if(ele.sex === "F" && acc < ele.grade) {
       acc = ele.grade;
     }
     return acc
   }, 0)
   return result;
 }
 console.log(highestGradeFemale(persons));

// Find the highest grade for people whose name starts with 'J' or 'P'


function highestGradeJP(people) {
  let result = people.reduce((acc, ele) => {
    if(ele.name.charAt() === "J" || ele.name.charAt() === "P" && acc < ele.grade) {
      acc = ele.grade;
    }
    
    return acc;
  }, 0)
  return result;
}
console.log(highestGradeJP(persons));

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/
let fruitsObj = fruitBasket.reduce((acc, ele) => {
  if(acc[ele]) {
    acc[ele] = acc[ele] + 1;
  } else {
    acc[ele] = 1;
  }
  return acc;
}, {})

/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/

function fruit(array){
  let fruitObject = array.reduce((acc,v) => {
    if ( acc[v] ){
          acc[v] += 1
         
    } else {
          acc[v] = 1;
          
    }

    return acc
},{})
      return fruitObject
}
console.log(fruit(fruitBasket))


const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array
let result = data.reduce((acc, ele) => {
  return acc.concat(ele)
  
}, [])
console.log(result) ;
// console.log(data.flat(Infinity));
const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array
let result2 = data.reduce((acc, ele) => {
  return acc.concat(ele)
  
}, [])
console.log(result2) ;
/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/
// increment
function increment(value) {
  return value += 1
}
console.log(increment(5));
// double
function double(value) {
  return value *= 2
}
console.log(double(5));
// decrement
function decrement(value) {
  return value -= 1
}
console.log(decrement(5));
// triple
function triple(value) {
  return value *= 3
}
console.log(triple(5));
// half
function half(value) {
  let result = value /= 2
return Math.round(result)
}
console.log(half(9));

let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/
// function mathoperation(pipeline) {
//   let result = pipeline.reduce((acc, ele) => {
//     acc = acc(ele)
//     return acc;
//   }, 3)
//   return result;
// }
// console.log(mathoperation(pipeline));


  console.log(pipeline.reduce((acc,v)=>{
    acc = v(acc);
    return acc
  },3))
 


let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8
console.log(pipeline2.reduce((acc,v)=>{
  acc = v(acc);
  return acc
},8))