import Sequelize from 'sequelize'

const sequelize = new Sequelize('node_test', 'root', '19981004', {
  host: 'localhost',
  dialect: 'mysql'
})

// 定义模型
const User = sequelize.define(
  'User',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    age: {
      type: Sequelize.INTEGER(3),
      allowNull: false
    }
  },
  {
    tableName: 'users', // 指定表格名称
    timestamps: false // 禁止 Sequelize 自动生成 createdAt 和 updatedAt 字段
  }
)

// 创建记录
async function createUser(name, age) {
  const user = await User.create({ name, age })
  return user.toJSON()
}

// 查询所有记录
async function findAllUsers() {
  const users = await User.findAll()
  return users.map((user) => user.toJSON())
}

// 根据 id 查询记录
async function findUserById(id) {
  const user = await User.findByPk(id)
  return user?.toJSON()
}

// 更新记录
async function updateUser(id, name, age) {
  const user = await User.findByPk(id)
  if (user) {
    user.name = name
    user.age = age
    await user.save()
    console.log(user.toJSON())
  } else {
    console.log('User not found')
  }
  return user
}

// 删除记录
async function deleteUser(id) {
  const user = await User.findByPk(id)
  if (user) {
    await user.destroy()
    console.log('User deleted')
  } else {
    console.log('User not found')
  }
  return user
}

export const UserDb = {
  User,
  createUser,
  findAllUsers,
  findUserById,
  updateUser,
  deleteUser
}
