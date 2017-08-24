import React from 'react'

import LoginHeader from './LoginHeader'
import MainHeader from './MainHeader'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.user == null) {
            return(
                <LoginHeader/>
            )
        } else {
            return(
                <MainHeader user={this.props.user}/>
            )
        }
    }
}