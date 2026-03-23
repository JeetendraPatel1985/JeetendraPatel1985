
//1.array

let numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9
]

const result1 = numbers.filter(function (number) {
    return number % 2 === 0
})
console.log(result1) // [ 2, 4, 6, 8 ]

const result2 = numbers.map(function (number) {
    return number * 2
})
console.log(result2) // [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]

const result3 = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
}, 0)
console.log(result3) // 45

const result4 = numbers.find(function (number) {
    return number > 5
})
console.log(result4) // 6

const result5 = numbers.some(function (number) {
    return number > 8
})
console.log(result5) // true

const result6 = numbers.every(function (number) {
    return number > 0
})
console.log(result6) // true

const result7 = numbers.includes(5)
console.log(result7) // true

const result8 = numbers.indexOf(5)
console.log(result8) // 4

const result9 = numbers.slice(0, 5)
console.log(result9) // [ 1, 2, 3, 4, 5 ]




// 2. set

let mySet = new Set()
mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.add(3)
mySet.add(4)
mySet.add(5)

console.log(mySet) // Set(5) { 1, 2, 3, 4, 5 }

console.log(mySet.has(3)) // true
console.log(mySet.has(6)) // false

mySet.delete(3)
console.log(mySet) // Set(4) { 1, 2, 4, 5 }

mySet.clear()
console.log(mySet) // Set(0) {}


// 3. map

let myMap = new Map()
myMap.set('name', 'John')
myMap.set('age', 30)
myMap.set('city', 'New York')

console.log(myMap) // Map(3) { 'name' => 'John', 'age' => 30, 'city' => 'New York' }

console.log(myMap.get('name')) // John
console.log(myMap.get('age')) // 30
console.log(myMap.get('city')) // New York

myMap.delete('age')
console.log(myMap) // Map(2) { 'name' => 'John', 'city' => 'New York' }

myMap.clear()
console.log(myMap) // Map(0) {}