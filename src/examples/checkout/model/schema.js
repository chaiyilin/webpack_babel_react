import {Schema} from 'redux-orm';
import { Customer} from './Customer';
import { PricingRule} from './PricingRule';
import { Product} from './Product';

const schema = new Schema();
schema.register(Customer, PricingRule, Product);

export default schema;