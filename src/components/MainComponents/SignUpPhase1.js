import React from 'react'

export default class SignUpPhase1 extends React.Component {
    constructor(props) {
        super(props)

        console.log(props)
    }

    render() {
        return(
            <div>
                <h1>{this.props.Status}</h1>
                <h2>{this.props.Cause}</h2>
            </div>
        )
    }
}