import React from 'react'

export default class SignUpMain extends React.Component {
    render() {
        return(
            <form method='post' action='/signup'>
                <label id="email">Email:</label>
                <input type="text" id="email" name="email"/> 

                <label id="password">Password:</label>
                <input type="password" id="password" name="password"/>

                <label id="confirm_password">Confirm Password:</label>
                <input type="confirm_password" id="confirm_password" name="confirm_password"/>

                <input type="submit" value="Sign Up"/>
            </form>
        )
    }
}