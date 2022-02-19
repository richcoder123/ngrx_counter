import { createAction, props } from '@ngrx/store';


export const SHOW_LOADING_ACTION = '[Shared state] set loading state';
export const SET_ERROR_MESSAGE = '[Shared state] set error message';

export const setLoadingSpinner = createAction(SHOW_LOADING_ACTION, props<{
    status: boolean,
}>());

export const setErrorMessage = createAction(SET_ERROR_MESSAGE, props<{
    message: string,
}>());
