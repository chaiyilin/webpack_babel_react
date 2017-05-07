import { createSelector } from 'reselect';
import _ from 'lodash';

const productsSelector=state => state.products;
const pricingRulesSelector=state => state.pricingRules;
const customersSelector=state => state.customers;

const currentUserSelector = state => state.currentUser;

function ProductWithPricingRule(products, pricingRules, currentUser) {
    return _.map(products, (product,index,array)=> {
        if (currentUser.pricingRules) {
            _.forEach(currentUser.pricingRules, pricingRuleId=> {
                const pricingRule=_.find(pricingRules,pricingRule=>pricingRule.id===pricingRuleId);
                if (product.id === pricingRule.productId) {
                    array[index] = {...product, pricingRule};
                }
            })
        }
        return product
    })
}
const productsWithPricingRuleSelector=createSelector(
    productsSelector,
    pricingRulesSelector,
    currentUserSelector,
    ProductWithPricingRule
);

export default productsWithPricingRuleSelector