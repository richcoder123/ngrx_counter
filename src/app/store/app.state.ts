
import { IinitalState } from "../counter/state/counter.state";
import { IPostsState } from "../posts/state/posts.state";
import { counterReducer } from "../counter/state/counter.reducer";
import { postsReducer } from "../posts/state/posts.reducer";
import { ISharedState } from './shared/shared.state';
import { SHARED_STATE_NAME } from './shared/shared.selector';
import { SharedReducer } from './shared/shared.reducer';
import { AUTH_STATE_NAME } from "../auth/state/auth.selector";
import { IAuthState } from "../auth/state/auth.state";
import { AuthReducer } from '../auth/state/auth.reducer';
export interface IAppState {
    [SHARED_STATE_NAME]: ISharedState;
    [AUTH_STATE_NAME]: IAuthState;
};

export const appReducer = {
    [SHARED_STATE_NAME]: SharedReducer,
    [AUTH_STATE_NAME]: AuthReducer
};

