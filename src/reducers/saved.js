import { SAVED_SUCCESS } from '../actions/saved';

    const initialState = {
        saved: []
    }

    export default function savedReducer(state=initialState, action) {
        if (action.type === SAVED_SUCCESS) {
            return Object.assign({}, state, {
                saved: action.site
            });
        }
        return state;
    }