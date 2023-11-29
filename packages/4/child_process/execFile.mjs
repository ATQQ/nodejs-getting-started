import { execFile, execFileSync } from 'child_process'

const file = './hello'
const execData = execFileSync(file)
console.log(execData.toString())

execFile(file, (error, stdout, stderr) => {
  if (error) {
    throw error
  }
  console.log(stdout)
  console.log(stderr)
})
