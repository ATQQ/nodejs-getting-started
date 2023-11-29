import https from 'https'

const url = new URL(
  'https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0'
)
// console.log(url)

// GET
// const req = https.request(
//   {
//     // 设置请求方法
//     method: 'GET',
//     // http 80 https 443
//     port: 443,
//     hostname: url.hostname,
//     path: url.pathname + url.search
//   },
//   (res) => {
//     let content = ''
//     res.on('data', (chunk) => {
//       content += chunk
//     })
//     res.on('end', () => {
//       console.log('statusCode', res.statusCode)
//       console.log(content)
//     })
//   }
// )
// req.end()

// POST
const req = https.request(
  {
    // 设置请求方法
    method: 'POST',
    // http 80 https 443
    port: 443,
    hostname: url.hostname,
    path: url.pathname + url.search,
    headers: {
      'Content-Type': 'application/json'
    }
  },
  (res) => {
    let content = ''
    res.on('data', (chunk) => {
      content += chunk
    })
    res.on('end', () => {
      console.log('statusCode', res.statusCode)
      console.log(content)
    })
  }
)
// req.write('请求实体')
req.write(JSON.stringify({ name: 'xm' }))
req.end()
