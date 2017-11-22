import React from 'react'

export default class SignUpMain_Phase2 extends React.Component {
    render() {
        return(
            // TO ADD:
            //  1. Avatar image
            //  2. Profile message
            <form method='post' action='/main'>
                <label id="nickname">NickName:</label>
                <input type="text" id="nickname" name="nickname"/> 

                <label id="phonenumber">Phone Number:</label>
                <input type="text" id="phonenumber" name="phonenumber"/>

                <label id="companyname">Company:</label>
                <input type="text" id="companyname" name="companyname"/>

                <input type="submit" value="Proceed"/>
            </form>
        )
    }
}