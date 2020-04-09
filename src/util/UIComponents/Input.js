import React from 'react';

import { Link } from 'react-router-dom';

import './Input.css';

const Input = props => {

    let element;
    
    if (props.loginPassword) {
        element = (
            <React.Fragment>
                <label htmlFor="password" name="Password">Password</label>
                <div className="input-control">
                    <input type="password" id="password"/>
                    <Link to="/">Forgot Password?</Link>
                </div>
            </React.Fragment> 
        );
    } else {
        element = (
            <React.Fragment>
                <label htmlFor={props.id} name={props.id}>{props.name}</label>
                <input type={props.type} id={props.id} />
             </React.Fragment>
        )
    }

    return (
       <div className={props.class}>
            {element}
       </div>
    )
};



export default Input;


