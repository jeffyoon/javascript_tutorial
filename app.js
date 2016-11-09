var Person = require('./person')

var person = new Person('Jeff Yoon', 49, 'M')

person.info()

person.change('Rachel Park', 47, 'F')
person.change('Jeff', 49, 'M')

// person.info()
