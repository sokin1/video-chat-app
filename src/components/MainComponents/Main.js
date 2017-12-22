import React from 'react'

import SignUpMain from './SignUpMain'
import SignUpPhase1 from './SignUpPhase1'
import PageNotFound from './PageNotFound'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.state.current === 'MAIN') {
            return <SignUpMain/>
        } else if(this.props.state.current === 'SIGN_UP_P1') {
            return <SignUpMain_Phase1 />
        } else if(this.props.state.current === 'SIGN_UP_PHASE2') {
            return <SignUpMain_Phase2 user={this.props.user}/>
        } else if(this.props.state.current === 'GROUP_SETTINGS') {
            return <GroupInfoMain user={this.props.user}/>
        } else if(this.props.state.current === 'SETTINGS') {
            return <SettingMain user={this.props.user}/>
        } else if(this.props.state.current === 'USER_SETTINGS') {
            return <UserInfoMain user={this.props.user}/>
        } else if(this.props.state.current === 'MAIN') {
            return <LoginMain user={this.props.user}/>
        } else {
            return <PageNotFound />
        }
    }
}