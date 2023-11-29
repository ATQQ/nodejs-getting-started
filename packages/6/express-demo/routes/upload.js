// 引入需要的模块
import express from 'express' // 引入 Express 框架
import multer from 'multer' // 引入 Multer 模块
import fs from 'fs'
// 引入 Node.js 文件系统模块
const router = express.Router()
// 指定文件存储位置和文件名
const storage = multer.diskStorage({
  destination(req, file, cb) {
    // 这里的 destination() 函数指定了文件存储的目录
    const dir = './uploads' // './uploads' 为指定文件存储的目录
    if (!fs.existsSync(dir)) {
      // 如果该目录不存在，则创建该目录
      fs.mkdirSync(dir, { recursive: true })
    }
    cb(null, './uploads') // 将文件存储到指定目录
  },
  filename(req, file, cb) {
    // 这里的 filename() 函数指定了文件命名规则
    const ext = file.originalname.split('.').pop() // 获取文件后缀名
    cb(null, `${Date.now()}-${file.fieldname}.${ext}`) // 将文件存储到指定位置，并以指定的文件名命名
  }
})
// 创建一个 multer 实例并配置相关选项
const upload = multer({
  storage, // 存储位置和文件名规则
  limits: {
    fileSize: 1024 * 1024 * 5 // 限制文件大小为 5 MB
  },
  fileFilter(req, file, cb) {
    // 这里的 fileFilter() 函数指定了文件类型过滤规则
    // 拒绝上传非图片类型的文件
    if (!file.mimetype.startsWith('image/')) {
      const err = new Error('Only image files are allowed!') // 错误的具体信息
      err.status = 400 // 设置错误状态码为 400
      return cb(err, false)
    }
    return cb(null, true)
  }
})
// 处理文件上传请求
router.post('/upload/image', upload.single('file'), (req, res) => {
  // 这里的 upload.single() 函数指定了只上传单个文件
  res.json({ message: '文件上传成功', data: req.file }) // 返回上传成功的信息和上传的文件信息
})
export default router // 导出路由模块
