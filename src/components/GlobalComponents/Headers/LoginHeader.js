import React from 'react'

export default class LoginHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    submit_log_in(e) {
        this.props.handle_login()
    }

    render() {
        return (
            <form id="loginForm" onSubmit={this.submit_log_in.bind(this)}>
                <label id="username">Email:</label>
                <input type="text" id="username" name="username"/> 

                <label id="password">Password:</label>
                <input type="password" id="password" name="password"/>

                <input type="submit" value="Login"/>
            </form>
        )
    }
}