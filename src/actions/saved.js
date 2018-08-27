export const SAVED_REQUEST = 'SAVED_REQUEST';
export const savedRequest = () => ({
    type: SAVED_REQUEST
});

export const SAVED_SUCCESS = 'SAVED_SUCCESS';
export const savedSuccess = site => ({
    type: SAVED_SUCCESS,
    site
});

export const SAVED_ERROR = 'SAVED_ERROR';
export const savedError = error => ({
    type: SAVED_ERROR,
    error
});