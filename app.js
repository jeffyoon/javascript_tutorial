var Person = require('./person')

var person = new Person('Jeff Yoon', 49)

person.info()

person.changeName('Rachel Park')
person.changeAge(47)

person.info()
