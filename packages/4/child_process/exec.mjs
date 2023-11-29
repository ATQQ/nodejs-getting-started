import { exec, execSync } from 'child_process'

const pwd = execSync('pwd')
console.log(pwd.toString())
const ls = execSync('ls -lh')
console.log(ls.toString())

const file = './../fs/index.mjs'
const execProcess = exec(`git log -1 --pretty="%ci" ${file}`)
execProcess.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`)
  console.log(new Date(data))
})
