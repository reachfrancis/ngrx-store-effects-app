import * as fromPizzas from './pizza.reducers';
import * as fromActions from '../actions/pizzas.action';
import { Pizza } from '../../models/pizza.model';


describe('PizzasReducer', () => {

    describe('undefined action', () => {

        it(`should return the default state`, () => {
            const { initialState } = fromPizzas;
            const action = {} as any;
            const state = fromPizzas.reducer(undefined, action);

            expect(state).toBe(initialState);
        });
    });


    describe('LOAD_PIZZAS action', () => {

        it(`should set loading to true`, () => {
            // arrange
            const expectedResult: fromPizzas.PizzaState = { 
                entities: { },
                loaded: false,
                loading: true
            };

            const { initialState } = fromPizzas;

            const loadPizzaAction = new fromActions.LoadPizzas();
            const state = fromPizzas.reducer(initialState, loadPizzaAction);
            expect(state).toEqual(expectedResult);
        });
    });



    describe('LOAD_PIZZAS_SUCCESS action', () => {

        it(`should map an array to entities`, () => {
            // arrange
            const pizzas: Pizza[] = [
                {id: 1, name: 'Pizza #1', toppings: []},
                {id: 2, name: 'Pizza #2', toppings: []} 
            ];

            const entities = {
                1:  pizzas[0],
                2:  pizzas[1],
            }

            const { initialState } = fromPizzas;
        
            const loadPizzaSuccessAction = new fromActions.LoadPizzasSuccess(pizzas);

            const state = fromPizzas.reducer(initialState, loadPizzaSuccessAction);

            console.log(JSON.stringify(state));
            
            expect(state.entities).toEqual(entities);
        });
    });
})