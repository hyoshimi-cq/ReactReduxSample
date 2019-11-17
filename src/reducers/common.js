import {
    APP_LOAD,
    ARTICLES_LOAD
} from '../constants/actionTypes';

const defaultState = {
    appName: 'Qiita Client'
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case APP_LOAD:
            return {
                ...state,
                appLoaded: true,
            };
        case ARTICLES_LOAD:
            return {
                ...state,
                articles: action.payload
            };
        default:
            return state;
    }
};