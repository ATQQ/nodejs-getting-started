import express from 'express'

const router = express.Router()

const userList = [
  {
    id: 1,
    name: '张三'
  },
  {
    id: 2,
    name: '李四'
  },
  {
    id: 3,
    name: '王五'
  }
]

router.get('/users', (req, res) => {
  res.json(userList)
})

router.get('/users/:id', (req, res) => {
  // 根据用户 id 查找用户信息
  const user = userList.find((item) => item.id === Number(req.params.id))
  res.json(user)
})

router.post('/users', (req, res) => {
  // 创建新用户
  const user = {
    id: userList.length + 1,
    name: req.body.name // 从请求体中获取用户名
  }
  userList.push(user)
  res.json(user)
})

router.put('/users/:id', (req, res) => {
  // 根据用户 id 查找用户信息
  const user = userList.find((item) => item.id === Number(req.params.id))
  // 更新用户名称
  user.name = req.body.name // 从请求体中获取新的用户名
  res.json(user)
})

router.delete('/users/:id', (req, res) => {
  // 查找要删除的用户在列表中的索引位置
  const index = userList.findIndex((item) => item.id === Number(req.params.id))
  // 获取要删除的用户信息
  const delUser = userList[index]
  // 从列表中删除该用户
  userList.splice(index, 1)
  res.json({
    message: '删除成功',
    data: delUser
  })
})

export default router
