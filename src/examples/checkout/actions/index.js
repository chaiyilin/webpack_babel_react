import {
    UPDATE_AD_AMOUNT,
    AUTH_LOGIN,
    AUTH_LOGOUT
} from './actionTypes';

export const updateAdAmount = (productId, amount) => {
    return {
        type: UPDATE_AD_AMOUNT,
        payload: {
            productId,
            amount
        }
    };
};

export const login = (username, password) => {
    return {
        type: AUTH_LOGIN,
        payload: {
            username,
            password
        }
    };
};

export const logout = () => {
    return {
        type: AUTH_LOGOUT,
        payload: {
        }
    };
};