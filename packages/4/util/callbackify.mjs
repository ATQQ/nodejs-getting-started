import util from 'util'

function foo() {
  return Promise.resolve('hello world')
}

function bar() {
  return Promise.reject(new Error('error reject'))
}

const callbackFoo = util.callbackify(foo)
const callbackBar = util.callbackify(bar)

callbackFoo((err, ret) => {
  if (err) {
    console.log('err', err)
    return
  }
  console.log(ret)
})

callbackBar((err, ret) => {
  if (err) {
    console.log('err', err)
    return
  }
  console.log(ret)
})
