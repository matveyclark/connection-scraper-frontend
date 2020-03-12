import React from 'react'
import { Link } from 'react-router-dom'
import loginBtn from '../images/loginButton.png'

export default function Login({ login }) {
    return (
        <React.Fragment>
            <Link onClick={login} className="login-link"><img className="login-btn" src={loginBtn} alt="LinkedIn login button"/></Link>
        </React.Fragment>
    )
}
