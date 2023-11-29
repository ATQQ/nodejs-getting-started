import fs from 'fs'

const txtContent = fs.readFileSync('./test.txt', 'utf-8')

const buf = fs.readFileSync('./test.txt')

// 打印Buffer大小
console.log(buf.length)
// 修改前2个字符
buf.write('gg')

// 输出修改后的内容
console.log(buf.toString())
