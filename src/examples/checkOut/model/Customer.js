import { ValidatingModel } from 'redux-orm';
import PropTypes from 'prop-types';

export class Customer extends ValidatingModel {}

Customer.modelName = 'Customer';
Customer.fields = {
    user: fk('User', 'todos'),
    pricingRules:many('PricingRule', 'customers')
};

Customer.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    pricingRules: PropTypes.oneOf([
        PropTypes.instanceOf(PricingRule),
        PropTypes.number
    ]).isRequired,

};