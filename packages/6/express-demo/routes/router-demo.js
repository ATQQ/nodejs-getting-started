import express from 'express'
import path from 'path'

const router = express.Router()

router.get('/router/get', (req, res) => {
  res.send('GET router request')
})

router.post('/router/post', (req, res) => {
  res.send('POST router request')
})

router.get('/response/download', (req, res) => {
  // 指定文件路径
  // res.download('package.json')
  res.download(path.resolve('./package.json'))
})

export default router
