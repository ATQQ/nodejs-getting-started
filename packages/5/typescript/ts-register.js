const ts = require('typescript') // 导入 TypeScript 编译器
const fs = require('fs') // 导入文件系统模块

// 自定义 .ts 文件的加载器
require.extensions['.ts'] = function (module, filename) {
  const content = fs.readFileSync(filename, 'utf8') // 读取文件内容
  const compiled = ts.transpileModule(content, {
    // 编译 TypeScript 代码
    compilerOptions: { module: ts.ModuleKind.CommonJS }
  })
  module._compile(compiled.outputText, filename) // 执行编译后的代码
}
