import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'

function SwitchRouters() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/About" component={About}></Route>
        </Switch>
    )
}

export default SwitchRouters
