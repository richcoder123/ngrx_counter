

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPostsState } from './posts.state';

const getPostsSelector = createFeatureSelector<IPostsState>('posts');

export const getPosts = createSelector(getPostsSelector, (state) => {
    return state.posts;
})