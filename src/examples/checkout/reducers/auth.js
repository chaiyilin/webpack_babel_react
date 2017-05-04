import {AUTH_LOGIN, AUTH_LOGOUT} from '../actions/actionTypes';
import _ from 'lodash';

function login(oldState, username, password) {
    const newState = {...oldState};
    const {products, pricingRules, customers}=newState;
    let currentUser = _.filter(customers, customer=>customer.username === username)[0];

    let authentication=newState.authentication = {};
    if (currentUser) {
        authentication.currentUsername = currentUser.username;
        currentUser = {...currentUser, authenticated: true};
        updateProductWithPricingRule(products, pricingRules, currentUser)
    } else {
        authentication.currentUsername = username;
    }
    authentication.authenticated = true;
    return newState;
}

function updateProductWithPricingRule(products, pricingRules, currentUser) {
    _.forEach(products, product=> {
        if (currentUser.pricingRules) {
            _.forEach(currentUser.pricingRules, pricingRuleId=> {
                if (product.id === pricingRuleId) {
                    const pricingRule=_.filter(pricingRules,pricingRule=>pricingRule.productId===pricingRuleId)[0];
                    product = {...product, pricingRule};
                }
            })
        }
    })
}
function auth(state, action) {
    switch (action.type) {
        case AUTH_LOGIN:
            return login(state, ...action.payload);
        case AUTH_LOGOUT:
            return undefined;
        default:
            return state;
    }
}

export default auth