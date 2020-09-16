
import * as fromPizzas from '../actions/pizzas.action'
import { Pizza } from '../../models/pizza.model';


export interface PizzaState {
    data: Pizza[];
    loaded: boolean;
    loading: boolean;
}

export const initialState : PizzaState = {
    data: [
        {
            "name": "Blazin' Frank",
            "toppings": [
              {
                "id": 5,
                "name": "mozzarella"
              },
              {
                "id": 6,
                "name": "mushroom"
              },
              {
                "id": 11,
                "name": "sweetcorn"
              },
              {
                "id": 12,
                "name": "tomato"
              }
            ],
            "id": 1
          },
    ],
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
            return {
                ...state,
                loaded: true,
                loading: false
            }
        }
        case fromPizzas.LOAD_PIZZAS_FAIL: {
            return {
                ...state,
                loading:false,
                loaded:false
            }
        }
        default: {
            return initialState;
        } 
    }
 }

 export const getPizzas = (state: PizzaState) => state.data;
 export const getPizzasLoading = (state: PizzaState) => state.loading;
 export const getPizzasLoaded = (state: PizzaState) => state.loaded;
 
 
 
 


