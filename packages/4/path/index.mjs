import path from 'path'

console.log('=== path.join ===')
console.log(path.join('a', 'b', 'c'))
console.log(path.join(process.cwd(), '/hello', 'world'))

console.log('=== path.resolve ===')
console.log(path.resolve('a', 'b', 'c'))
console.log(path.resolve('/hello', 'world', './a', 'b'))

console.log('=== path.dirname ===')
console.log(path.dirname(process.cwd()))
console.log(path.dirname('/a/b/c'))

console.log('=== path.basename ===')
console.log(path.basename('a/b/c.js'))
console.log(path.basename('a/b/c.js', '.js'))
console.log(path.basename('a/b/c.js', 'js'))
console.log(path.basename('a/b/c.js', 's'))

console.log('=== path.extname ===')
console.log(path.extname('a/b/c.js'))
console.log(path.extname('a/b/c'))
console.log(path.extname('a/b/c.d.ts'))
console.log(path.extname('a/b/.npmrc'))

console.log('=== path.normalize ===')
console.log(path.normalize('a//b//c/d/e/..'))

console.log('=== path.parse ===')
console.log(path.parse('/home/user/dir/file.txt'))

console.log('=== path.sep ===')
console.log('foo/bar/baz'.split(path.sep))
const dir = 'users'
const file = 'index.html'
console.log(dir + path.sep + file)
