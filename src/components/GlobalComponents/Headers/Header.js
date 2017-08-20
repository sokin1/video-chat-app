import React from 'react'

import LoginHeader from './LoginHeader'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    handle_login(login_info) {
        
    }

    render() {
        return(
            <LoginHeader submitHandler={this.handle_login.bind(this)}/>
        )
    }
}