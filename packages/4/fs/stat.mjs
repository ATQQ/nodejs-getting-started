import fs from 'fs'

const fileInfo = fs.statSync('./test.txt')
console.log(fileInfo.isFile(), fileInfo.isDirectory())

const dirInfo = fs.statSync('./test-dir')
console.log(dirInfo.isFile(), dirInfo.isDirectory())

try {
  // 查询一个不存在的文件/目录信息（会抛出异常，需要自行捕获）
  fs.statSync('not_exist.txt')
} catch (e) {
  console.log('文件不存在')
}

console.log(fs.statSync('./test.txt'))
console.log(fs.statSync('./test-dir'))
