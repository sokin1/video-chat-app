import React from 'react'
import { Link } from 'react-router'

import Header from './GlobalComponents/Header'
import Footer from './GlobalComponents/Footer'
import Main from './SignupPageComponents/Main'

export default class Layout_SignupPage extends React.Component {
    render() {
        return (
            <div className="app-container">
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}