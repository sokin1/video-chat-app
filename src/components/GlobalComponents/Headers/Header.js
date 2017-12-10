import React from 'react'

import LoginHeader from './LoginHeader'
import MainHeader from './MainHeader'
import EmptyHeader from './EmptyHeader'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.state.current === 'MAIN') {
            return(
                <LoginHeader />
            )
        } else if(this.props.state.current === 'SIGN_UP_P1') {
            return(
                <EmptyHeader />
            )
        } else {
            return(
                <MainHeader UserInfo={this.props.State.UserInfo} />
            )
        }
    }
}