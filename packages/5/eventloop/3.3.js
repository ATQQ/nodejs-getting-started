const fs = require('fs')

fs.readFile(__filename, () => {
  console.log(3)
  Promise.resolve().then(() => {
    console.log(3)
  })
})

fs.readFile(__filename, () => {
  console.log(4)
  Promise.resolve().then(() => {
    console.log(4)
  })
})

setTimeout(() => {
  console.log(2)
}, 0)

console.log(1)
