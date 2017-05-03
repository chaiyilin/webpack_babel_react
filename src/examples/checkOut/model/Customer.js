import { Model } from 'redux-orm';

export class Customer extends Model {}

Customer.modelName = 'Customer';
Customer.fields = {
    user: fk('User', 'todos'),
    tags: many('Tag', 'todos'),
};