import React from 'react'
import { render } from 'react-dom'

import Header from './GlobalComponents/Header'
import Footer from './GlobalComponents/Footer'
import Main from './MainPageComponents/Main'

import styles from './styles.css'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.status
    }

    render() {
        return(
            <div>
                <Header status={this.state}/>
                <Main status={this.state}/>
                <Footer />
            </div>
        )
    }
}