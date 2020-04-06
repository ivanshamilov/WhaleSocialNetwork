import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

import Card from '../../../util/UIComponents/Card';
import Button from '../../../util/UIComponents/Button';
import LoadingSpinner from '../../../util/components/LoadingSpinner';

const Auth = props => {

    const [loginMode, setLoginMode] = useState(false);

    const loginModeHandler = event => {
        setLoginMode(prevState => prevState = !prevState);
    }

    return (
        <div className="center">
            <form className="auth-control">
                <div className="auth-control__signup">
                </div>
                {
                    !loginMode && 
                    <div className="auth-control__login">
                    <h2 className="auth-control__login-header">Sign Up</h2>
                    <div className="auth-control__login-form">
                        <label htmlFor="fullName" name="fullName">Full Name</label>
                        <input type="fullName" id="fullName"/>
                        <label htmlFor="email" name="email">Email</label>
                        <input type="email" id="email"/>
                        <label htmlFor="dateOfBirth" name="dateOfBirth">Date Of Birth</label>
                        <input type="text" id="dateOfBirth"/>
                        <label htmlFor="location" name="location">Location</label>
                        <input type="text" id="location"/>
                        <label htmlFor="image" name="image">Photo</label>
                        <input type="file" id="image"/>
                        <label htmlFor="password" name="Password">Password</label>
                        <div className="input-control">
                            <input type="password" id="password"/>
                        </div>
                        <div className="auth-control__login-actions">
                            <Button type="submit" size="small" inverse>Sign Up</Button>
                            <div style={{ color: 'rgba(0, 0, 0, 0.2)' }}>or</div>
                            <Button onClick={loginModeHandler} size='small'>Login</Button>
                         </div>
                    </div>
                </div>
                }
                {
                loginMode && 
                <div className="auth-control__login">
                    <h2 className="auth-control__login-header">Login</h2>
                    <div className="auth-control__login-form">
                        <label htmlFor="email" name="email">Email</label>
                        <input type="email" id="email"/>
                        <label htmlFor="password" name="Password">Password</label>
                        <div className="input-control">
                            <input type="password" id="password"/>
                            <Link to="/">Forgot Password?</Link>
                        </div>
                        <div className="auth-control__login-actions">
                            <Button type="submit" size="small" inverse>Login</Button>
                            <div style={{ color: 'rgba(0, 0, 0, 0.2)' }}>or</div>
                            <Button onClick={loginModeHandler} size='small'>Sign Up</Button>
                        </div>
                    </div>
                 </div>
                } 
            </form>
        </div>
    )
};

export default Auth;