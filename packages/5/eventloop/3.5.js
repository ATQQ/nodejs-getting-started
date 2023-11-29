process.on('exit', () => {
  Promise.resolve().then(() => {
    console.log(4)
  })
  console.log(2)
})

process.on('exit', () => {
  Promise.resolve().then(() => {
    console.log(5)
  })
  console.log(3)
})

console.log(1)
