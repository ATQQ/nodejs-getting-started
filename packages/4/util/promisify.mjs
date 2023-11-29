// 引入 Node.js 内置模块 util 和 fs
import util from 'util'
import fs from 'fs'
// 将 fs.readFile 方法转换为返回 Promise 的函数
const fsRead = util.promisify(fs.readFile)
// 使用 Promise 的方式读取文件内容并输出
fsRead('./package.json').then((data) => {
  console.log(data.toString())
})
