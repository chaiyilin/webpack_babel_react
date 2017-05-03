var {
    AUTH_LOGIN,
    AUTH_SET_USER,
    AUTH_LOGOUT
} = require('../actions/actionTypes');

function auth(state = {}, action){
    switch(action.type){
        // saves the token into the state
        case AUTH_LOGIN:
            return {
                ...state,
                token: action.token
            };
        // discards the current token (logout)
        case AUTH_LOGOUT:
            return {};
        // saves the current user
        case AUTH_SET_USER:
            return {
                ...state,
                user
            };
        default:
            return state;
    }
}