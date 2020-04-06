import React, { Component } from 'react';

import { Image } from 'react-bootstrap';
import log from './icon.png'


class Logo extends Component {
    render(){
        return (
            <Image
                src={log}
                className="Logo"
                alt={this.props.name}
            />
        )
    }
}

export default Logo;