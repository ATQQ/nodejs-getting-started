import { UserDb } from '../db/mysql.js'

// 测试
async function test() {
  // 添加3个用户信息
  console.log('create', await UserDb.createUser('Alice', 25))
  console.log('create', await UserDb.createUser('Tom', 20))
  console.log('create', await UserDb.createUser('Lisa', 22))

  // 查询所有的用户信息
  console.log('findAll', await UserDb.findAllUsers())

  // 查询id为1的用户信息
  console.log('findById', await UserDb.findUserById(1))

  // 更新id为1的用户信息
  await UserDb.updateUser(1, 'Alice Smith', 28)
  // 删除id为2的用户信息
  await UserDb.deleteUser(2)

  // 查询所有的用户信息
  console.log('findAll', await UserDb.findAllUsers())
}

test()
