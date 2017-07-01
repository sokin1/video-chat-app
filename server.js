import path from 'path'
import Express from 'express'
import React from 'react'
import ReactServerDOM from 'react-dom/server'

const app = new Express()

import App from './components/App'

app.set('views', path.join(__dirname, 'static'))
app.use(Express.static(path.join(__dirname, 'static')))

const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'production'

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + "/static/index.html"))
})

app.listen(port, function(err) {
    if(err) return console.error(err)

    console.info(`Server running on http://localhost:${port} [${env}]`)
})