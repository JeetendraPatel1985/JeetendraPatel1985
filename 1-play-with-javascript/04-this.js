"use strict"


function add(a, b) {
    return a + b;
}
// console.log(add(2, 3)) // 5

function sayName() {
    console.log(this)
    console.log("im " + this.name)
}

// sayName()


// function binding 
//--------------------------
// 1. static binding
// 2. dynamic binding

// 1. static binding
//--------------------------
const person1 = {
    name: "Alice",
    sayName: sayName
}

// person1.sayName() // im Alice

let person2 = {
    name: "Bob",
    sayName: sayName
}

// person2.sayName() // im Bob

let person3 = {
    name: "Charlie",
    sayName: function () {
        console.log(this)
        console.log("im " + this.name)
    }
}
// person3.sayName() // im Charlie


// 2. dynamic binding
//--------------------------

//-------------------------------------
// Npci module
//--------------------------------------

function doTraining(sub, duration, city) {
    console.log(`
        The trainer ${this.name} 
        will conduct a training on ${sub} for ${duration} days in ${city}
        `)
}

// doTraining("JavaScript", 5, "Hyderabad")

//------------------------------
// Vendor module
//------------------------------

const trainer = {
    name: "Nag"
}
Object.preventExtensions(trainer)

//--------------------------------

// trainer.doTraining = doTraining // object is not extensible, cannot add new properties

//way-1: using call method
// doTraining.call(trainer, "JavaScript", 5, "Hyderabad")
//way-2: using apply method
// doTraining.apply(trainer, ["JavaScript", 5, "Hyderabad"])
//way-3: using bind method
const doTrainingForNag = doTraining.bind(trainer)
// doTrainingForNag("JavaScript", 5, "Hyderabad")
// doTrainingForNag("Spring-boot", 7, "Mumbai")


//--------------------------------

// Quiz-1

const p = {
    myName: "Nag",
    sayName: function () {
        console.log("im " + this.myName)
    }
}

// p.sayName()//

//------------------------------


const trainer1 = {
    name: "Nag",
    doTeach: function (sub) {
        console.log(this.name + " teaching " + sub)
        const askQues = function (ques) {
            console.log(this) // undefined
            console.log(this.name + " answering " + ques)
        }
        console.log("teaching ends")
        return askQues
    }
}

// const askQues = trainer1.doTeach("JavaScript")
// askQues.call(trainer1, "what is closure?")


//---------------------------------------------

// console.log(this) // this in global context is window object ( browser environment) or global object (node environment)

//------------------------------



const invoice = {
    number: 123,
    process: function () {
        console.log("processing invoice " + this.number + " partially...")
        return function () {
            console.log("processing invoice " + this.number + " completely...")
        }
    }
}

const complete = invoice.process() // processing invoice 123
complete.call(invoice) // processing invoice 123 completely...


//------------------------------


function Person(name, age) {
    this.name = name
    this.age = age
    const that = this
    window.setInterval(function () {
        that.age++
        console.log(that.name + " is " + that.age + " years old")
    }, 1000)
}

const p1 = new Person("Riya", 0)