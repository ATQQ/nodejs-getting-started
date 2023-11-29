import util from 'util'
import { stringify } from 'javascript-stringify'

// 复杂对象
const testObj = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4, 5],
    e: () => {
      console.log(6)
    }
  },
  f: '7',
  g: [{ 8: [{ 9: 10 }] }],
  h() {
    console.log(11)
  }
}

console.log(testObj)
console.log(JSON.stringify(testObj, null, 2))
console.log(util.inspect(testObj, { depth: Math.Infinity }))
console.log(stringify(testObj, null, 2))
