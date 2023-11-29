const buf = Buffer.from('Hello, world!')
console.log(buf.toString()) // 输出 'Hello, world!'

// 转为16进制字符串输出
console.log(buf.toString('hex')) // 输出 '48656c6c6f2c20776f726c6421'（对应的是 'Hello, world!' 的 ASCII 码）

// 转为数组输出
console.log(Array.from(buf)) // 输出 [
//    72, 101, 108, 108, 111,
//    44,  32, 119, 111, 114,
//   108, 100,  33
// ]

// 转为base64格式输出
console.log(buf.toString('base64')) // 输出 'SGVsbG8sIHdvcmxkIQ=='
