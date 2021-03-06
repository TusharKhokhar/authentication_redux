import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { userLogout } from '../Redux/action'
import './MainHeader.css'
const MainHeader = (props) => {

    const token = useSelector(state => state.token)
    const dispatch=useDispatch()
    
    let isLogin = !!token

    const logoutHandler = () => {
        localStorage.removeItem('token')
        dispatch(userLogout())
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink activeClassName="navbar-brand" to='/'>Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink activeClassName='active' className="nav-link " aria-current="page" to='/home'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                {!isLogin ? <NavLink activeClassName='active' className="nav-link" to='/login'>Login</NavLink>
                                    : <NavLink className="nav-link" to='/login' onClick={logoutHandler}>logout</NavLink>}
                            </li>
                            {!isLogin && <li className="nav-item">
                                <NavLink activeClassName='active' className="nav-link" to='/registration'>Registration</NavLink>
                            </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )

}

export default MainHeader