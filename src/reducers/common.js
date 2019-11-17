import {
    APP_LOAD,
    ARTICLES_LOAD,
    ARTICLE_DETAIL_LOAD
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
        case ARTICLE_DETAIL_LOAD:
            return {
                ...state,
                article: action.payload
            };
        default:
            return state;
    }
};