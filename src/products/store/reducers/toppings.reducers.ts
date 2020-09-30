import * as fromToppings from '../actions/toppings.action';
import { Topping} from '../../models/topping.model';
import { state } from '@angular/core/src/animation/dsl';

export interface ToppingState {
    entities: { [id: number]: Topping};
    loaded: boolean;
    loading: boolean;
}


export const initialState: ToppingState = {
    entities: {},
    loaded: false,
    loading: false
};


export function reducer(state = initialState, action: fromToppings.ToppingsAction): ToppingState {

    switch(action.type){

        case fromToppings.LOAD_TOPPINGS: {
            return {
                ...state,
                loading:true,
                loaded: false
            }
        }

        case fromToppings.LOAD_TOPPINGS_SUCCESS: {
            const toppings = action.payload;          
            // todo - come back here
            // rewrite & understand
            const entities = toppings.reduce(  
                (entities: { [id: number]: ToppingState }, topping: Topping) => {
              return {
                ...entities,
                [topping.id]: topping
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

        case fromToppings.LOAD_TOPPINGS_FAIL: {
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

export const getToppingEntities = ( state: ToppingState) => state.entities;
export const getToppingsLoaded =  ( state: ToppingState) => state.loaded;
export const getToppingsLoading = ( state: ToppingState) => state.loading;
