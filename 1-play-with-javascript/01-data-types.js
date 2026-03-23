"use strict";


// 1. value types
//-------------------------

// 1. string
var myName = "John Doe";
var myCity = 'New York';
var myCountry = `USA`;
var mySentence1 = "My name is " + myName + " and I live in " + myCity + ", " + myCountry + ".";
var mySentence2 = `My name is ${myName} and I live in ${myCity}, ${myCountry}.`;
var htmlTemplate = `
  <div>
    <h1>${myName}</h1>
    <p>${mySentence2}</p>
  </div>
`;


// 2. number
var myAge = 30;
var myHeight = 1.75;

// 3. boolean
var isStudent = true;
var hasCar = false;

// imp-note:
// Falsy values: false, 0, "", null, undefined, NaN
// Ref: https://dorey.github.io/JavaScript-Equality-Table/

// 4. null
var myNullValue = null;
// console.log(typeof myNullValue); // "object" (this is a quirk in JavaScript)

// 5. undefined
var myUndefinedValue;
// console.log(myUndefinedValue); // undefined
// console.log(typeof myUndefinedValue); // "undefined"


// 2. reference types aka objects
//--------------------------------

// till-ES5, we used constructor functions and prototypes to create objects and implement inheritance in JavaScript. For example:

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function () {
    console.log(`My name is ${this.name}.`);
}
Person.prototype.sayAge = function () {
    console.log(`I am ${this.age} years old.`);
}

// with ES6, we have a more elegant syntax for creating objects and implementing inheritance using classes. For example:

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayName() {
//         console.log(`My name is ${this.name}.`);
//     }
//     sayAge() {
//         console.log(`I am ${this.age} years old.`);
//     }
// }

// console.log(typeof Person); // "function" (classes in JavaScript are syntactic sugar over constructor functions)

var person1 = new Person("Alice", 25);
var person2 = new Person("Bob", 30);


// console.log(Object.isExtensible(person1)); // true
// console.log(Object.isSealed(person1)); // false
// console.log(Object.isFrozen(person1)); // false

// Object.preventExtensions(person1); // making person1 non-extensible
// Object.seal(person1); // making person2 non-extensible and non-configurable
// Object.freeze(person1); // making person1 non-extensible, non-configurable, and immutable


//. imp-notes about objects:
// by default,
// -> objects are extensible (you can add new properties to them)
// -> objects are configurable (you can delete properties from them)
// -> objects are mutable (you can change the values of their properties)

// person1.city = "New York"; // adding a new property to person1
// delete person1.age; // deleting the age property from person1
// person1.name = "Alice Smith"; // changing the name property of person1


// 3. built-in classes
//--------------------------------

// 1. Object

var config = new Object();
config.url = "https://api.example.com/data";
config.method = "GET";
config.headers = {
    "Content-Type": "application/json"
};

// or literally:

var configLiteral = {
    url: "https://api.example.com/data",
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
}

// 2. Array

var numbers = new Array(1, 2, 3, 4, 5);

// or literally:

var numbersLiteral = [1, 2, 3, 4, 5];

// 3. Function

var add = new Function("a", "b", "return a + b;");
// console.log(add(2, 3)); // 5

// or literally:

function addLiteral(a, b) {
    return a + b;
}
// console.log(addLiteral(2, 3)); // 5

// 4. RegExp

var aadharPattern = new RegExp("\\d{4}-\\d{4}-\\d{4}");
var userInput = "1234-5678-9012";
// console.log(aadharPattern.test(userInput)); // true

// or literally:

var aadharPatternLiteral = /\d{4}-\d{4}-\d{4}/;
// console.log(aadharPatternLiteral.test(userInput)); // true

// 5. Date
// 6. Error
// 7. Map
// 8. Set
// 9. WeakMap
// 10. WeakSet


// 4. How to access properties in JavaScript objects?
//--------------------------------

// 1. dot notation
// console.log(person1.name); // "Alice"
// console.log(person1.age); // 25

// 2. bracket notation
// console.log(person1["name"]); // "Alice"
// console.log(person1["age"]); // 25

// imp-note: if the property name is a valid identifier and does not contain special characters, we can use dot notation. Otherwise, we have to use bracket notation. For example:

var myObject = {
    "first-name": "John",
    "last-name": "Doe"
};

// console.log(myObject.first-name); // This will throw an error because of the hyphen in the property name
// console.log(myObject["first-name"]); // "John"
// console.log(myObject["last-name"]); // "Doe"


let o = {
    1: "one",
    2: "two",
    3: "three"
}

// console.log(o[1]); // "one"
// console.log(o["1"]); // "one" (property keys are always strings in JavaScript objects)

console.log(o[1]); // "one"