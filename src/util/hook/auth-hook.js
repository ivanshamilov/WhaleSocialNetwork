import { useCallback, useEffect, useState } from 'react';

let logoutTimer;

export const useAuth = () => {
    const [token, setToken] = useState(false);
    const [tokenExpiration, setTokenExpiration] = useState();
    const [userId, setUserId] = useState(false);


    const login = useCallback((uid, token, expirationDate) => {
        setToken(token);
        setUserId(userId);
        const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 15);
        setTokenExpiration(tokenExpirationDate);
        localStorage.setItem(
            'userData',
            JSON.stringify({
                userId: uid,
                token: token,
                expiration: tokenExpirationDate.toISOString()
            })
        );
    }, []);


    const logout = () => {
        setToken(null);
        setTokenExpiration(null);
        setUserId(null);
        localStorage.removeItem('userData');
    };


    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData'));
        if(storedData && storedData.token && new Date(storedData.expiration) > new Date()) {
            login(storedData.userId, storedData.token, new Date(storedData.expiration));
        }
    }, [login]);

    

    return { token, login, logout, userId };


}