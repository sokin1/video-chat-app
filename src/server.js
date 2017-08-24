import path from 'path'
import Express from 'express'
import React from 'react'
import ReactServerDOM from 'react-dom/server'

import template from './template'

const app = new Express()

import App from './components/App'

app.set('views', path.join(__dirname, 'static'))
app.use(Express.static(path.join(__dirname, 'static')))

const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'production'

app.post('/signup/:userId', (req, res) => {
    // 1. Send Request to Authentication Server
    // 2. After being authenticated, ask user for additional user info
    // 3. Update User table, and finish sign up and link to main
    console.log(req)
})

app.get('/main/:userToken', (req, res) => {

})

app.get('/settings/*', (req, res) => {

})

// {
//     username: null,
//     last_login_time: null,
//     group: {
//         groupname: null
//     },
//     data: null,
//     where: null
// }
app.get('/', (req, res) => {
    const initialStates = null

    const html = ReactServerDOM.renderToString(<App user={initialStates} />)

    var rendered_page = template({
        body: html,
        title: 'Welcome to Video App',
        initialStates: initialStates
    })

    res.send(rendered_page)
})

app.listen(port, function(err) {
    if(err) return console.error(err)

    console.info(`Server running on http://localhost:${port} [${env}]`)
})