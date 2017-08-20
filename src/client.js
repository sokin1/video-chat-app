import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

ReactDOM.render(
    <App initialStates={window.__initial_states__}/>,
    document.getElementById('root')
)
