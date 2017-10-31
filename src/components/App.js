import React from 'react'
import { render } from 'react-dom'

import Header from './GlobalComponents/Headers/Header'
import Footer from './GlobalComponents/Footer'
import Main from './MainComponents/Main'

import styles from '../../static/css/styles.css'

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firebase_config: this.props.initialState.firebase_config
        }
    }

    render() {
        console.log(this.state.user)
        return(
            <div>
                <Header user={this.state.user} firebase_config={this.state.firebase_config}/>
                <Main user={this.state.user} firebase_config={this.state.firebase_config}/>
                <Footer/>
            </div>
        )
    }
}