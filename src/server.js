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

app.post('/signup/[null|pre_authorized_id]', (req, res) => {
    // 1. Send Request to Authentication Server
    // 2. After being authenticated, ask user for additional user info
    // 3. Update User table, and finish sign up and link to main
})

app.get('/main', (req, res) => {

})

app.get('/settings/[user|group|general]', (req, res) => {

})

app.get('/', (req, res) => {
    const initialStates = {
        server_info: {
            authentication_server: '127.0.0.1',
            authentication_port: '8080',
            user_db_server: '127.0.0.1',
            user_db_port: '8081',
            data_db_server: '127.0.0.1',
            data_db_port: '8082',
        },
        cur_user: {
            username: null,
            last_login_time: null,
            group: {
                groupname: null
            },
            data: null,
            where: null
        }
    }

    const html = ReactServerDOM.renderToString(<App initialStates={initialStates} />)

    res.send(template({
        body: html,
        title: 'Welcome to Video App',
        initialStates: initialStates
    }))
})

app.listen(port, function(err) {
    if(err) return console.error(err)

    console.info(`Server running on http://localhost:${port} [${env}]`)
})