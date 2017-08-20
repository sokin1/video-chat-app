import React from 'react'
import { render } from 'react-dom'

import Header from './GlobalComponents/Headers/Header'
import Footer from './GlobalComponents/Footer'
import Main from './MainComponents/Main'

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            server_info: this.props.initialStates.server_info,
            user: this.props.initialStates.cur_user
        }
    }

    render() {
        return(
            <div>
                <Header user={this.state.user}/>
                <Main user={this.state.user}/>
                <Footer/>
            </div>
        )
    }
}