// 导入模块 "./exports" 并将其赋值给变量 context
const context = require('./exports')

// 调用 context 模块中的 hello 函数，并传入 context.userInfo.name 参数
context.hello(context.userInfo.name)

// 调用 context 模块中的 byebye 函数，并传入 context.userInfo.name 参数
context.byebye(context.userInfo.name)
