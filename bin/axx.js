#!/usr/bin/env node

const program = require('commander');

program.version(require('../package').version, '-v, --version') // 1.1.1
  .usage('<command> [options] \n  淘宝镜像：--registry=https://registry.npm.taobao.org')
  .command('init', '创建新项目')
  .command('run', '启动项目')
  .command('clean', '清理项目')
  .command('pub', '构建项目')
  .command('lint', '代码风格校验');

program.parse(process.argv);
// program.parse 接收 process.argv 的参数，处理除第一二个固定参数后的其他参数
// process.argv 返回命令启动时的命令行参数，第一个元素是 process.execPath，第二个元素是当前执行的 js 文件的路径，剩余的都是额外的命令行参数
// process.execPath 返回启动进程的可执行文件的绝对路径 '/usr/local/bin/node'
