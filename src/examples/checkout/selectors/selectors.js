import { createSelector } from 'reselect';
import schema  from '../models/schema';

export const ormSelector = state => state.orm;

export const user = createSelector(
    ormSelector,
    state => state.currentCustomerId,
    schema.createSelector((orm, currentCustomerId) => {
        return orm.User.withId(currentCustomerId).ref;
    })
);