// fetch 发起post请求
fetch('http://127.0.0.1:4275?hello=world', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'xm',
    age: 18
  })
})
