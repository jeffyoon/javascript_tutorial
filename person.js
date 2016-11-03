function Person (name, age) {
  this._name = name
  this._age = age

  console.log('name = ' + this._name + ' age = ' + this._age)
}

Person.prototype.getName = function () {
  return this._name
}

Person.prototype.getAge = function () {
  return this._age
}

Person.prototype.changeName = function (name) {
  this._name = name
}

Person.prototype.changeAge = function (age) {
  this._age = age
}

Person.prototype.info = function () {
  console.log('name = ' + this._name + ' age = ' + this._age)
}

module.exports = Person
