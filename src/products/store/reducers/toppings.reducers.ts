import * as fromToppings from '../actions/toppings.action';
import { Topping} from '../../models/topping.model';

export interface ToppingState {
    entities: { [id: number]: Topping};
    loaded: boolean;
    loading: boolean;
    selectedToppings: number[];
}

export const initialState: ToppingState = {
    entities: {},
    loaded: false,
    loading: false,
    selectedToppings: []
};


export function reducer(state = initialState, action: fromToppings.ToppingsAction): ToppingState {

    switch(action.type){

      case fromToppings.VISUALISE_TOPPINGS: {
        const selectedToppings = action.payload;

        return {
          ...state,
          selectedToppings
        };

      }
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
            };
         }
       
        default:  
          return state;
        } 
  }


export const getToppingEntities = ( state: ToppingState) => state.entities;
export const getToppingsLoaded =  ( state: ToppingState) => state.loaded;
export const getToppingsLoading = ( state: ToppingState) => state.loading;
export const getSelectedToppings = ( state: ToppingState) => state.selectedToppings;
