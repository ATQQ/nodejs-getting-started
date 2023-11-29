Promise.resolve().then(() => {
  console.log(4)
})

process.nextTick(() => {
  console.log(2)
  Promise.resolve().then(() => {
    console.log(5)
  })
  process.nextTick(() => {
    console.log(3)
  })
})

console.log(1)
