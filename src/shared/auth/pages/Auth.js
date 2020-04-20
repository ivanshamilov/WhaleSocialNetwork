import React, { useState, useReducer, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../../util/hook/form-hook';

import './Auth.css';

import Card from '../../../util/UIComponents/Card';
import Button from '../../../util/UIComponents/Button';
import Input from '../../../util/UIComponents/Input';
import LoadingSpinner from '../../../util/components/LoadingSpinner';


import  { VALIDATOR_REQUIRE, VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../../util/validators';




const Auth = props => {
    

    const [formState, inputHandler, setFormData] = useForm(
        {
          email: {
            value: '',
            isValid: false
          },
          password: {
            value: '',
            isValid: false
          }
        },
        false
      );


    const [loginMode, setLoginMode] = useState(true);
    


    // inputs: validity of each input 
    // isValid: stores infomration about the validity of the whole form



    const switchModeHandler = (event) => {
        console.log(formState.isValid)
        event.preventDefault();
        if (!loginMode) {
          setFormData(
            {
              ...formState.inputs,
              fullName: undefined,
              dateOfBirth: undefined,
              location: undefined
            },
            formState.inputs.email.isValid && formState.inputs.password.isValid
          );
        } else {
          setFormData(
            {
              ...formState.inputs,
              fullName: {
                value: '',
                isValid: false
              },
              dateOfBirth: {
                value: '',
                isValid: false
              },
              location: {
                value: '',
                isValid: false
              },
            },
            false
          );
        }
        setLoginMode(prevMode => !prevMode);
      };






    let element = (
        <React.Fragment>
        <Input 
            class="auth-control__login-item"
            id="fullName"
            validators={[VALIDATOR_REQUIRE()]}
            name="Full Name"
            type="text"
            onInput={inputHandler}
            
        />
        <Input 
            class="auth-control__login-item"
            id="dateOfBirth"
            validators={[VALIDATOR_REQUIRE()]}
            name="Date Of Birth"
            type="date"
            onInput={inputHandler}
        />
        <Input 
            class="auth-control__login-item"
            validators={[VALIDATOR_REQUIRE()]}
            id="location"
            name="Location"
            type="text"
            onInput={inputHandler}
        />
    </React.Fragment>
    );

    // if(loginMode) {
    //     element = (
    //                 <React.Fragment>
    //                     <Input 
    //                         class="auth-control__login-item"
    //                         id="email"
    //                         validators={[VALIDATOR_EMAIL()]}
    //                         name="E-mail"
    //                         type="email"
    //                         onInput={inputHandler}
    //                     />
    //                     <Input 
    //                         class="auth-control__login-item"
    //                         id="password"
    //                         name="Password"
    //                         validators={[VALIDATOR_MINLENGTH(5)]}
    //                         type="password"
    //                         onInput={inputHandler}
    //                         loginPassword
    //                     />
    //                 </React.Fragment>
    //     )
    // } else {
    //     element = (
                    // <React.Fragment>
                    //     <Input 
                    //         class="auth-control__login-item"
                    //         id="email"
                    //         validators={[VALIDATOR_EMAIL()]}
                    //         name="E-mail"
                    //         type="email"
                    //         onInput={inputHandler}
                    //     />
                    //     <Input 
                    //         class="auth-control__login-item"
                    //         id="password"
                    //         name="Password"
                    //         validators={[VALIDATOR_MINLENGTH(5)]}
                    //         password
                    //         type="password"
                    //         onInput={inputHandler}
                    //     />
                    //     <Input 
                    //         class="auth-control__login-item"
                    //         id="fullName"
                    //         validators={[VALIDATOR_REQUIRE()]}
                    //         name="Full Name"
                    //         type="text"
                    //         onInput={inputHandler}
                    //     />
                    //     <Input 
                    //         class="auth-control__login-item"
                    //         id="dateOfBirth"
                    //         validators={[VALIDATOR_REQUIRE()]}
                    //         name="Date Of Birth"
                    //         type="date"
                    //         onInput={inputHandler}
                    //     />
                    //     <Input 
                    //         class="auth-control__login-item"
                    //         validators={[VALIDATOR_REQUIRE()]}
                    //         id="location"
                    //         name="Location"
                    //         type="text"
                    //         onInput={inputHandler}
                    //     />
                    // </React.Fragment>
    //     )
    // }
 


    return (   
        <div className="center">
            <form className="auth-control">
                <div className="auth-control__signup">
                </div>
                <div className="auth-control__login">
                    <h2 className="auth-control__login-header">
                    {
                        loginMode ? 'Login' : 'Sign Up'
                    }</h2>
                    <div className="auth-control__login-form">
                        <Input 
                            class="auth-control__login-item"
                            id="email"
                            validators={[VALIDATOR_EMAIL()]}
                            name="E-mail"
                            type="email"
                            onInput={inputHandler}
                        />
                        <Input 
                            class="auth-control__login-item"
                            id="password"
                            name="Password"
                            validators={[VALIDATOR_MINLENGTH(5)]}
                            type="password"
                            onInput={inputHandler}
                            loginPassword
                        />  
                        {!loginMode && element}
                        <div className="auth-control__login-actions">
                            <Button disabled={!formState.isValid} type="submit" size="small" inverse>{loginMode ? 'Log In' : 'Sign Up'}</Button>
                            <div style={{ color: 'rgba(0, 0, 0, 0.2)', margin: '0 10px'  }}>or</div>
                            <Button onClick={switchModeHandler} size='small'>{loginMode ? 'Sign Up' : 'Log In'}</Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Auth;
