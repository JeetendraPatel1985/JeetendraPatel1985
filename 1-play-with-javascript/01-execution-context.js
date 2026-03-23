"use strict";


/*

execution context aka scope
----------------------------

-> stack-frame/memory with given args & local variables for function execution
-> by default, there is a global execution context created by JS engine when the program starts
-> each function call creates a new execution context,
   which is a child of the context in which that function is declared,


each context has 2 phases:
---------------------------
1. creation phase ( push )
    -> any variable declared with 'var' always gets hoisted to the top of the context
       with default value of 'undefined'
2. execution phase ( pop )
    -> code is executed line by line, and variables get assigned their actual values

*/

// debugger

// console.log(v); // undefined
// var v = 10;
// console.log(v); // 10

//------------------------------


// var v = 10;
// function foo() {
//     console.log(v);
//     var v = 20;
// }
// foo(); // foo-context <-- global-context


//------------------------------


// var v = 10;
// function foo() {
//     function bar() {
//         console.log(v);
//     }
//     bar(); // bar-context <-- foo-context <-- global-context
//     var v = 20;
// }
// foo(); // foo-context <-- global-context

//------------------------------

// var v = 10;
// var v = 20;

// var allows redeclaration, 

//-----------------------------

// var v = 10;
// if (true) {
//     var v = 20;
// }
// console.log(v);

// var does not have block scope, it has function scope, so the 'v' inside the if block is the same 'v' as in the global context, hence it gets overwritten to 20.


//-----------------------------

// problem with 'var':

// -> variable always gets hoisted to the top of the context with default value of 'undefined', 
// -> allows redeclaration,
// -> does not have block scope, it has function scope

//-----------------------------

// Solution: let & const

// console.log(v); // ReferenceError: Cannot access 'v' before initialization
// let v = 10;

// let v = 10;
// let v = 20; // SyntaxError: Identifier 'v' has already been declared

// let v = 10;
// if (true) {
//     let v = 20;
// }
// console.log(v); // 10

//------------------------------

const person = {
    name: 'John',
    age: 30,
}
// person = null; // TypeError: Assignment to constant variable.

person.name = 'Jane'; // works, because we are not reassigning the variable, we are just changing the property of the object that the variable is pointing to.

/// Summary:
// --------------

// -> use 'let' for mutaable references, 
// -> use 'const' for immutable references,
// -> avoid using 'var' due to its hoisting, redeclaration, and lack of block scope issues.


//------------------------------

//. Quiz

// let x = 10;
// function f() {
//     x = 100;
// }
// f();
// console.log(x); 

//------------------------------

// for (let i = 0; i < 3; i++) {
//     for (let i = 0; i < 3; i++) {
//         console.log("npci")
//     }
// }