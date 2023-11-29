export default function mountMethodDemo(app) {
  app.get('/method/get', (req, res) => {
    res.send('GET request')
  })
  app.post('/method/post', (req, res) => {
    res.send('POST request')
  })
  app.put('/method/put', (req, res) => {
    res.send('PUT request')
  })
  app.delete('/method/delete', (req, res) => {
    res.send('DELETE request')
  })

  app.all('/method/all', (req, res) => {
    const { method } = req
    res.send(`${method} request`)
  })

  // 匹配任何路径中含有 world 的路径
  app.get(/world/, (req, res) => {
    res.send('hello hello')
  })

  // 匹配 acd 和 abcd
  app.get('/ab?cd', (req, res) => {
    res.send('ab?cd')
  })
  // 匹配 abcd、abbcd、abbbcd等
  app.get('/ab+cd', (req, res) => {
    res.send('ab+cd')
  })
  // 匹配 abcd、abxcd、abRABDOMcd、ab123cd等
  app.get('/ab*cd', (req, res) => {
    res.send('ab*cd')
  })
  // 匹配 /abe 和 /abcde
  app.get('/ab(cd)?e', (req, res) => {
    res.send('ab(cd)?e')
  })

  app
    .route('/route/any')
    .all((req, res, next) => {
      console.log('pre all', req.method, req.path)
      next()
    })
    .get((req, res) => {
      console.log('get request')
      res.send('get request')
    })
    .post((req, res) => {
      console.log('post request')
      res.send('post request')
    })
}
