import {ActionReducerMap, createSelector, createFeatureSelector} from '@ngrx/store';

import * as fromPizzas from './pizza.reducers';

export interface ProductState {
    pizzas: fromPizzas.PizzaState
}

export const reducers: ActionReducerMap<ProductState> = {
    pizzas: fromPizzas.reducer
}



export const getProductState = createFeatureSelector<ProductState>
('products');

// Pizza state
export const getPizzaState = createSelector(
    getProductState, 
    (state: ProductState) => state.pizzas
);

export const getAllPizzas = createSelector(
    getPizzaState,
    fromPizzas.getPizzas
);

export const getPizzasLoaded = createSelector(
    getPizzaState, 
    fromPizzas.getPizzasLoaded
);


export const getPizzasLoading = createSelector(
    getPizzaState, 
    fromPizzas.getPizzasLoading
);