import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import visitsReducer from './reducers/visits';

export default createStore(
    visitsReducer,
    applyMiddleware(thunk)
);