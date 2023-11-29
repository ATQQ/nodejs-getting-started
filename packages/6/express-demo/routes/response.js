import express from 'express'

const router = express.Router()

router.get('/response/json', (req, res) => {
  res.json({
    name: 'express',
    type: 'framework'
  })
})

router.get('/response/send', (req, res) => {
  // html
  //   res.send('<h1>hello express</h1>')

  // json
  res.send({
    name: 'express',
    type: 'framework'
  })

  // string
  // res.send('hello express')

  // Buffer
  // res.send(Buffer.from('hello express'))
})

// router.get('/response/download', (req, res) => {
//   res.download('./package.json')
// })

export default router
