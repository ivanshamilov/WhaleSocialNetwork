import React, { useEffect, useState } from 'react';
import PeopleList from '../components/PeopleList';

import LoadingSpinner from '../../../util/components/LoadingSpinner';

import { useHttpClient } from '../../../util/hook/http-hook';









const People = props => {


    const [loadedUsers, setLoadedUsers] = useState([]);
    const { isLoading, errorState, sendRequest, clearError } = useHttpClient();



    useEffect( () => {
       const fetchUsers = async () => {
           try {
               const responseData = await sendRequest('http://localhost:8000/users');

               setLoadedUsers(responseData.users);  // response has a {users: ...} format
           } catch (err) {
           }
       };

       fetchUsers();

    }, [sendRequest]);

    return (
        <React.Fragment>
            {isLoading && <LoadingSpinner asOverlay />}
            {loadedUsers && !isLoading && <PeopleList people={loadedUsers} />}
            {loadedUsers.length === 0 && !isLoading && <div className="center">No users found.</div>}
        </React.Fragment>
    );
}

export default People;