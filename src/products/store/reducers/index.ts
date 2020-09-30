import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

import * as fromPizzas from './pizza.reducers';

import * as fromToppings from './toppings.reducers';

export interface ProductState {
    pizzas: fromPizzas.PizzaState,
    toppings: fromToppings.ToppingState
}

export const reducers: ActionReducerMap<ProductState> = {
    pizzas: fromPizzas.reducer,
    toppings: fromToppings.reducer
}


export const getProductState = createFeatureSelector<ProductState>
('products');


