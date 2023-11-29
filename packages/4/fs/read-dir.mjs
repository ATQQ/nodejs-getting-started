import fs from 'fs'

// const files = fs.readdirSync('test-dir')

// console.log(files)

const files2 = fs.readdirSync('test-dir', { withFileTypes: true })
console.log(files2.map((f) => ({ name: f.name, isDirectory: f.isDirectory() })))
