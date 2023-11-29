import fs from 'fs'

// fs.unlinkSync('test-dir/test2.txt')
// fs.rmSync('test-dir/test2.txt')

fs.rmSync('test-dir', { recursive: true })
