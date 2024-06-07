import { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../store/UserSlice";

const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const token = useSelector(selectCurrentToken);

    
    const fetchData = useCallback(async (overrideOptions = {}) => {
        console.log(token);
        if (!token) {
            // Token nie jest zdefiniowany, wykonaj odpowiednie działania
            console.error("Token nie jest zdefiniowany. Użytkownik nie jest zalogowany.");
            return;
        }

        setLoading(true);
        try {

            const headers = {
                ...options.headers,
                ...overrideOptions.headers,
                ...(token ? { Authorization: `Bearer ${token}`} : {})
            }

            const response = await fetch(url, { ...options, ...overrideOptions, headers: headers });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            console.log(result);
            setData(result);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [url, options, token]);

    return { data, error, loading, fetchData };
};

export default useFetch;
