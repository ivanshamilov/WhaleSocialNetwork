import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

import Card from '../../../util/UIComponents/Card';
import Button from '../../../util/UIComponents/Button';

const Auth = props => {
    return (
        <div className="center">
            <form className="auth-control">
                <div className="auth-control__signup">

                </div>
                <div className="auth-control__login">
                    <div className="auth-control__login-form">
                        <label htmlFor="email" name="email">Email</label>
                        <input type="email" id="email"/>
                        <label htmlFor="password" name="Password">Password</label>
                        <div className="input-control">
                            <input type="password" id="password"/>
                            <Link to="/">Forgot Password?</Link>
                        </div>
                        <div className="auth-control__login-actions">
                            <Button size="small">Login</Button>
                            <div style={{ color: 'rgba(0, 0, 0, 0.2)' }}>or</div>
                            <Button size='small' inverse>Sign Up</Button>
                         </div>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Auth;