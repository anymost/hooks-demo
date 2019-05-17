import React, { useState, useEffect, useReducer } from 'react';

const FETCH_INIT = 'FETCH_INIT';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILED = 'FETCH_FAILED';
const initState = {
    loading: false,
    error: false,
    data: ''
};

function reducer(state = initState, action) {
    switch (action.type) {
        case FETCH_INIT:
            return {
                data: '',
                loading: true,
                error: false
            };
        case FETCH_SUCCESS:
            return {
                data: action.payload,
                loading: false,
                error: false
            };
        case FETCH_FAILED:
            return {
                data: '',
                loading: false,
                error: true
            };
        default:
            return initState;
    }
}


function useFetch() {
    const [url, setUrl] = useState('http://localhost:5500?search=redux');
    const [state, dispatch] = useReducer(reducer, initState);
    useEffect(() => {
        async function request() {
            dispatch({ type: FETCH_INIT });
            try {
                const value = await fetch(url, { mode: 'cors' });
                const text = await value.text();
                dispatch({ type: FETCH_SUCCESS, payload: text });
            } catch (e) {
                dispatch({ type: FETCH_FAILED });
            }
        }

        request();
    }, [url]);
    return {
        ...state,
        setUrl
    };
}

export default function Effect() {
    const [query, setQuery] = useState('');
    const { loading, error, data, setUrl } = useFetch();
    return <div>
        {loading && <h2>loading...</h2>}
        {error && <h2>error</h2>}
        {!(loading || error) && <h4>{data}</h4>}
        <div>
            <input type="text" value={query} onChange={event => setQuery(event.target.value)}/>
            <button onClick={() => setUrl(`http://localhost:5500?search=${query}`)}>query</button>
        </div>
    </div>;
}
