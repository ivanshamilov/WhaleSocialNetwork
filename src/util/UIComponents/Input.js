import React, { useReducer, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { validate } from '../validators';

import './Input.css';


const inputReducer = (state, action) => {
    switch(action.type){
        case 'CHANGE': 
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            }
        case 'TOUCH':
            return {
                ...state,
                isTouched: true
            }
        default:
            return state;
    }
};

const Input = props => {

    const [inputState, dispatch] = useReducer(inputReducer, { value: '', isValid: false, isTouched: false });

    let element;

    const changeHandler = (event) => {
        dispatch({ type: 'CHANGE', val: event.target.value, validators: props.validators})
    };

    const touchHandler = (event) => {
        dispatch({type: 'TOUCH'});
    }


    const { id, onInput } = props; 
    const { value, isValid } = inputState;
  
    useEffect(() => {
        onInput(id, value, isValid);
    }, [id, value, isValid, onInput]);


    if (props.loginPassword) {
        element = (
            <React.Fragment>
                <label htmlFor="password" name="Password">Password</label>
                <div className="input-control">
                    <input 
                        type="password" 
                        onChange={changeHandler}
                        onBlur={touchHandler}
                        id="password"
                    />
                    <Link to="/">Forgot Password?</Link>
                </div>
            </React.Fragment> 
        );
    } else {
        element = (
            <React.Fragment>
                <label htmlFor={props.id} name={props.id}>{props.name}</label>
                <input 
                    type={props.type} 
                    onChange={changeHandler}
                    onBlur={touchHandler}
                    id={props.id} 
                />
             </React.Fragment>
        )
    }

    return (
       <div className={`${props.class} ${!inputState.isValid && inputState.isTouched && 'invalid'}`}>
            {element}
       </div>
    )
};



export default Input;


