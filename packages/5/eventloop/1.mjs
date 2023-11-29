import fs from 'fs'

process.on('exit', () => {
  console.log('11')
})

// 异步读取文件
fs.readFile('./1.mjs', () => {
  console.log('10')
})

setTimeout(() => {
  console.log('8')
}, 0)
setTimeout(() => {
  console.log('9')
}, 0)

process.nextTick(() => {
  console.log('2')
  Promise.resolve().then(() => {
    console.log('5')
  })
  process.nextTick(() => {
    console.log('3')
    process.nextTick(() => {
      console.log('4')
    })
  })
})

setImmediate(() => {
  console.log('6')
  Promise.resolve().then(() => {
    console.log('7')
  })
})

console.log('1')
