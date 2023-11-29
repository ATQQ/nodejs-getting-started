// 在模块中定义一个hello函数
function hello(name) {
  console.log(`Hello, ${name}!`)
}

// 在模块中定义一个byebye函数
function byebye(name) {
  console.log(`byebye, ${name}!`)
}

const userInfo = {
  name: 'forever',
  age: 18
}

// 将函数导出到模块的外部
module.exports = {
  hello,
  byebye,
  userInfo
}
