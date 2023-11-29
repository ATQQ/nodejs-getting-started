// 定义一个名为 "exports" 的函数
// 函数中将 "Hello World!" 的信息输出到控制台中
exports = function () {
  console.log('Hello World!')
}

// 下面的导出代码无效

// 导出一个名为 "hello" 的函数到 "exports" 对象中
// 函数中会将 "Hello World!" 的信息输出到控制台中
exports.hello = function () {
  console.log('Hello World!')
}

// 理论上等价于
// module.exports.hello = function () {
//   console.log('Hello World!')
// }
