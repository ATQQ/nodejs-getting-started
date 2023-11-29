// 引入mongoose库
import mongoose, { ObjectId } from 'mongoose'
// 连接MongoDB数据库，本地地址为mongodb://localhost:27017/node_test
mongoose.connect('mongodb://localhost:27017/node_test')
// 获取Schema对象
const { Schema } = mongoose

// 定义userSchema，包含id、name和age字段
const userSchema = new Schema({
  id: Number,
  name: String,
  age: Number
})
// 根据userSchema创建用户模型，集合名为users
const User = mongoose.model('User', userSchema, 'users')

// 创建记录
function createUser(id, name, age) {
  const newUser = new User({
    id,
    name,
    age
  })
  // 保存记录并返回Promise实例
  return newUser.save()
}

// 查询所有记录
function findAllUsers() {
  // 查找所有用户记录，并返回Promise实例
  return User.find({})
}
// 根据id查询记录
function findUserById(id) {
  // 根据id查找用户记录，并返回Promise实例
  return User.findOne({ id })
}

// 更新记录
function updateUser(id, name, age) {
  // 根据id更新用户记录，并返回Promise实例
  return User.updateOne({ id }, { name, age })
}

// 删除记录
function deleteUser(id) {
  // 根据id删除用户记录，并返回Promise实例
  return User.deleteOne({ id })
}

// 导出定义的库对象，包括User模型和各种操作方法
export const UserDb = {
  User,
  createUser,
  findAllUsers,
  findUserById,
  updateUser,
  deleteUser
}
