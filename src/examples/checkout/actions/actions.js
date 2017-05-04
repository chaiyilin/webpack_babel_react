import {
    UPDATE_AD_AMOUNT,
    AUTH_LOGIN,
    AUTH_LOGOUT
} from './actionTypes';

export const updateAdAmount = (product, amount) => {
    return {
        type: UPDATE_AD_AMOUNT,
        payload: {
            product,
            amount
        }
    };
};

export const authLogin = (username, password) => {
    return {
        type: AUTH_LOGIN,
        payload: {
            username,
            password
        }
    };
};

export const authLogout = () => {
    return {
        type: AUTH_LOGOUT,
        payload: {
        }
    };
};

const login = (username,password) => dispatch => {
    dispatch(authLogin(username, password));
    return fetch(`https://www.reddit.com/r/${reddit}.json`)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(reddit, json)))
}