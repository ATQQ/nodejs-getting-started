// const { readFile } = require('fs')

// console.log(1)
// readFile(__filename, () => {
//   console.log(3)
// })
// console.log(2)
const { spawnSync } = require('child_process')

function fetchSync(url, options = {}) {
  // 将请求参数和 URL 传递给子进程
  const child = spawnSync(process.argv[0], [
    './_fetch-sync.js',
    JSON.stringify(url),
    JSON.stringify(options)
  ])

  // 子进程的标准输出即为请求结果
  const result = child.stdout.toString()
  const responseData = JSON.parse(result)
  return responseData.body
}

console.log(1)
console.log(
  fetchSync(
    'https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0'
  )
)
console.log(2)
