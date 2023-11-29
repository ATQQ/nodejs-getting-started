import glob from 'fast-glob'
import { spawnSync } from 'child_process'

const mdFiles = glob.sync('./docs/**/*.md', {
  ignore: ['**/index.md', '**/README.md']
})

mdFiles.forEach((file) => {
  spawnSync('zhlint', [file, '--fix'])
})
