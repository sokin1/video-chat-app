import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

ReactDOM.render(
    <App user={JSON.parse(window.__initial_states__)}/>,
    document.getElementById('root')
)
