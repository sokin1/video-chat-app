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
            current: this.props.state.current
        }
    }

    render() {
        return(
            <div>
                <Header state={this.state}/>
                <Main state={this.state}/>
                <Footer/>
            </div>
        )
    }
}