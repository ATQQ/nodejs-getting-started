import ChildProcess from 'child_process'

const { spawn, spawnSync } = ChildProcess

// const pwd = spawnSync('pwd')
// console.log(pwd.stdout.toString())
// const ls = spawnSync('ls', ['-lh'])
// console.log(ls.stdout.toString())

// const file = './../fs/index.mjs'
// const spawnProcess = spawn('git', ['log', '-1', '--pretty="%ci"', file])
// spawnProcess.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`)
//   console.log(new Date(data))
// })

spawnSync('pwd', {
  stdio: 'inherit'
})

spawn('ls', {
  stdio: 'inherit'
})
