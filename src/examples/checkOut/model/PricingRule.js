import { ValidatingModel } from 'redux-orm';
import PropTypes from 'prop-types';

export class PricingRule extends ValidatingModel {
}
PricingRule.modelName = 'PricingRule';
PricingRule.fields = {
    product: fk('Product', 'pricingRules')
};