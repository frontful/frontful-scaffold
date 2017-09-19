import bodyParser from 'body-parser'
import express from 'express'

const app = express()

app.use(bodyParser.json())

app.get('/sample', (req, res) => {
  res.json({
    sample: 'Sample'
  })
})

export default app
