import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";
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
    })
) 


export function counterReducer(state, action) {
    return _counterReducer(state, action);
}