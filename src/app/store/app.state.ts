
import { IinitalState } from "../counter/state/counter.state";
import { IPostsState } from "../posts/state/posts.state";
import { counterReducer } from "../counter/state/counter.reducer";
import { postsReducer } from "../posts/state/posts.reducer";

export interface IAppState {
    counter: IinitalState;
    posts: IPostsState;
};

export const appReducer = {
    counter: counterReducer,
    posts: postsReducer
};

