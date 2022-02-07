var addTo = function (passed) {
  var add = function (inner) {
    return passed + inner
  }

  return add
}

var addThree = addTo(3)
console.log(addThree(1))
