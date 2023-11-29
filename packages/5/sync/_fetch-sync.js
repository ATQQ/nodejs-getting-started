// 如果当前文件是被子进程执行的
if (process.argv.length === 4) {
  // 从子进程的参数中获取请求参数
  const url = JSON.parse(process.argv[2])
  const options = JSON.parse(process.argv[3])

  fetch(url, options).then(async (response) => {
    // 将响应数据发送给父进程
    const result = {
      status: response.status,
      body: await response.json()
    }
    console.log(JSON.stringify(result))
  })
}
