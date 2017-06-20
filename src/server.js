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
    const html = ReactServerDOM.renderToString(<App />)

    res.send(html)
    res.end()
})

app.listen(port, err => {
    if(err) return console.error(err)

    console.info(`Server running on http://localhost:${port} [${env}]`)
})