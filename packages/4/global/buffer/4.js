const buf1 = Buffer.from('Hello')
const buf2 = Buffer.from('World')
const buf3 = Buffer.concat([buf1, buf2])
console.log(buf3.toString()) // 输出 'HelloWorld'
