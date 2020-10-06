import { createSelector } from '@ngrx/store';
import { Pizza } from 'src/products/models/pizza.model';

import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizza.reducers';

import * as fromToppings from '../selectors/toppings.selectors';


export const getPizzaState = createSelector(
    fromFeature.getProductState, 
    (state: fromFeature.ProductState) => state.pizzas
);

export const getPizzasEntities = createSelector(
    getPizzaState,
    fromPizzas.getPizzasEntities
);

export const getSelectedPizza = createSelector(
    getPizzasEntities,
    fromRoot.getRouterState,
    (entities, router): Pizza =>{
     const selectedPizza = router.state && entities[router.state.params.pizzaId];
        return selectedPizza;
    }
)

export const getPizzaVisualised = createSelector(
    getSelectedPizza,
    fromToppings.getToppingEntities,
    fromToppings.getSelectedToppings,
    (pizza, toppingEntities, selectedToppings) => {
        const toppings = selectedToppings.map(id => toppingEntities[id]);
       return { ...pizza, toppings};
   }
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


