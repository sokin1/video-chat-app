import React from 'react'
import { render } from 'react-dom'

import Header from './GlobalComponents/Header'
import Footer from './GlobalComponents/Footer'

export default class App extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Footer />
                {this.props.children}
            </div>
        )
    }
}