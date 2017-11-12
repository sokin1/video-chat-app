import React from 'react'

import SignUpMain from './SignUpMain'
import SignUpPhase1 from './SignUpPhase1'
import PageNotFound from './PageNotFound'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.State.Action == null) {
            return <SignUpMain />
        } else if(this.props.State.Action === 'SIGN_UP_P1') {
            return <SignUpPhase1 Status={this.props.State.Status} Cause={this.props.State.Cause} />
        } else {
            return <PageNotFound />
        }
    }
}