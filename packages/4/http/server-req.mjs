import http from 'http'

const server = http.createServer((req, res) => {
  const { url, method } = req
  console.log(method, url)
  const query = Object.fromEntries(
    new URL(url, 'http://localhost').searchParams
  )
  console.log('query', query)
  let body = []
  req
    .on('data', (chunk) => {
      body.push(chunk)
    })
    .on('end', () => {
      body = Buffer.concat(body).toString()
      try {
        body = JSON.parse(body)
        console.log('body', body)
      } catch (error) {
        // console.log();
      }
    })

  console.log('headers', req.headers)

  res.statusCode = 200
  // res.setHeader('Content-Type', 'text/html')
  // res.end('<h1>Hello, World!</h1>')

  // 返回JSON数据
  // res.setHeader('Content-Type', 'application/json')
  // res.end(JSON.stringify({ name: 'xm', age: 18 }))

  res.end('<h1>Node.js</h1>')

  // res.write('<h1>')
  // res.write('Node.js')
  // res.write('o')
  // res.write('</h1>')
  // res.end()
})
server.listen(4275, () => {
  console.log('Server running at http://127.0.0.1:4275/')
})
