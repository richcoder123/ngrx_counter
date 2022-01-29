import { createReducer, on } from "@ngrx/store";
import { customincrement, decrement, increment, reset } from "./counter.actions";
import { IinitalState, initialState } from "./counter.state";

const _counterReducer = createReducer(
    initialState,
    on(increment, (state: IinitalState) => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }),
    on(decrement, (state: IinitalState) => {
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(reset, (state: IinitalState) => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(customincrement, (state: IinitalState, param) => {
        console.log(param);
        return {
            ...state,
            counter: state.counter + param.count 
        }
    })
) 


export function counterReducer(state, action) {
    return _counterReducer(state, action);
}