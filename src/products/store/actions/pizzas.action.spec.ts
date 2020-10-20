import { PizzaDisplayComponent } from 'src/products/components';
import { Pizza } from 'src/products/models/pizza.model';
import * as fromPizzas from './pizzas.action';

describe(`Pizzas Actions `, () => {

    describe(`LoadPizzas Actions `, () => {
        describe(`LoadPizzas`, () => {
            it(`Should create an action`, () => {
                const action = new fromPizzas.LoadPizzas();

                expect({...action}).toEqual({
                    type: fromPizzas.LOAD_PIZZAS
                })
            })
        })



        describe(`LoadPizzasFail`, () => {
            it(`LoadPizzasFail Should create an action`, () => {

                const payload = { 
                    message: 'Load Error'
                 };

                const action = new fromPizzas.LoadPizzasFail(payload);

                expect({...action}).toEqual(
                    {
                      type: fromPizzas.LOAD_PIZZAS_FAIL,
                      payload
                    }
                   )
            })
        })
    })


    describe(`LoadPizzasSuccess`, () => {
        it(`LoadPizzasSuccess Should create an action`, () => {

            const payload: Pizza[] = 
            [{ id: 0, name: 'aaa', toppings: [ { id:0, name: 't1'}, { id:1, name: 't2'}] }];

            const action = new fromPizzas.LoadPizzasSuccess(payload);

            expect({...action}).toEqual(
                {
                  type: fromPizzas.LOAD_PIZZAS_SUCCESS,
                  payload
                }
               )
        })
    })
})


