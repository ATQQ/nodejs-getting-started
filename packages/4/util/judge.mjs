import util from 'util'

// 判断数据类型
console.log(util.isArray([])) // true
console.log(util.isRegExp(/some regexp/)) // true
console.log(util.isDate(new Date())) // true
console.log(util.isPrimitive(null)) // true
console.log(util.isPrimitive(1)) // true
