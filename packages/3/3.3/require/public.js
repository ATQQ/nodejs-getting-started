let num = 1

function update() {
  num += 1
  console.log('update num', num)
}

module.exports = {
  num,
  update
}
