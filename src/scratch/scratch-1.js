const { set, add, subtract, print } = require('../helpers/utils')

set(150)
  .then(add(3))
  .then(add(6))
  .then(subtract(25))
  .then(print())
