import React from 'react';
import './LoadingSpinner.css';
import spinner from '../../util/spinner.png';

const LoadingSpinner = props => {
    return (
        <div class={`${props.asOverlay && 'loading-spinner__overlay'}`}>
            <div className="ring">
                <img src={spinner} />
            </div>
       </div>
    );
};

export default LoadingSpinner;