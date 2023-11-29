import fs from 'fs'

console.log(1)
fs.readFile('./index.mjs', (err, data) => {
  console.log(2, data.toString())
})
console.log(3)
