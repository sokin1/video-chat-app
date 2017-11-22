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


// Information of cookie
//  1. latest page before leaving
//  2. usertoken
//  3. timestamp
app.get('/', (req, res) => {
    // Only triggered first time access to webpage.
    //  1. read cookie and send it to server to check validity
    //  2. if it is valid, update timestamp and load main page
    //  3. if it is not valid, show login page
})

app.post('/', (req, res) => {
    // triggered everything else.
    //  1. read data from req and send it to server
    //  2. on success response, update cookie
    //  3. show relevant pages.
})

app.post('/signup/:userId', (req, res) => {
    // 1. Send Request to Authentication Server
    // 2. After being authenticated, ask user for additional user info
    // 3. Update User table, and finish sign up and link to main

    var userToken = req.qeury['userId']

    const initialStates = {
        current: 'SIGN_UP_PHASE2',
        token: userToken
    }
    
        const html = ReactServerDOM.renderToString(<App state={initialStates} />)
    
        var rendered_page = template({
            body: html,
            title: 'Additional Information',
            initialStates: initialStates
        })
    
        res.send(rendered_page)
})

app.post('/main', (req, res) => {
    // send request to auth_server to update user info
    // on success respone, it loads main page
    // On response, userinfo is included

    const initialStates = {
        current: 'MAIN',
        user: res.param.user
    }

    const html = ReactServerDOM.renderToString(<App state={initialStates} />)

    const rendered_page = template({
        body: html,
        title: 'Video App Main',
        initialStates: initialStates
    })
    res.send(rendered_page)
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

    const html = ReactServerDOM.renderToString(<App state={initialStates} />)

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