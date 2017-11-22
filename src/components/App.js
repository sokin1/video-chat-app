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
            state: this.props.state
        }
    }

    render() {
        return(
            <div>
                <Header state={this.state.user}/>
                <Main state={this.state.user}/>
                <Footer/>
            </div>
        )
    }
}