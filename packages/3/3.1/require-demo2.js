// 导入模块 "./exports" 中的 hello, userInfo 和 byebye，并赋值给相应的变量
const { hello, userInfo, byebye } = require('./exports')
// 调用 hello 函数，并传入 userInfo.name 参数
hello(userInfo.name)
// 调用 byebye 函数，并传入 userInfo.name 参数
byebye(userInfo.name)
