import React from 'react'

export default class MainHeader extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: this.props.user
        }
    }

    render() {
        return(
            <h1>Main Header</h1>
        )
    }
}