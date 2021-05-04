import { LOAD_TRENDING, SEARCH_MOVIES, GET_MOVIE } from './types';


export const movieReducer = (state, action) => {
    switch(action.type) {
        case LOAD_TRENDING:
            return {
                ...state,
                trending: action.payload
            };
        case SEARCH_MOVIES:
            return {
                ...state,
                searched: action.payload
            };
        case GET_MOVIE: 
            return {
                ...state,
                movie: action.payload
            };
        default:
            return state;
    }
}
