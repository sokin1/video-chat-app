import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout_StartPage from './components/Layout_StartPage'
import Layout_MainPage from './components/Layout_MainPage'
import Layout_SignupPage from './components/Layout_SignupPage'
import NotFoundPage from './components/Layout_NotFoundPage'

const routes = (
    <Route path="/" component={Layout_StartPage}>
        <Route path="signup" components={Layout_SignupPage} />
    </Route>
)

export default routes