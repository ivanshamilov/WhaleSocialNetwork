import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

import Card from '../../../util/UIComponents/Card';
import Button from '../../../util/UIComponents/Button';
import Input from '../../../util/UIComponents/Input';
import LoadingSpinner from '../../../util/components/LoadingSpinner';

const Auth = props => {

    const [loginMode, setLoginMode] = useState(true);

    const loginModeHandler = event => {
        event.preventDefault();
        setLoginMode(prevState => prevState = !prevState);
        console.log(loginMode);
    }


    let element;

    if(loginMode) {
        element = (
            <div className="auth-control__login">
                    <h2 className="auth-control__login-header">Login</h2>
                    <div className="auth-control__login-form">
                        <Input 
                            class="auth-control__login-item"
                            id="email"
                            name="E-mail"
                            type="email"
                        />
                        <Input 
                            class="auth-control__login-item"
                            id="password"
                            name="Password"
                            type="password"
                            loginPassword
                        />
                        <div className="auth-control__login-actions">
                            <Button type="submit" size="small" inverse>Login</Button>
                            <div style={{ color: 'rgba(0, 0, 0, 0.2)', margin: '0 10px' }}>or</div>
                            <Button onClick={loginModeHandler} size='small'>Sign Up</Button>
                        </div>
                    </div>
            </div>
        )
    } else {
        element = (
            <div className="auth-control__login">
                <h2 className="auth-control__login-header">Sign Up</h2>
                    <div className="auth-control__login-form">
                        <Input 
                            class="auth-control__login-item"
                            id="fullName"
                            name="Full Name"
                            type="text"
                        />
                        <Input 
                            class="auth-control__login-item"
                            id="email"
                            name="E-mail"
                            type="email"
                        />
                        <Input 
                            class="auth-control__login-item"
                            id="dateOfBirth"
                            name="Date Of Birth"
                            type="date"
                        />
                        <Input 
                            class="auth-control__login-item"
                            id="location"
                            name="Location"
                            type="text"
                        />
                        <Input 
                            class="auth-control__login-item"
                            id="image"
                            name="Photo"
                            type="file"
                        />
                        <Input 
                            class="auth-control__login-item"
                            id="password"
                            name="Password"
                            password
                            type="password"
                        />
                        <div className="auth-control__login-actions">
                            <Button type="submit" size="small" inverse>Sign Up</Button>
                            <div style={{ color: 'rgba(0, 0, 0, 0.2)', margin: '0 10px'  }}>or</div>
                            <Button onClick={loginModeHandler} size='small'>Login</Button>
                        </div>
                        
                    </div>
                </div>
        )
    }
 


    return (   
        <div className="center">
            <form className="auth-control">
                <div className="auth-control__signup">
                </div>
                {element}
            </form>
        </div>
    )
};

export default Auth;
