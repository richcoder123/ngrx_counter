import { initialState } from "./posts.state";
import { addPost, deletePost, updatePost } from "./posts.actions";
import { createReducer, on } from "@ngrx/store";

const _postsReducer = createReducer(initialState, 
    on(addPost, (state, param) => {
        let post = {...param.post};
        post.id = String(state.posts.length + 1);
        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),
    on(updatePost, (state, param) => {
        const updatedPosts = state.posts.map((post) => {
            return param.post.id === post.id ? param.post : post;
        });
        return {
            ...state,
            posts: updatedPosts
        };
    }),
    on(deletePost, (state, param) => {
        console.log('delete reducer');
        console.log(param.id);
        const updatedPosts = state.posts.filter(post => {
            return post.id !== param.id
        });
        return {
            ...state,
            posts: updatedPosts
        };
    })
    );

export function postsReducer(state, actions) {
    return _postsReducer(state, actions);
}