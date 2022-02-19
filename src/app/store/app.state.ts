
import { IinitalState } from "../counter/state/counter.state";
import { IPostsState } from "../posts/state/posts.state";
import { counterReducer } from "../counter/state/counter.reducer";
import { postsReducer } from "../posts/state/posts.reducer";
import { ISharedState } from './shared/shared.state';
import { SHARED_STATE_NAME } from './shared/shared.selector';
import { SharedReducer } from './shared/shared.reducer';

export interface IAppState {
    [SHARED_STATE_NAME]: ISharedState;
};

export const appReducer = {
    [SHARED_STATE_NAME]: SharedReducer
};

