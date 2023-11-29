setTimeout(() => {
  Promise.resolve().then(() => {
    console.log(4)
  })
  process.nextTick(() => {
    console.log(3)
  })
  console.log(2)
}, 0)

setTimeout(() => {
  console.log(5)
}, 0)

console.log(1)
