import { createSelector } from '@ngrx/store';
import { create } from 'core-js/fn/object';
import { Topping } from 'src/products/models/topping.model';

import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';

import * as fromToppings from '../reducers/toppings.reducers';

export const getToppingsState = createSelector(
    fromFeature.getProductState,
    (state: fromFeature.ProductState) => state.toppings
);

export const getToppingEntities = createSelector(
    getToppingsState,
    fromToppings.getToppingEntities
);

export const getAllToppings = createSelector(
    getToppingEntities,
    (entities) =>{
       return Object.keys(entities)
       .map( id => entities[parseInt(id,10)])
    }  
);

export const getToppingsLoaded = createSelector(
    getToppingsState,
    fromToppings.getToppingsLoaded
);

export const getToppingsLoading = createSelector(
    getToppingsState,
    fromToppings.getToppingsLoaded
)


