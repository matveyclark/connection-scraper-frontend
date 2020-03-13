import React from 'react'
import { Link } from 'react-router-dom'
import loginBtn from '../images/loginButton.png'

export default function Auth({ login, logout }) {
    return (
        <div className="auth-buttons">
            <Link onClick={login} className="login-link"><img className="login-btn" src={loginBtn} alt="LinkedIn login button"/></Link>
            <Link onClick={logout}>Logout</Link>
        </div>
    )
}
