

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IinitalState } from './counter.state';

const getCounterState = createFeatureSelector<IinitalState>('counter');

export const getCounter = createSelector(getCounterState, (state) => {
    return state.counter;
});

export const getDeveloper = createSelector(getCounterState, (state) => {
    return state.developer;
});

