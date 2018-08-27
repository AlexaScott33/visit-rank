import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import visitsReducer from './reducers/visits';
// import savedReducer from './reducers/saved';

// export default createStore(
//     combineReducers({
//         visitsReducer,
//         savedReducer
//     }),
//     applyMiddleware(thunk)
// );

export default createStore(
        visitsReducer,
    applyMiddleware(thunk)
);