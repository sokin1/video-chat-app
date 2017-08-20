import React from 'react'

import SignUpMain from './SignUpMain'
import GroupInfoMain from './GroupInfoMain'
import SettingMain from './SettingMain'
import UserInfoMain from './UserInfoMain'
import LoginMain from './LoginMain'
import PageNotFound from './PageNotFound'

export default class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: this.props.user
        }
    }

    render() {
        if(this.state.user.where === null) {
            <SignUpMain/>
        } else if(this.state.user.where === 'GROUP_SETTINGS') {
            <GroupInfoMain user={this.state.user}/>
        } else if(this.state.user.where === 'SETTINGS') {
            <SettingMain user={this.state.user}/>
        } else if(this.state.user.where === 'USER_SETTINGS') {
            <UserInfoMain user={this.state.user}/>
        } else if(this.state.user.where === 'MAIN') {
            <LoginMain user={this.state.user}/>
        } else {
            <PageNotFound />
        }
    }
}