import React from 'react'

import styles from './styles.css'

import LoginHeader from './LoginHeader'

export default class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.status
    }

    handle_login(login_info) {
        
    }

    render() {
        if(this.state.login_status === "NOT LOGGED IN") {
            return(
                <LoginHeader submitHandler={this.handle_login.bind(this)}/>
            )
        } else {
            return(
                <MainHeader status={this.state} />
            )
        }
    }
}