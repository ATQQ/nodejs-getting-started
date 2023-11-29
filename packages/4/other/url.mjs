import url from 'url'

const testUrl = 'https://www.baidu.com?search=juejin'
// console.log(url.parse(testUrl))

console.log('url.URL === URL', url.URL === URL)

console.log(new URL(testUrl))
