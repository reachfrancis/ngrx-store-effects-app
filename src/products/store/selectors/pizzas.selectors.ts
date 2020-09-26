import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizza.reducers';


export const getPizzaState = createSelector(
    fromFeature.getProductState, 
    (state: fromFeature.ProductState) => state.pizzas
);

export const getPizzasEntities = createSelector(
    getPizzaState,
    fromPizzas.getPizzasEntities
);

export const getAllPizzas = createSelector(
    getPizzasEntities,
    (entities) => {
        return Object.keys(entities)
               .map( id => entities[parseInt(id,10)])
    }
)

export const getPizzasLoaded = createSelector(
    getPizzaState, 
    fromPizzas.getPizzasLoaded
);


export const getPizzasLoading = createSelector(
    getPizzaState, 
    fromPizzas.getPizzasLoading
);


