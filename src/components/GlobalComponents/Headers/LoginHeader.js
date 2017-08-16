import React from 'react'

export default class LoginHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    submit_login(e) {
        this.props.handle_login()
    }

    render() {
        return (
            <div>
                <form id="loginForm" onSubmit={this.submit_log_in.bind(this)}>
                    <div>
                        <label for="username">Email:</label>
                        <input type="text" id="username" name="username"/> 

                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password"/>

                        <input type="submit" value="Login" onClick={handleLogin}/>
                    </div>
                </form>
            </div>
        )
    }
}