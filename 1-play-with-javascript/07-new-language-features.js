"use strict"


//1. arrow functions
//--------------------------


// syntax:

const getPrice1 = function (count, tax) {
    return count * 100 * (1 + tax)
}
// or
const getPrice2 = (count, tax) => {
    return count * 100 * (1 + tax)
}
// or
const getPrice3 = (count, tax) => count * 100 * (1 + tax)

const upper = str => str.toUpperCase()

// why use arrow functions?
// 1. more concise
// 2. lexical this (does not have its own this, it uses the this from the surrounding code)


// 1. more concise
//--------------------------

let numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
numbers.sort((a, b) => a - b);
// console.log(numbers)

// 2. lexical this
//--------------------------

const trainer1 = {
    name: "Nag",
    doTeach() {
        console.log(this.name + " teaching JS")
        const askQues = (ques) => {
            console.log(this.name + " answering question on JS: " + ques)
        }
        return askQues
    }
}

// const askQues = trainer1.doTeach()
// askQues("Q1")
// askQues("Q1")
// askQues("Q2")

//-----

// const rf = function () {
//     console.log(this)
// }
// const af = () => {
//     console.log(this)
// }
// rf();
// af();

//----
// Q
const invoice = {
    num: 123,
    process: () => {
        console.log("processing invoice: " + this.num + " partially")
        return () => {
            console.log("processing invoice: " + this.num + " completely")
        }
    }
}

// const complete = invoice.process()
// complete() 


// 2. class
//--------------------------

// before Es6
function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype.sayName = function () {
    console.log("I am " + this.name)
}

// Es6
// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     sayName() {
//         console.log("I am " + this.name)
//     }
// }

// 3. Enhanced Object Literals
//--------------------------

const myName = "Nag"
const myAge = 33

// before Es6
const person1 = {
    myName: myName,
    myAge: myAge,
    sayName: function () {
        console.log("I am " + this.myName)
    },
    address: "123, street, city"
}

// Es6
const addressType = "home" // home | office | other
const person2 = {
    myName,
    myAge,
    sayName() {
        console.log("I am " + this.myName)
    },
    [addressType + "-address"]: "123, street, city"
}


// 4. Template Literals
//--------------------------

const myName1 = "Nag"
const myAge1 = 33

// before Es6
const message1 = "My name is " + myName1 + " and I am " + myAge1 + " years old."

// Es6
const message2 = `My name is ${myName1} and I am ${myAge1} years old.`
const multilineMessage = `This is a multiline
message.`


// 5. Destructuring
//--------------------------

// ==>  extract values from arrays or objects and assign them to variables

// a. object destructuring

// before Es6
const person3 = {
    name: "Nag",
    age: 33,
    address: {
        city: "Bangalore",
        state: "Karnataka"
    }
}
const name1 = person3.name
const age1 = person3.age
const city1 = person3.address.city

// Es6
const { name, age, address: { city } } = person3
const { name: personName, age: personAge, address: { city: personCity } } = person3

//...

function Card({ header, content, footer }) {
    // let header = props.header
    // let content = props.content
    // let footer = props.footer
    // let { header, content, footer } = props
    //...
    return `<div class="card">
        <div class="card-header">${header}</div>
        <div class="card-content">${content}</div>
        <div class="card-footer">${footer}</div>
    </div>`
}


// b. array destructuring

const colors = ["red", "green", "blue", "yellow"]

// before Es6
const red1 = colors[0]
const green1 = colors[1]
const blue1 = colors[2]
const yellow1 = colors[3]
// Es6
const [red, green, blue, v = "unknown"] = colors


// 6. Spread operators
//--------------------------

// copying arrays or objects

let currentState = ["task1", "task2", "task3", "task4"]
let newState = [...currentState, "task5"]

let o1 = { name: "Nag", age: 33 }
let o2 = { ...o1, city: "Bangalore" }

//7. default parameters
//--------------------------

