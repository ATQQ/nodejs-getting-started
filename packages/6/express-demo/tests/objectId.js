// 引入mongoose库
import mongoose from 'mongoose'
// 获取ObjectId对象
const { ObjectId } = mongoose.Types
// 创建新的objectId实例
const objectId = new ObjectId()

// 打印objectId实例
console.log(objectId)
// 打印objectId实例的字符串格式
console.log(objectId.toString())
// 打印objectId实例的16进制字符串格式
console.log(objectId.toHexString())
// 打印objectId实例的日期时间戳
console.log(objectId.getTimestamp())
