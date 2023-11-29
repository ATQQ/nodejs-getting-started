import headerRouter from './headers.js'
import responseRouter from './response.js'
import demoRouter from './router-demo.js'
import mountMethodDemo from './method.js'
import restfulRouter from './restful.js'
import uploadRouter from './upload.js'

const routers = [headerRouter, responseRouter, demoRouter, uploadRouter]

export default function mountRouters(app) {
  mountMethodDemo(app)

  // 注册所有router
  app.use(routers)

  app.use('/api', restfulRouter)

  // 将 demoRouter 路由注册到 /demo 路径下，路由会自动拼接上 /demo 前缀
  app.use('/demo', demoRouter)

  // 一些自定义路由
  app.get('/hello/:id', (req, res) => {
    const { params } = req
    console.log('params', params)
    res.json(params)
  })

  // 创建一个 GET /hello 路由
  app.get('/hello', (req, res) => {
    // 返回一个包含 "Hello World" 的 H1 标题的响应
    //   res.send('<h1>Hello World</h1>')
    res.send('<h1>Hello Express</h1>')
  })
}