function greet(name = "Guest") {
    console.log("Hello " + name)
}
// greet()
// greet("Nag")

//8. rest parameters
//--------------------------

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0)
}
// console.log(sum(1, 2, 3, 4, 5))


// let & const
//--------------------------

const PI = 3.14
// PI = 3.1415 // error

let count = 0
count = 1 // ok


//9. iterators and for-of loop
//--------------------------

// data-structure + iterator => iterable data-structure

const foodBox = {
    items: ["samosa", "vada", "bonda"],
    [Symbol.iterator]: function () {
        let index = 0
        return {
            next: () => {
                let value = this.items[index]
                let done = index >= this.items.length
                index++
                return {
                    value,
                    done
                }
            }
        }
    }
}

for (let food of foodBox) {
    // console.log(food)
}

let newFoodBox = [...foodBox, "puff"]
let [item1, item2, item3] = foodBox


// 10. generators
//--------------------------


function* eat() {
    console.log("eating started")
    // step-1: 
    const food = yield "Need Food"
    console.log("received food: " + food)
    // step-2:
    const drink = yield "Need Drink"
    console.log("received drink: " + drink)
    console.log("Yummy... eating..." + food + " with " + drink)
    console.log("eating completed")
}


// 11. async programming
//--------------------------

// 1. Promise


//-------------------------------------------
// trainer module
//-------------------------------------------

const trainer = {
    getTopicDetails(topic) {
        const executor = (resolve, reject) => {
            setTimeout(() => {
                if (topic === "js") {
                    console.log("trainer:: got topic details, resolving promise...")
                    resolve("JS is a programming language")
                } else {
                    console.log("trainer:: don't know about the topic, rejecting promise...")
                    reject("I don't know about " + topic)
                }
            }, 2000)
        }
        const promise = new Promise(executor);
        return promise
    }
}




//--------------------------------------------
// Online Module
//--------------------------------------------



const online = {
    getMoreTopicDetails(topic) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (topic === "js") {
                    console.log("online:: got topic details, resolving promise...")
                    resolve("JS is a programming language".toUpperCase())
                } else {
                    console.log("online:: don't know about the topic, rejecting promise...")
                    reject("I don't know about " + topic)
                }
            }, 2000)
        })
    }
}




//--------------------------------------------
// employee module
//--------------------------------------------

const employee = {
    doLearnV1() {
        console.log("employee:: learning started")
        let topic = "js"
        console.log("employee:: asking trainer for topic details...")
        const promise = trainer.getTopicDetails(topic)
        console.log("employee:: got promise, deferring learning...")
        promise
            .then(details => {
                console.log("employee:: got topic details, learning started...")
                console.log("employee:: asking online for more topic details...")
                online.getMoreTopicDetails(topic)
                    .then(moreDetails => {
                        console.log("employee:: got more topic details, learning more...")
                        console.log("employee:: learning completed with details: " + details + " and more details: " + moreDetails)
                    })
                    .catch(err => {
                        console.log("employee:: error in getting more topic details: " + err)
                    })
            })
            .catch(err => {
                console.log("employee:: error in getting topic details: " + err)
            })
        console.log("employee:: learning deferred, doing other work...")
    },
    async doLearnV2() {
        console.log("employee:: learning started")
        let topic = "js"
        console.log("employee:: asking trainer for topic details...")
        try {
            const details = await trainer.getTopicDetails(topic)
            console.log("employee:: got topic details, learning started...")
            console.log("employee:: asking online for more topic details...")
            const moreDetails = await online.getMoreTopicDetails(topic)
            console.log("employee:: got more topic details, learning more...")
            console.log("employee:: learning completed with details: " + details + " and more details: " + moreDetails)
        } catch (err) {
            console.log("employee:: error in learning: " + err)
        }
    },
    doWork() {
        this.doLearnV2()
        console.log("employee:: doing other work...")
    }


}

//--------------------------------------------

employee.doLearnV1()