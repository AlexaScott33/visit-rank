import { REACT_APP_KEY } from '../config';

export const FETCH_VISITS_REQUEST = 'FETCH_VISITS_REQUEST';
export const fetchVisitsRequest = () => ({
    type: FETCH_VISITS_REQUEST
});

export const FETCH_VISITS_SUCCESS = 'FETCH_VISITS_SUCCESS';
export const fetchVisitsSuccess = rank => ({
    type: FETCH_VISITS_SUCCESS,
    rank
});

export const FETCH_VISITS_ERROR = 'FETCH_VISITS_ERROR';
export const fetchVisitsError = error => ({
    type: FETCH_VISITS_ERROR,
    error
});

export const fetchVisits = () => dispatch => {
    console.log(`API KEY: ${REACT_APP_KEY}`);
    dispatch(fetchVisitsRequest());

    fetch(`https://api.webfinery.com/ranks?domain=amazon.com&key=${REACT_APP_KEY}`, {
        method: 'GET',
        dataType: 'JSON',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${REACT_APP_KEY}`
        }
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        dispatch(fetchVisitsSuccess(data))
    })
    .catch((error) => {
        console.log(`The error is: ${error}`);
        dispatch(fetchVisitsError(error));
    });
}