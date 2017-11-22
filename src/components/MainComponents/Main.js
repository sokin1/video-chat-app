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
    }

    render() {
        if(this.props.current == null) {
            return <SignUpMain/>
        } else if(this.props.current === 'SIGN_UP_PHASE2') {
            return <SignUpMain_Phase2 user={this.props.user}/>
        } else if(this.props.current === 'GROUP_SETTINGS') {
            return <GroupInfoMain user={this.props.user}/>
        } else if(this.props.current === 'SETTINGS') {
            return <SettingMain user={this.props.user}/>
        } else if(this.props.current === 'USER_SETTINGS') {
            return <UserInfoMain user={this.props.user}/>
        } else if(this.props.current === 'MAIN') {
            return <LoginMain user={this.props.user}/>
        } else {
            return <PageNotFound />
        }
    }
}