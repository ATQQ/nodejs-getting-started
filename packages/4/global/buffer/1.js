const buf = Buffer.alloc(10) // 创建一个大小为 10 的 Buffer 对象，默认会用 0 填充
const buf2 = Buffer.from('Hello, world!') // 创建一个包含字符串 'Hello, world!' 的 Buffer 对象
const buf3 = Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f]) // 内容为hello构成的16进制数组 Buffer 对象
