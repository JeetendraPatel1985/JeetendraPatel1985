
/*

-> function is an object 
-> function is first class citizen in javascript

    -> function can be stored in a variable
    -> function can be passed as an argument to another function
    -> function can be returned from another function

 ----------------------------
 
 in javascript , we can create a function in 2 ways

    1. function declaration 
    2. function expression

*/

// function declaration
//-----------------------

// - Named function
// - Function object is created at scope creation phase
// - Hoisted

// console.log(add(2, 3)); // 5

function add(a, b) {
    return a + b;
}

// console.log(add(2, 3)); // 5

// function expression
//-----------------------

// - Anonymous function
// - Function object is created at scope execution phase
// - Not hoisted

// console.log(subtract(5, 2)); // Uncaught ReferenceError: Cannot access 'subtract' before initialization
let subtract = function (a, b) {
    return a - b;
}
// console.log(subtract(5, 2)); // 3


//------------------------------------------
// Function arguments
//------------------------------------------


function f(a, b, c) {
    console.log(arguments);
    console.log(a);
    console.log(b);
    console.log(c);
}

// f(10, 20, 30, 40, 50, 60)


// e.g

function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

// console.log(sum()) // 0
// console.log(sum(10)) // 10
// console.log(sum(10, 20)) // 30
// console.log(sum(10, 20, 30)) // 60
// console.log(sum(10, 20, 30, 40, 50, 60)) // 210


function getFood() {
    if (arguments.length === 0) {
        return "No food";
    } else if (arguments.length === 1) {
        return `Food is ${arguments[0]}`;
    } else {
        return "Too much food";
    }
}

// function with default parameters ( es6 feature )

function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

// console.log(greet()) // Hello, Guest!
// console.log(greet("Alice")) // Hello, Alice!


// function with rest parameters ( es6 feature )
function greetAll(message, ...names) {
    return `${message} ${names.join(", ")}`;
}

// console.log(greetAll("Hello")) // Hello 
// console.log(greetAll("Hello", "Alice")) // Hello Alice
// console.log(greetAll("Hello", "Alice", "Bob", "Charlie")) // Hello Alice, Bob, Charlie


// function with return statement
// ---------------------------------

function square(x) {
    return x * x;
}

// console.log(square(5)) // 25


// function as first class citizen
//-------------------------------

// 1. function can be stored in a variable

function greet(name) {
    return `Hello, ${name}!`;
}

let sayHello = greet;

// console.log(sayHello("Alice")) // Hello, Alice!

// 2. function can be passed as an argument to another function

let numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// console.log(numbers)
function compare(a, b) {
    return a - b;
}
numbers.sort(compare);
// console.log(numbers)

//-------------------------
// style of programming
//-------------------------

let data = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];


// 1- imperative programming
//-------------------------------
// -> solving any problem by giving step by step instructions 
// => intention + implementation mixed together

// function filterOddNumbers(input) {
//     let result = [];
//     for (let i = 0; i < input.length; i++) {
//         if (input[i] % 2 !== 0) {
//             result.push(input[i]);
//         }
//     }
//     return result;
// }

// function filterEvenNumbers(input) {
//     let result = [];
//     for (let i = 0; i < input.length; i++) {
//         if (input[i] % 2 === 0) {
//             result.push(input[i]);
//         }
//     }
//     return result;
// }
// let oddNumbers = filterOddNumbers(data);
// console.log(oddNumbers) // [1, 3, 5, 7, 9]

// declarative programming
//-------------------------------
// -> solving any problem by describing what we want to achieve 
// => intention and implementation are separated

const dataLib = {
    filter: function (input, predicate) {
        let result = [];
        for (let i = 0; i < input.length; i++) {
            if (predicate(input[i])) {
                result.push(input[i]);
            }
        }
        return result;
    }
}

const isOdd = function (x) {
    return x % 2 !== 0;
}

const isEven = function (x) {
    return x % 2 === 0;
}

let oddNumbers = dataLib.filter(data, isOdd);
// console.log(oddNumbers) // [1, 3, 5, 7, 9]

let evenNumbers = dataLib.filter(data, isEven);
// console.log(evenNumbers) // [2, 4, 6, 8, 10]


//3. function can be returned from another function
//-------------------------------

function teach() {
    console.log("Teaching...");
    let learn = function () {
        console.log("Learning...");
    }
    console.log("Teaching Ends")
    return learn;
}

// let learnFunction = teach();
// learnFunction();
// learnFunction();

//-------------------------------------------------------

// design issues
//------------------

// code tangling i.e tight coupling  ( greeting + emoji  mixed together )
// code scattering ( emoji code scattered in multiple functions )


function hello() {
    console.log("Hello")
}
function hi() {
    console.log("Hi")
}
function hey() {
    console.log("Hey")
}


// HOF
function withEmoji(fn) {
    return function () {
        fn();
        console.log("😊");
    }
}

function withAuth(fn) {
    return function () {
        console.log("👮‍♀️")
        fn();
    }
}

// const helloWithAuth = withAuth(hello);
// const helloWithAuthAndEmoji = withEmoji(helloWithAuth);
// helloWithAuthAndEmoji();

// or

// withEmoji(withAuth(hello))();



// function closure
//------------------

/*

A closure is a function that has access to the parent scope ( environment ), 
even after the parent function has closed.

*/


function teach(sub) {
    console.log(`Teaching ${sub}...`);
    let notes = `${sub} notes`;
    let fun = "bla bla bla...";
    function learn() {
        console.log(`Learning...`);
        console.log(`Using ${notes}`);
    }
    console.log(`Teaching Ends`)
    return learn;
}

// const learnFunc = teach("JavaScript") // teach-scope created
// teach-scope destroyed

// learnFunc();


// why we need closure ?
//-----------------------

/*

Closures has historically been used to:

- Create private variables
- Preserve state between function calls
- Simulate block-scoping before let and const existed
- Implement certain design patterns like currying and memoization

*/

// Module pattern using IIFE ( Immediately Invoked Function Expression )
const counter = (function () {
    console.log("Counter initialized");
    let count = 0;
    function increment() {
        count++;
    }
    function getCount() {
        return count;
    }
    return {
        increment: increment,
        getCount: getCount
    }
})()

// below module standards are used in modern javascript development
// 1. CommonJS ( used in nodejs ) -> module.exports and require() function
// 2. ES6 Modules ( used in frontend and nodejs both ) -> export and import keywords


//----------------------------------


// Quiz

var myFunctions = [];
function getF(i) {
    var f = function () {
        console.log(i);
    }
    return f;
}
for (var i = 0; i < 100; i++) {
    myFunctions.push(getF(i));
}
myFunctions[0]()
myFunctions[99]()