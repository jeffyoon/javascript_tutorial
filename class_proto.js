/* Self invoking function and define class MyObject */
var MyObject = (function () {
  var win

  // Constructor
  function MyObject (foo) {
    this._foo = foo
    win = foo
  }

  function privateFun (prefix) {
    return prefix + this._foo
  }

  function privateFun2 (prefix) {
    return prefix + win
  }

  /* You should call privateFun by using 'call' method */
  /* Because privateFun uses a private value of this._foo' in MyObject */
  MyObject.prototype.publicFun = function () {
    return privateFun.call(this, '>>')
  }

  MyObject.prototype.publicFun2 = function () {
    return privateFun2('>>')
  }

  return MyObject
})()

var myObject = new MyObject('bar')
console.log(myObject.publicFun()) // Returns '>>bar'
console.log(myObject.publicFun2())
// console.log(myObject.privateFun('>>')) // ReferenceError: private is not defined

/* Class Restaurant */
function Restaurant () {
  this._foo = 'This is a foo...'
  var myPrivateVar

  function privateStuff () {
    myPrivateVar = 'I can set this here!'
    console.log(myPrivateVar)
  }

  function privateStuff2 () {
    console.log('foo = ' + this._foo)
  }

  this.useRestroom = function () {
    privateStuff()
    privateStuff2.call(this)
  }

  this.buyFood = function () {
    privateStuff()
    privateStuff2.call(this)
  }
}

var r = new Restaurant()

r.useRestroom()
r.buyFood()
// r.privateStuff() // Error

/* Class Restaurant1 */
function Restaurant1 () {
  this._foo = 'This is a foo variable'
}

Restaurant1.prototype = (function () {
  var privateStuff = function () {
    // Private code here
    console.log('call privateStuff on Restaurant1 class')
  }

  var privateStuff2 = function () {
    console.log('call privateStuff2 = ' + this._foo)
  }

  return {
    constructor: Restaurant1,
    useRestroom: function () {
      privateStuff()
    },
    buyFood: function () {
      // privateStuff2()  --> 'call privateStuff2 = undefined'
      privateStuff2.call(this) // 'call privateStuff2 = This is a foo variable'
    }
  }
})()

var r1 = new Restaurant1('Windows')

// This will work:
r1.useRestroom()
r1.buyFood()

// This will cause an error:
// r1.privateStuff()

function MyObject1 (foo) {
  this._foo = foo
}

function privateStuff (prefix) {
  return prefix + this._foo
}

function privateStuff2 (prefix) {
  return prefix + 'Stuff2 '
}

MyObject1.prototype.publicStuff = function () {
  return privateStuff.call(this, '>>')
}

MyObject1.prototype.publicStuff2 = function () {
  return privateStuff2('>>')
}

var myObject1 = new MyObject1('bar')
console.log('msg = ' + myObject1.publicStuff())
console.log('msg = ' + myObject1.publicStuff2())
