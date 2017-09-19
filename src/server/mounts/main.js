import React from 'react'
import Views from '../../views'
import compile from './utils/compile'
import environment from 'frontful-environment'
import express from 'express'
import path from 'path'
import {Exceptions} from 'frontful-resolver'

const app = express()

app.use(express.static(path.resolve(process.cwd(), 'assets/root'), {maxAge: '7d'}))

app.use((req, res, next) => {
  compile(<Views/>, {req, res}).then((context) => {
    const bundle = environment.bundle
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>Frontful Scaffold</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="icon" sizes="192x192" href="/icon-192x192.png" />
          ${context.style}
        </head>
        <body>
          <div id="app">${context.view}</div>
          ${context.state}
          <script src="${bundle.js.vendor}"></script>
          <script src="${bundle.js.main}"></script>
        </body>
      </html>
    `)
  }).catch((error) => {
    if (error instanceof Exceptions.Cancel)
      next()
    else
      next(error)
  })
})

export default app
