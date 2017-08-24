import React from 'react'
import { render } from 'react-dom'

import Header from './GlobalComponents/Headers/Header'
import Footer from './GlobalComponents/Footer'
import Main from './MainComponents/Main'

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: this.props.user
        }
    }

    render() {
        console.log(this.state.user)
        return(
            <div>
                <Header user={this.state.user}/>
                <Main user={this.state.user}/>
                <Footer/>
            </div>
        )
    }
}