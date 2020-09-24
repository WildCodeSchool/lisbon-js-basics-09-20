// Explain the length of arrays and why sometimes we need to use -1
//                 0        1         2 
const fruits = ["Apple", "Banana", "Peach"]

// The length of the array is 3
// console.log(fruits[fruits.length])

// The array starts counting from 0,
// if we want the last index in the array do the following
// console.log(fruits[fruits.length - 1])



// Higher Order Functions & Callbacks
function sayHello(name) {
    // Template Literals
    console.log(`Hello ${name}`)
}

function sayWelcome(name) {
    console.log(`Welcome ${name}`)
}

// createUsername becomes a higher order function
// as it receives a function as a parameter
function createUsername(callback) {
    const name = prompt('What is your name')
    callback(name)
}

// We pass the function as an argument
// createUsername(sayHello)


// For in loops combining dot notation and bracket
const person = {
    name: "James",
    age: 45,
    nationality: "French",
}
for (key in person) {
    // console.log("Key: ", key)
    // use dot notation when know that the key / value pairs exists in the object
    // console.log(person.key)

    // Use bracket notation id it is a variable value
    console.log(person[key])
}


// When and where to use loop
// Whenever we need to go through an array / object


// The function receives parameters in the function definition
function multiply(a, b) {
    return a * b;
}

// arguments are passed when the function is called
multiply(1, 3)



