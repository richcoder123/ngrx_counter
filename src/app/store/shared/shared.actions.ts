import { createAction, props } from '@ngrx/store';


export const SHOW_LOADING_ACTION = '[Shared state] set loading state';

export const setLoadingSpinner = createAction(SHOW_LOADING_ACTION, props<{
    status: boolean,
}>());
