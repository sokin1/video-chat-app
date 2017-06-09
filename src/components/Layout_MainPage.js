import React from 'react'
import { Link } from 'react-router'

import Header from './GlobalComponents/Header'
import Footer from './GlobalComponents/Footer'
import Main from './MainPageComponents/Main'

export default class Layout_MainPage extends React.Component {
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