

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPostsState } from './posts.state';

export const POSTS_STATE_NAME = 'posts';

const getPostsSelector = createFeatureSelector<IPostsState>(POSTS_STATE_NAME);

export const getPosts = createSelector(getPostsSelector, (state) => {
    return state.posts;
});

export const getPostById = createSelector(getPostsSelector, (state, props) => {
    return state.posts.find((post) => post.id === props.id);
})