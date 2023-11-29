import fs from 'fs'

// 同步读取
const syncData = fs.readFileSync('./test.txt', 'utf-8')
console.log('====sync read====')
console.log(syncData)

// 回调形式 异步读取
fs.readFile('./test.txt', 'utf-8', (err, callbackData) => {
  if (!err) {
    console.log('====callback read====')
    console.log(callbackData)
  }
})

// promise形式 异步读取
fs.promises.readFile('./test.txt', 'utf-8').then((promiseData) => {
  console.log('====promise read====')
  console.log(promiseData)
})
