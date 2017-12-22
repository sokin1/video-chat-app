import path from 'path'
import Express from 'express'
import Session from 'express-session'
import React from 'react'
import ReactServerDOM from 'react-dom/server'
import Crypto from './Crypto'

import net from 'net'
import md5 from 'md5'

import template from './template'

const express = new Express()

import App from './components/App'

express.set('views', path.join(__dirname, 'static'))
express.use(Express.static(path.join(__dirname, 'static')))
express.use(Session({secret: 'secret'}))

const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'production'

var firebase_config = {
    apiKey: "AIzaSyAp9WiJPvArikLgXJQmJg5Kn7OJ2hoDv60",
    authDomain: "userinfo-7f8f9.firebaseapp.com",
    databaseURL: "https://userinfo-7f8f9.firebaseio.com",
    projectId: "userinfo-7f8f9",
    storageBucket: "userinfo-7f8f9.appspot.com",
    messagingSenderId: "914637440469"
}

var auth_server = new net.Socket()
var db_server = new net.Socket()

express.post('/signup', (req, res) => {
    auth_server.connect(1337, '127.0.0.1', () => {
        console.log('Authentication connection is established')

        const json_data = {
            Action: 'SIGN_UP_P1',
            Username: "sokin1@hotmail.com",
            Password: "wornr123"
        }

        auth_server.write(JSON.stringify(json_data))
    })
    
    auth_server.on('data', data => {
        const auth_resp = JSON.parse(Crypto.decoder(data))

        var initialStates = {}
        if(auth_resp.Result) {
            initialStates = {
                Action: 'SIGN_UP_P1',
                Status: 'Email Verification Sent'
            }
        } else {
            initialStates = {
                Action: 'SIGN_UP_P1',
                Status: 'Sign Up Failed',
                Cause: auth_resp.Cause
            }
        }
    
        const html = ReactServerDOM.renderToString(<App initialState={initialStates} />)
    
        var rendered_page = template({
            body: html,
            title: 'New User Sign Up',
            initialStates: initialStates
        })
    
        res.send(rendered_page)
    })
})

express.get('/signup', (req, res) => {
    console.log(req.query.uid)
})

express.post('/main', (req, res) => {
    
})

express.get('/settings/*', (req, res) => {

})

var sess

express.get('/', (req, res) => {
    const initialStates = {}

    const html = ReactServerDOM.renderToString(<App initialState={initialStates} />)

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