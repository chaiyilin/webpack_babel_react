import {ValidatingModel, Schema, Model, many, fk} from 'redux-orm';
import {UPDATE_AD_AMOUNT} from '../actions/actionTypes';
import PropTypes from 'prop-types';

export class Product extends ValidatingModel {
    static reducer(state, action,Product,Session ) {
        const {payload, type} = action;
        switch (type) {
            case UPDATE_AD_AMOUNT:
                Product.withId(payload.productId).set('amount', payload.amount);
                break;
        }
    }
}
Product.modelName = 'Product';

Product.propTypes = {
    id: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    user: PropTypes.oneOf([
        PropTypes.instanceOf(User),
        PropTypes.number
    ]).isRequired,
    tags: PropTypes.arrayOf([
        PropTypes.instanceOf(Tag),
        PropTypes.number
    ]),
};
