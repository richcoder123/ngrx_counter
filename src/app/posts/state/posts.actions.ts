
import { createAction, props } from '@ngrx/store';
import { IPost } from 'src/app/models/post.model';

export const updateAction = '[Posts page] update action';
export const deleteAction = '[Posts page] delete action';

export const addPost = createAction('addPost', props<{
    post: IPost
}>());

export const updatePost = createAction(updateAction, props<{
    post: IPost
}>());

export const deletePost = createAction(deleteAction, props<{
    id: string
}>());
