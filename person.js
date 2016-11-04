var events = require('events')
var util = require('util')

function Person (name, age, sex) {
  this._name = name
  this._age = age
  this._sex = sex
}

util.inherits(Person, events.EventEmitter)

function logMessage (msg) {
  console.log('message : ' + msg)
}

function processJob (msg) {
  logMessage.call(this, msg)
}

Person.prototype.getName = function () {
  processJob.call(this, 'getName = ' + this._name)
  return this._name
}

Person.prototype.getAge = function () {
  processJob.call(this, 'getAge = ' + this._age)
  return this._age
}

Person.prototype.getSex = function () {
  processJob.call(this, 'getSex = ' + this._sex)
  return this._sex
}

Person.prototype.changeName = function (name) {
  this._name = name
  processJob.call(this, 'changeName = ' + this._name)
}

Person.prototype.changeAge = function (age) {
  this._age = age
  processJob.call(this, 'changeAge = ' + this._age)
}

Person.prototype.changeSex = function (sex) {
  this._sex = sex
  processJob.call(this, 'changeSex = ' + this._sex)
}

Person.prototype.info = function () {
  console.log('name = ' + this._name + ' age = ' + this._age + ' sex = ' + this._sex)
}

Person.prototype.change = function (name, age, sex) {
  // console.log('name = ' + name + ' age = ' + age + ' sex = ' + sex)
  this.emit('change', name, age, sex)
}

module.exports = Person
