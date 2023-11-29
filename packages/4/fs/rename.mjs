import fs from 'fs'

// 重命名
// fs.renameSync('test.txt', 'test2.txt')

// 移动
fs.renameSync('test2.txt', 'test-dir/test2.txt')
