
import * as fromPizzas from '../actions/pizzas.action'
import { Pizza } from '../../models/pizza.model';

export interface PizzaState {
    entities: { [id: number]: Pizza};
    loaded: boolean;
    loading: boolean;
}

export const initialState : PizzaState = {
    entities: {},
    loaded: false,
    loading: false
}

export function reducer(state = initialState, action: fromPizzas.PizzasAction): PizzaState {
    
    switch(action.type){
        case fromPizzas.LOAD_PIZZAS: {
            return { 
                ...state, 
                loading: true
            }
         }
        case fromPizzas.LOAD_PIZZAS_SUCCESS: {
          const pizzas = action.payload;          
          // todo - come back here
          // rewrite & understand
          const entities = pizzas.reduce(  
              (entities: { [id: number]: Pizza }, pizza: Pizza) => {
            return {
              ...entities,
              [pizza.id]: pizza
              };
            },
            {
              ...state.entities
            }
          );
          

          return {
                ...state,
                loaded: true,
                loading: false,
                entities,
           };
        }
        case fromPizzas.LOAD_PIZZAS_FAIL: {
            return {
                ...state,
                loading:false,
                loaded:false
            }
        }

        case fromPizzas.UPDATE_PIZZA_SUCCESS:
        case fromPizzas.CREATE_PIZZA_SUCCESS: {
            const pizza = action.payload;
            const entities = {
                ...state.entities,
                [pizza.id]: pizza,
            };

            return {
                ...state,
                entities
            };
        }

        case fromPizzas.DELETE_PIZZA_SUCCESS:{

            const pizza = action.payload;

            // interesting, this statement removes the pizza from the
            // the collection - not sure how this statement really works
            const { [pizza.id]: removed, ...entities} = state.entities;
          
            return {
                ...state,
                entities
            };
        }

        case fromPizzas.CREATE_PIZZA_FAIL: {
            return {
                ...state,
                loading:false,
                loaded:false
            } 
        }
    
        default: {
            return state;
        } 
    }
 }

 export const getPizzasEntities = (state: PizzaState) => state.entities;
 export const getPizzasLoading = (state: PizzaState) => state.loading;
 export const getPizzasLoaded = (state: PizzaState) => state.loaded;


