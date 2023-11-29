import util from 'util'

console.log(util.format('%s:%s', 'foo', 'bar')) // 'foo:bar'
console.log(util.format('%d + %d = %d', 1, 2, 3)) // '1 + 2 = 3'

console.log(
  util.format('My name is %j', { firstName: 'John', lastName: 'Doe' })
)
// 'My name is {"firstName":"John","lastName":"Doe"}'
