import { FETCH_VISITS_REQUEST,
         FETCH_VISITS_SUCCESS,
         FETCH_VISITS_ERROR,
         SAVED_SUCCESS
        } from '../actions/visits';

        const initialState = {
            visits: [],
            saved: [],
            loading: false,
            error: false
        }

        export default function visitsReducer(state=initialState, action) {
            if (action.type === FETCH_VISITS_REQUEST) {
                return Object.assign({}, state, {
                    loading: true
                });
            }
            else if (action.type === FETCH_VISITS_SUCCESS) {
                return Object.assign({}, state, {
                    visits: action.rank,
                    loading: false,
                    error: false
                });
            }
            else if (action.type === FETCH_VISITS_ERROR) {
                return Object.assign({}, state, {
                    loading: false,
                    error: action.error
                });
            }
            else if (action.type === SAVED_SUCCESS) {
                return Object.assign({}, state, {
                    saved: [...state.saved,
                        {
                        domain: action.name,
                        rank: action.rank
                        }
                    ]
                });
            }
            return state;
        }