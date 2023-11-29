setImmediate(() => {
  Promise.resolve().then(() => {
    console.log(4)
  })
  process.nextTick(() => {
    console.log(3)
  })
  console.log(2)
})

setImmediate(() => {
  console.log(5)
})
console.log(1)
