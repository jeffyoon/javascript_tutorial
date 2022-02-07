// Class object (Constructor pattern, Factory pattern, Prototype pattern, Dynamic prototype pattern)

// Factory pattern (function is an Object)
var PeopleFactory = function (name, age, state) {
  var temp = {}

  temp.name = name
  temp.age = age
  temp.state = state

  temp.printPerson = function () {
    console.log(this.name + ', ' + this.age + ', ' + this.state)
  }

  return temp
}

var person1 = PeopleFactory('Jeff', 49, 'Seoul')
var person2 = PeopleFactory('Rachel', 47, 'Seoul')

person1.printPerson()
person2.printPerson()

// Constructor pattern (function is an Object)
var PeopleConstructor = function (name, age, state) {
  this.name = name
  this.age = age
  this.state = state

  this.printPerson = function () {
    console.log(this.name + ', ' + this.age + ', ' + this.state)
  }
}

var person3 = new PeopleConstructor('Jeff', 49, 'Seoul')
var person4 = new PeopleConstructor('Rachel', 47, 'Seoul')

person3.printPerson()
person4.printPerson()

// Prototype pattern
var PeopleProto = function () {}
PeopleProto.prototype.age = 0
PeopleProto.prototype.name = ''
PeopleProto.prototype.state = ''
PeopleProto.prototype.printPerson = function () {
  console.log(this.name + ', ' + this.age + ', ' + this.state)
}

var person5 = new PeopleProto()
person5.name = 'Jeff'
person5.age = 49
person5.state = 'Seoul'
person5.printPerson()
console.log('name' in person5) // true
console.log(person5.hasOwnProperty('name')) // If person5.name is comment out, it returns false, because person5 does not have a name property, if person5.name has a 'Jeff', it returns true.

// Dynamic prototype pattern
var PeopleDynamicProto = function (name, age, state) {
  this.name = name
  this.age = age
  this.state = state

  if (typeof this.printPerson !== 'function') {
    PeopleDynamicProto.prototype.printPerson = function () {
      console.log(this.name + ', ' + this.age + ', ' + this.state)
    }
  }
}

var person6 = new PeopleDynamicProto('Jeff', 49, 'Seoul')
person6.printPerson()
