import React from 'react'
import { Link } from 'react-router-dom'
import loginBtn from '../images/loginButton.png'

export default function Login() {
    return (
        <React.Fragment>
            <Link className="login-link"><img className="login-btn" src={loginBtn} alt="LinkedIn login button"/></Link>
        </React.Fragment>
    )
}
