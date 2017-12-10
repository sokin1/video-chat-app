import path from 'path'
import Express from 'express'
import Session from 'express-session'
import React from 'react'
import ReactServerDOM from 'react-dom/server'
import Crypto from './Crypto'
import Util from './Util'
const bodyParser = require('body-parser');

import net from 'net'
import md5 from 'md5'

import template from './template'

const express = new Express()

import App from './components/App'

express.set('views', path.join(__dirname, 'static'))
express.use(Express.static(path.join(__dirname, 'static')))
express.use(Session({secret: 'secret'}))
express.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'production'


// Information of cookie
//  1. latest page before leaving
//  2. usertoken
//  3. timestamp
express.get('/', (req, res) => {
    // Only triggered first time access to webpage.
    //  1. read cookie and send it to server to check validity
    //  2. if it is valid, update timestamp and load main page
    //  3. if it is not valid, show login page

    var cookies = Util.parse_cookies(req)
    console.log('cur_cookies', cookies)

    const curState = {
        current: 'MAIN'
    }

    const html = ReactServerDOM.renderToString(<App state={curState} />)

    const rendered_page = template({
        body: html,
        title: 'Welcome to the VideoApp',
        state: curState
    })
    res.writeHead(200, {
        'Set-Cookie': 'latest_page=MAIN;user_token=NULL;timestamp=NULL',
        'Content-Type': 'text/html'
    })
    res.end(rendered_page)
})

express.post('/', (req, res) => {
    // triggered everything else.
    //  1. read data from req and send it to server
    //  2. on success response, update cookie
    //  3. show relevant pages.
    console.log(req.body)
    if(req.body.cur_page ==='SIGN_UP_P1') {
        var client = new net.Socket()
        client.connect(1337, '127.0.0.1', () => {
            const jsonData = {
                action: 'SIGN_UP_P1',
                username: req.body.email,
                password: md5(Crypto.encoder(req.body.password))
            }

            client.write(JSON.stringify(jsonData))
        })
        
        client.on('data', data => {
            var result = JSON.parse(data)
            if(result.Result) {
                const curState = {
                    current: 'SIGN_UP_P1'
                }

                const html = ReactServerDOM.renderToString(<App state={curState} />)
                
                    const rendered_page = template({
                        body: html,
                        title: 'Welcome to the VideoApp',
                        state: curState
                    })
                    res.writeHead(200, {
                        'Set-Cookie': 'latest_page=MAIN;user_token=NULL;timestamp=NULL',
                        'Content-Type': 'text/html'
                    })
                    res.end(rendered_page)
            }
        })
    }
})

express.post('/signup/:userId', (req, res) => {
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

express.post('/main', (req, res) => {
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

express.get('/settings/*', (req, res) => {

})

var sess

express.get('/', (req, res) => {
    const initialStates = {}

    const html = ReactServerDOM.renderToString(<App state={initialStates} />)

    var rendered_page = template({
        body: html,
        title: 'Welcome to Video App',
        initialStates: initialStates
    })

    res.send(rendered_page)
})

express.listen(port, function(err) {
    if(err) return console.error(err)

    console.info(`Server running on http://localhost:${port} [${env}]`)
})