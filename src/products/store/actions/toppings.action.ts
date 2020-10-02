import { Action } from '@ngrx/store';

import { Topping} from '../../models/topping.model';


export const LOAD_TOPPINGS = '[Products] Load Toppings';
export const LOAD_TOPPINGS_FAIL = '[Products] Load Toppings Fail';
export const LOAD_TOPPINGS_SUCCESS = '[Products] Load Toppings Success';

export class LoadToppings implements Action {
    readonly type = LOAD_TOPPINGS;
}

export class LoadToppingFail implements Action {
    readonly type = LOAD_TOPPINGS_FAIL;
    constructor(public payload: any){}
}

export  class LoadToppingSuccess implements Action {
    readonly type = LOAD_TOPPINGS_SUCCESS;
    constructor(public payload: Topping[]){}
}


export type ToppingsAction = 
 LoadToppings 
| LoadToppingFail 
| LoadToppingSuccess;