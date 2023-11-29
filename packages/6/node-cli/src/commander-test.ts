#!/usr/bin/env node

// 引入Command类和package.json文件
import { Command } from 'commander'
import pkg from '../package.json'
// 创建程序实例并设置版本号
const program = new Command()
program.version(pkg.version)
// 添加命令hello和描述，别名为h，支持选项--exclude和--allow-dirty
program
  .command('hello [name]')
  .description('打招呼')
  .alias('h')
  .option('-e, --exclude <globPatterns...>', '排除某些文件进行扫描')
  .option(
    '--allow-dirty',
    '默认屏蔽以下目录（node_modules，.git等），可以设置允许'
  )
  .action((name, options) => {
    console.log('你好', name, options.exclude, options.allowDirty)
  })
// 解析命令行参数
program.parse(process.argv)
