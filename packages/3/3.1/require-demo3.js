// 导入模块 "./exports" 中的 hello, userInfo 和 byebye，并赋值给相应的变量
const { hello, userInfo: user, byebye } = require('./exports')
// 调用 hello 函数，并传入 userInfo.name 参数
hello(user.name)
// 调用 byebye 函数，并传入 userInfo.name 参数
byebye(user.name)
