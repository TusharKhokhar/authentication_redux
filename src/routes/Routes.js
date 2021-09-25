import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Registration from '../pages/Registration'

const Routes = (props) => {
    const token = useSelector(state => state.token)
    const isLogin = !!token
    return (
        <Switch>
            <Route path='/' exact >
                <Redirect to='/home' />
            </Route>
            <Route path='/home'>
                <Home />
            </Route>
            {!isLogin && <Route path='/login'>
                <Login />
            </Route>}
            {!isLogin && <Route path='/registration'>
                <Registration />
            </Route>}
            <Route path='*' >
                <Redirect to='/home' />
            </Route>
        </Switch>
    )

}

export default Routes