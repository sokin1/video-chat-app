import React from 'react'

export default class LoginHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form method="post" action="/main">
                <label id="username">Email:</label>
                <input type="text" id="username" name="username"/> 

                <label id="password">Password:</label>
                <input type="password" id="password" name="password"/>

                <input type="submit" value="Login"/>
            </form>
        )
    }
}