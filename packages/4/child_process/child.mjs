process.on('message', (msg) => {
  // 监听来自父进程的消息
  console.log(`Message from parent: ${msg}`)
  process.send('Hello from child!') // 向父进程发送消息
})
