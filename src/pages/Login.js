import React, { useRef } from 'react'
import loginImage from '../images/login.jpg'
import logo from '../images/logo.svg'
import './login.css'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { sendData } from '../Redux/action'

const Login = (props) => {
  const inputEmailRef = useRef()
  const inputPasswordRef = useRef()

  const dispatch = useDispatch()

  const onclickHandler = () => {
    const email = inputEmailRef.current.value
    const password = inputPasswordRef.current.value
    dispatch(sendData('/accounts:signInWithPassword?key=AIzaSyBkuBvnNQ-JSPu648eghCwXrQ2c9oQhP6w', { email, password, returnSecureToken: true }))
    
  }
  return (
    <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
      <div className="container">
        <div className="card login-card">
          <div className="row no-gutters">
            <div className="col-md-5">
              <img src={loginImage} alt="login" className="login-card-img" />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <div className="brand-wrapper">
                  <img src={logo} alt="logo" className="logo" />
                </div>
                <p className="login-card-description">Sign into your account</p>
                <form action="#!">
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email" name="email" id="email" ref={inputEmailRef} className="form-control" placeholder="Email address" />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input type="password" name="password" id="password" ref={inputPasswordRef} className="form-control" placeholder="***********" />
                  </div>
                  <input name="login" id="login" className="btn btn-block login-btn mb-4" type="button" value="Login" onClick={onclickHandler} />
                </form>
                <a href="#!" className="forgot-password-link">Forgot password?</a>
                <p className="login-card-footer-text">Don't have an account? <NavLink to='/registration' className="text-reset">Register here</NavLink></p>
                <nav className="login-card-footer-nav">
                  <a href="#!">Terms of use.</a>
                  <a href="#!">Privacy policy</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )

}

export default Login