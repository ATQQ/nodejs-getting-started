import fs from 'fs/promises'

const fileA = 'index.mjs'
const fileB = 'index.mjs'
const fileC = 'index.mjs'
async function main() {
  const dataA = await fs.readFile(fileA)
  console.log('File A content:')
  const dataB = await fs.readFile(fileB)
  console.log('File B content:')
  const dataC = await fs.readFile(fileC)
  console.log('File C content:')
}
main()
