import fs from 'fs'

const fileA = 'index.mjs'
const fileB = 'index.mjs'
const fileC = 'index.mjs'
fs.readFile(fileA, (err, dataA) => {
  console.log('File A content:')

  fs.readFile(fileB, (err, dataB) => {
    console.log('File B content:')

    fs.readFile(fileC, (err, dataC) => {
      console.log('File C content:')
    })
  })
})
