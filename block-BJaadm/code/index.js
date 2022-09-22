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

// Create an array peopleName and store value of sex key from persons array

let peopleName = [];
 persons.filter((gender) => {
  peopleName.push(gender.sex);
})
console.log(peopleName);

// Create an array peopleGrade and store the value of grade key from persons array

let peopleGrade = [];
 persons.filter((merit) => {
  peopleGrade.push(merit.grade);
})
console.log(peopleGrade);

// Create an array peopleSex and store the value of sex key from persons array

let peopleSex = persons.map((person) => person.sex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
function filteredNameJ_PArr(value) {

  let filteredNameJ_P = [];
  value.filter((people) => {
    if(people.name.startsWith("J") ||
  people.name.startsWith("P")) {
    filteredNameJ_P.push(people.name) ;
  }
  })
return filteredNameJ_P;
}

  console.log(filteredNameJ_PArr(persons),"l ");

  

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

persons.filter((people) => {
  if(people.name.startsWith("A") ||
people.name.startsWith("C")) {
  console.log(people.name);
}
})

// Log all the filtered male ('M') in persons array

persons.filter((people) => {
  if(people.sex.includes("M")) {
  console.log(people.name);
}
})

// Log all the filtered female ('F') in persons array

persons.filter((people) => {
  if(people.sex.includes("F")) {
  console.log(people.name);
}
})

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

let peopleC_J = persons.filter((people) => {
  if(people.name.startsWith("J") ||
people.name.startsWith("C")) {
  return people.name;
}
})
peopleC_J.filter((gender) => {
  if(gender.sex.includes("F")) {
    console.log(gender.name);
  }
})

// Log all the even numbers from peopleGrade array

 persons.filter((level) => {
  if(level.grade % 2 === 0) {
    console.log(level.grade); 
  }
})

// Find the first name that starts with 'J' in persons array and log the object

let j = persons.find((people) => {
return people.name.startsWith("J")
})
  console.log(j.name);

// Find the first name that starts with 'P' in persons array and log the object

let p = persons.find((people) => {
  return people.name.startsWith("P")
  })  
    console.log(p.name);

// Find the first name that starts with 'J', grade is greater than 10 and is a female

let condition = persons.find((jPerson) => {
  if(jPerson.name.startsWith("J") &&
   jPerson.grade > 10 && 
   jPerson.sex.includes("F")) {
    return jPerson.name
  }
})
console.log(condition);

// Filter all the female from persons array and store in femalePersons array

let femalePersons = persons.filter((sexPerson) => {
  return sexPerson.sex === "F"
})
console.log(femalePersons);

// Filter all the male from persons array and store in malePersons array

let malePersons = persons.filter((sexPerson) => {
  return sexPerson.sex.includes("M")
})
console.log(malePersons);

// Find the sum of all grades and store in gradeTotal

let gradeTotal = peopleGrade.reduce((a, b) => {
 return a + b
})
console.log(gradeTotal);

// Find the average grade

let avgGrade = gradeTotal / peopleGrade.length
console.log(avgGrade);

// Find the average grade of male

let totalMaleGrade = malePersons.map((score) => {
  return score.grade
})
let sumOfGrade = totalMaleGrade.reduce((a, b) => {
  return a + b
}, 0)
let avgMGrade = sumOfGrade / malePersons.length
console.log(avgMGrade);

// Find the average grade of female

let totalFemaleGrade = femalePersons.map((score) => {
  return score.grade
})
let sumOfFGrade = totalFemaleGrade.reduce((a, b) => {
  return a + b
}, 0)
let avgFGrade = sumOfFGrade / femalePersons.length
console.log(avgFGrade);

// Find the highest grade

console.log(peopleGrade.sort((a, b) => {
  return a - b
}).pop())

// Find the highest grade in male

console.log(totalMaleGrade.sort((a, b) => {
  return a - b
}).pop())

// Find the highest grade in female

console.log(totalFemaleGrade.sort((a, b) => {
  return a - b
}).pop())

// Find the highest grade for people whose name starts with 'J' or 'P'

let filteredNameJ_P = persons.filter((people) => {
  if(people.name.startsWith("J") ||
people.name.startsWith("P")) {
  return people.name ;
}
})
console.log([...filteredNameJ_P].sort((a, b) => {
  return a.grade - b.grade;
}).pop());

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

console.log(peopleGrade.sort((a, b) => {
  return a - b
}))

// Sort the peopleGrade in descending order

console.log(peopleGrade.sort((a, b) => {
  return  b - a;
}))

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

let mutatedArr = [...peopleGrade].sort((a, b) => {
  return  b - a;
})
console.log(mutatedArr);

// Sort the array peopelName in ascending `ABCD..Za....z`

let totalName = persons.map((key) => {
  return key.name
})
console.log(totalName.sort())

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array


console.log([...totalName].sort())