import React, { useState } from 'react';
import './PersonItem.css';
import Avatar from '../../../util/UIComponents/Avatar';
import Button  from '../../../util/UIComponents/Button';
import LoadingSpinner from '../../../util/components/LoadingSpinner';

import { AuthContext } from '../../../util/ auth-context';

import Card from '../../../util/UIComponents/Card';

const PersonItem = props => {

    const [isLoading, setIsLoading] = useState(false);

    return (
        <React.Fragment>
        <li className="person-item">
        <Card>
            <div className="image-control">
                    {!isLoading ?
                     <Avatar 
                        image="https://media.treehugger.com/assets/images/2019/10/humpback-calf.jpg.860x0_q70_crop-scale.jpg" 
                        alt={props.name}
                        style={{width: "6rem", height: "6rem"}}
                    />
                    :
                    <LoadingSpinner />
                    }
            </div>
            <div className="name-control">
                <h2>{props.name} {props.surname}</h2>
            </div>
            <div className="bio-control">
                <p>Lives in {props.location}</p>
                <p>Born: {props.dateOfBirth}</p>
                <div className="button-control">
                    <Button disabled>Message</Button>
                    <Button>Add To Friends</Button>
                </div>
            </div>
        </Card>
    </li>
    </React.Fragment>
    )
};

export default PersonItem; 