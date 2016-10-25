// One lien Comment

/*
   This is a comment
   More line comment
 */

// strict mode for safe coding in javascript (ES6)
'use strict'

var i = 0
let j = 0
const c = 0

console.log(i)
console.log(j)
console.log(c)

var a
console.log('a value ' + a)
// console.log("b value " + b)     // ReferenceError 예외 던짐

// block
if (true) {
  var x = 5
}
console.log(x) // 5

if (true) {
  let y = 6
  console.log(y)
}

console.log(y) // ReferenceError: y is not defined
