import fs from 'fs'

// 创建目录
fs.mkdirSync('test-dir/a/b/c/d', { recursive: true })
