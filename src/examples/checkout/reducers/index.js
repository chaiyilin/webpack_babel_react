import {combineReducers} from 'redux';
import preloadedState from './preloadedState';
import _ from 'lodash';

let currentUser;
function updateProductWithPricingRule(products, action, state) {
    const {pricingRules} = state;
    let currentUserPricingRules=[];
    if (currentUser.pricingRules) {
        currentUserPricingRules=_.map(currentUser.pricingRules,
            pricingRuleId => _.find(pricingRules, pricingRule => pricingRule.id === pricingRuleId))
    }
    const newProducts= _.map(products, (product) => {
        let matchedPricingRule=_.find(currentUserPricingRules, pricingRule => pricingRule.productId === product.id);
        return {...product, pricingRule: matchedPricingRule};
    });
    return newProducts;
}

function login(oldState, action, wholeState) {
    const {products, pricingRules, customers} = wholeState;
    const username = action.payload.username;
    let privilegedCustomer = _.find(customers, customer => customer.username.toUpperCase() === username.toUpperCase());

    if (privilegedCustomer) {
        currentUser = {...privilegedCustomer};
    } else {
        currentUser = {username:username, pricingRules: []};
    }
    return currentUser;
}

function getMod(x, y) {
    return parseInt(x / y)
}

function newAmount(amount, before, after) {
    const discountedAmount = getMod(amount , before) * after;
    const noDiscountedAmount = amount % before;
    return discountedAmount + noDiscountedAmount;
}

function calculateSubtotal(pricingRule, price, amount) {
    switch (pricingRule.id) {
        //3 for 2 deals on Classic Ads
        case 1 :
            return price * newAmount(amount, 3, 2);
        //discount on Standout Ads where the price drops to $299.99 per ad
        case 2 :
            return 299.99 * amount;
        //discount on Premium Ads when 4 or more are purchased. The price drops to $379.99
        case 3 : {
            if (amount >= 4) {
                return 379.99 * amount
            } else {
                return price * amount
            }
        }
        //5 for 4 deal on Classic Ads
        case 4 : {
            return price * newAmount(amount, 5, 4);
        }
        //discount on Standout Ads where the price drops to $309.99 per ad
        case 5 :
            return 309.99 * amount;
        //discount on Premium Ads when 3 or more are purchased. The price drops to $389.99
        case 6 : {
            if (amount >= 3) {
                return 389.99 * amount
            } else {
                return price * amount
            }
        }
        default:
            throw "price rule cannot be recognized";
    }
}
function updateAdAmount(products, action) {
    const {productId, amount} = action.payload;
    const newProducts = _.map(products, (product) => {
        if (product.id === productId) {
            const subtotal = product.price * amount;
            if (product.pricingRule) {
                return {
                    ...product,
                        amount:amount,
                        subtotal: +subtotal.toFixed(2),
                        saved: +(subtotal - calculateSubtotal(product.pricingRule, product.price, amount)).toFixed(2)
                };
            } else {
                return {...product, ...{subtotal: +subtotal.toFixed(2)}};
            }
        }else{
            return product
        }
    });
    return newProducts
}

function reducers(state, action) {
    switch (action.type) {
        case "AUTH_LOGIN" : {
            return {
                ...state,
                currentUser: login(state.currentUser, action, state),
                products: updateProductWithPricingRule(state.products, action, state)
            };
        }
        case "UPDATE_AD_AMOUNT" : {
            return {
                ...state,
                products: updateAdAmount(state.products, action)
            };
        }
        default:
            return state;
    }
}

const rootReducer = (state = preloadedState, action) => {
    return reducers(state, action)
}
export default rootReducer
