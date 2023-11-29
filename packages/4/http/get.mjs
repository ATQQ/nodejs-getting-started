// import http from 'http'
import https from 'https'

// https.get(
//   'https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0',
//   (res) => {
//     // 响应内容拼接
//     let content = ''
//     res.on('data', (chunk) => {
//       content += chunk
//     })

//     // 读完对外暴露内容和状态码
//     res.on('end', () => {
//       console.log(content)
//     })

//     res.on('error', (err) => {
//       console.log(err)
//     })
//   }
// )

const req = https.get(
  'https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0',
  {
    headers: {
      'Content-Type': 'application/json'
    }
  }
)

req.on('response', (res) => {
  // 响应内容拼接
  let content = ''
  res.on('data', (chunk) => {
    content += chunk
  })

  // 读完对外暴露内容和状态码
  res.on('end', () => {
    console.log(content)
  })

  res.on('error', (err) => {
    console.log(err)
  })
})
