import { useState, useCallback, useRef, useEffect } from 'react';

export const useHttpClient = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorState, setErrorState] = useState();

    const activeHttpRequest = useRef([]);

    const sendRequest = useCallback(async (url, method, body = null, headers = {}) => {

        setIsLoading(true);
        const httpAbortController = new AbortController();
        activeHttpRequest.current.push(httpAbortController);
        try {
            const response = await fetch(url, {
                method: method,
                body: body,
                headers: headers,
                signal: httpAbortController.signal
            });

            const responseData = await response.json();

            activeHttpRequest.current = activeHttpRequest.current.filter(
                reqController => reqController !== httpAbortController
            )

            if(!response.ok){
                throw new Error(responseData.message);
            }

            setIsLoading(false);
            return responseData;

        } catch (err) {
            setErrorState(err.message);
            setIsLoading(false);
            throw err;
        }

    }, []);

    const clearError = () => {
        setErrorState(null);
    }

    useEffect(() => {
        return () => {
            activeHttpRequest.current.forEach(abortControllers => abortControllers.abort());
        };
    }, []);

    return {
        isLoading,
        errorState,
        sendRequest,
        clearError
    };


};