import express from 'express'
import mountMiddleware from './middleware/index.js'
import mountRouters from './routes/index.js'

const PORT = 3000 // 用于设置端口号
const app = express() // 创建一个express应用程序实例

app.use(express.static('public'))

mountMiddleware(app)
mountRouters(app)

// 启动 Express 应用程序，监听在指定的端口上
app.listen(PORT, () => {
  // 在控制台输出服务器运行信息
  console.log(`Server is running at http://localhost:${PORT}`)
})
