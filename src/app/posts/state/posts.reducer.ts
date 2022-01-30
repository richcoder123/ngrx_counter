import { initialState } from "./posts.state";
import { createReducer } from "@ngrx/store";

const _postsReducer = createReducer(initialState);

export function postsReducer(state, actions) {
    return _postsReducer(state, actions);
}