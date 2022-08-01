// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("person", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () =>{
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(person(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
})
})
     
// ReferenceError: person is not defined

// b) Create the function that makes the test pass.

// Pseudocode:
// Declare a function called person
// Pass an item as a parameter
// Use the name key to get the values we need to capatalize
// We will have to split (" ") to get each word seperate, .map to change the first letter of each word, and join (" ") to bring the two back together

// After trial and error with string interpolation, I combined it with the last line of join to get the desired output

const person = (item) => {
  return item.map(item => item.name
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ") + ` is ${item.occupation}.`
    )
  }
  
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total  

// console.log(person(people))

// This attempt resulted in an array with the names capitalized. 

// const person = (item) => {
//    return item.map(item => item.name
//     .split(" ")
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ") 
//   )
// }
  

// [ 'Ford Prefect', 'Zaphod Beeblebrox', 'Arthur Dent' ]

// This attempt capitalized the first letter of each word. This is because the string interpolation is done before the capitalization process.

// const person = (item) => {
//   return item.map(item => `${item.name} is ${item.occupation} .`
//   .split(" ")
//   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//   .join(" ")
  
//   )
// }
// Output -----> [
  //   'Ford Prefect Is A Hitchhiker .',
  //   'Zaphod Beeblebrox Is President Of The Galaxy .',
  //   'Arthur Dent Is A Radio Employee .'
  // ]
  

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("remainders", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () =>{
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  // Expected output: [ 2, 0, -1, 0 ]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  // Expected output: [ 2, 1, -1 ]
  expect(remainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
})
})
  
//  ReferenceError: remainders is not defined

// b) Create the function that makes the test pass.

// Pseudocode:
// Declare a function called remainders
// Set array as a parameter
// Use .filter to get the values that are numbers with typeof and set as    newArray
// Iterate over newArray with .map and use modulo with 3 to get the remainders we want

const remainders = (array) => {
  let newArray = array.filter(value => typeof value === "number")
  return newArray.map(value => value % 3)
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// console.log(remainders(hodgepodge1))
// console.log(remainders(hodgepodge2))


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("cubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () =>{
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    expect(cubed(cubeAndSum1)).toEqual(99)
    expect(cubed(cubeAndSum2)).toEqual(1125)
  })
})

// ReferenceError: cubed is not defined

// b) Create the function that makes the test pass.

// Pseudocode:
// Declare a function called cubed
// Set array as a parameter
// Use a variable of sum set to 0
// Iterate over the array using .map to get each value cubed, this will result in an array with same length
// Add each of the elements in the array to the total sum 

const cubed = (array) => {
  let sum = 0
  let newArray= array.map(value => 
  value*value*value) 
  return sum = newArray.reduce((a,b) => a+b, 0)
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total

// console.log(cubed(cubeAndSum2))