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
        if(this.props.user.where === null) {
            return <SignUpMain/>
        } else if(this.props.user.where === 'GROUP_SETTINGS') {
            return <GroupInfoMain user={this.props.user}/>
        } else if(this.props.user.where === 'SETTINGS') {
            return <SettingMain user={this.props.user}/>
        } else if(this.props.user.where === 'USER_SETTINGS') {
            return <UserInfoMain user={this.props.user}/>
        } else if(this.props.user.where === 'MAIN') {
            return <LoginMain user={this.props.user}/>
        } else {
            return <PageNotFound />
        }
    }
}