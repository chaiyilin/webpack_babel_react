import {
    UPDATE_AD_AMOUNT
} from './actionTypes';

export const updateAdAmount = (productId,amount) => {
    return {
        type: UPDATE_AD_AMOUNT,
        payload: {
            productId,
            amount
        }
    };
};