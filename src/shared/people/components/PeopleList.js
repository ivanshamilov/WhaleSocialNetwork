import React from 'react';
import './PeopleList.css'
import PersonItem from './PersonItem';
import LoadingSpinner from '../../../util/components/LoadingSpinner';



const PeopleList = props => {
    return (
        <ul className="people-list">
                {props.people.map(person => {
                    return <PersonItem 
                        name={person.name}
                        bio={person.bio}
                        location={person.location}
                        age={person.age}
                    />
                })}
        </ul>
    )
}

export default PeopleList;